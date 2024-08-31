import cn from 'classnames';

import { useUpdate } from '../../hooks/useUpdate.ts';

import Avatar from '../Avatar/Avatar.tsx';
import FormItem from '../FormItemRHF/FormItem.tsx';
import Button from '../Button/Button.tsx';

import styles from './ProfileForm.module.scss';

function ProfileForm({ className }: { className: string; }) {
    console.log('ProfileForm');

    const {
        register,
        handleSubmit,
        onSubmit,
        errorUsername,
        errorEmail,
        errorPassword
    } = useUpdate();

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={cn(
                styles.ProfileForm,
                className
            )}
        >
            <Avatar
                className={styles.ProfileForm__Avatar}
            />
            <FormItem
                className={styles.ProfileForm__FormItem}
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
                className={styles.ProfileForm__FormItem}
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
                className={styles.ProfileForm__FormItem}
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
                className={styles.ProfileForm__Button}
                color="black"
            >
                Update Profile
            </Button>
        </form>
    );
}

export default ProfileForm;
