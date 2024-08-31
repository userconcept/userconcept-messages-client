import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { authApi } from '../redux/services/auth.ts';

import { useAuth } from './useAuth.ts';

type FormProps = {
    username: string;
    email: string;
    password: string;
}

function useSignUp() {
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

    const [registerUser, { isLoading }] = authApi.useRegisterUserMutation();

    const onSubmit: SubmitHandler<FormProps> = (data: FormProps) => {
        registerUser(data);
        reset();
        setIsAuth(true);
    };

    const errorUsername = formState.errors.username?.message;
    const errorEmail = formState.errors.email?.message;
    const errorPassword = formState.errors.password?.message;

    const { isAuth, setIsAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

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

export { useSignUp };
