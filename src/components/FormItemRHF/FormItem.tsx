import { HTMLInputAutoCompleteAttribute } from 'react';
import cn from 'classnames';

import type { UseFormRegisterReturn } from 'react-hook-form';

import Label from '../Label/Label.tsx';
import Input from '../InputRHF/Input.tsx';

import styles from './FormItem.module.scss';

type Props<T extends string = string> = {
    className: string;
    label: string;
    type: "text" | "email" | "password";
    id: string;
    register: UseFormRegisterReturn<T>;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    error: string | undefined;
}

function FormItem({
    className,
    label,
    type,
    id,
    register,
    autoComplete,
    error
}: Props) {
    // console.log('FormItem');

    return (
        <div className={cn(
            styles.FormItem,
            className
        )}>
            <Label
                className={styles.FormItem__Label}
                htmlFor={id}
            >
                {label}
            </Label>
            <Input
                className={styles.FormItem__Input}
                type={type}
                id={id}
                {...register}
                autoComplete={autoComplete}
            />
            {error && <div className={styles.FormItem__error}>{error}</div>}
        </div>
    );
}

export default FormItem;
