import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../redux/hooks.ts';

import { authApi } from '../redux/services/auth.ts';
import { postApi } from '../redux/services/post.ts';

import { useProfile } from './useProfile.ts';

type FormProps = {
    username: string;
    email: string;
    password: string;
}

function useUpdate() {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<FormProps>({
        mode: 'onChange',
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    });

    const { data } = useProfile();

    const [updateUser, { isLoading }] = authApi.useUpdateUserMutation();

    // const onSubmit: SubmitHandler<FormProps> = (data: FormProps) => {
    //     updateUser(data);
    // }

    const onSubmit: SubmitHandler<FormProps> = async (data: FormProps) => {
        try {
            await updateUser(data).unwrap();
            dispatch(postApi.util.invalidateTags(['Post']));
        } catch (error) {

        }
    }

    const errorUsername = formState.errors.username?.message;
    const errorEmail = formState.errors.email?.message;
    const errorPassword = formState.errors.password?.message;

    useEffect(() => {
        reset({
            username: data?.username,
            email: data?.email,
            password: ''
        })
    }, [reset, data]);

    return {
        register,
        handleSubmit,
        isLoading,
        onSubmit,
        errorUsername,
        errorEmail,
        errorPassword
    };
}

export { useUpdate };
