import cn from 'classnames';

import { useSignUp } from '../../hooks/useSignUp.ts';

import FormItem from '../FormItemRHF/FormItem.tsx';
import Button from '../Button/Button.tsx';

import styles from './SignUpForm.module.scss';

function SignUpForm({ className }: { className: string; }) {
    // console.log('SignUpForm');

    const {
        register,
        handleSubmit,
        onSubmit,
        errorUsername,
        errorEmail,
        errorPassword
    } = useSignUp();

    return (
        <form
            className={cn(
                styles.SignUpForm,
                className
            )}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormItem
                className={styles.SignUpForm__FormItem}
                label="Username"
                type="text"
                id="username"
                register={register('username', {
                    required: 'This field is required',
                    minLength: {
                        value: 2,
                        message: 'Minimum 2 Characters required'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Maximum 30 Characters required'
                    }
                })}
                autoComplete="off"
                error={errorUsername}
            />
            <FormItem
                className={styles.SignUpForm__FormItem}
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
                className={styles.SignUpForm__FormItem}
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
                className={styles.SignUpForm__Button}
                color="black"
            >
                Sign Up
            </Button>
        </form>
    );
}

export default SignUpForm;
