import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { authApi } from '../redux/services/auth.ts';

import { useAuth } from './useAuth.ts';

type FormProps = {
    email: string;
    password: string;
}

function useLogin() {
    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<FormProps>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const [authUser, { isLoading }] = authApi.useAuthUserMutation();

    const onSubmit: SubmitHandler<FormProps> = (data: FormProps) => {
        authUser(data);
        reset();
        setIsAuth(true);
    };

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
        errorEmail,
        errorPassword
    };
}

export { useLogin };
