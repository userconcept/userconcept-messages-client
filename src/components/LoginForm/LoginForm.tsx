// @ts-nocheck

import React, { useState } from 'react';
import cn from 'classnames';

import { authApi } from '../../redux/services/auth.ts';

import FormItem from '../FormItem/FormItem.tsx';
import Button from '../Button/Button.tsx';

import styles from './LoginForm.module.scss';

function LoginForm({ className }: { className: string; }) {
    // console.log('LoginForm');

    const initialData = {
        email: '',
        password: ''
    };

    const [authUser, { isLoading }] = authApi.useAuthUserMutation();

    const [formData, setFormData] = useState(initialData);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        authUser(formData);
        setFormData(initialData);
    }

    return (
        <form
            className={cn(
                styles.LoginForm,
                className
            )}
            onSubmit={handleSubmit}
        >
            <FormItem
                className={styles.LoginForm__FormItem}
                label="E-mail"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="off"
            />
            <FormItem
                className={styles.LoginForm__FormItem}
                label="Password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="off"
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
