import cn from 'classnames';

import { useLogin } from '../../hooks/useLogin.ts';

import FormItem from '../FormItemRHF/FormItem.tsx';
import Button from '../Button/Button.tsx';

import styles from './LoginForm.module.scss';

function LoginForm({ className }: { className: string; }) {
    // console.log('LoginForm');

    const {
        register,
        handleSubmit,
        onSubmit,
        errorEmail,
        errorPassword
    } = useLogin();

    return (
        <form
            className={cn(
                styles.LoginForm,
                className
            )}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormItem
                className={styles.LoginForm__FormItem}
                label="Email"
                type="email"
                id="email"
                register={register('email', {
                    required: 'This field is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address'
                    }
                })}
                autoComplete="off"
                error={errorEmail}
            />
            <FormItem
                className={styles.LoginForm__FormItem}
                label="Password"
                type="password"
                id="password"
                register={register('password', {
                    required: 'This field is required',
                    minLength: {
                        value: 3,
                        message: 'Minimum 3 Characters required'
                    },
                    maxLength: {
                        value: 100,
                        message: 'Maximum 100 Characters required'
                    }
                })}
                autoComplete="off"
                error={errorPassword}
            />
            <Button
                className={styles.LoginForm__Button}
                color="black"
            >
                Sign In
            </Button>
        </form>
    );
}

export default LoginForm;
