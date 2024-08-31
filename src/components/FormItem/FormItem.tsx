import React, { HTMLInputAutoCompleteAttribute } from 'react';
import cn from 'classnames';

import Label from '../Label/Label.tsx';
import Input from '../Input/Input.tsx';

import styles from './FormItem.module.scss';

type Props = {
    className: string;
    label: string;
    type: "text" | "email" | "password";
    id: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete?: HTMLInputAutoCompleteAttribute;
}

function FormItem({
    className,
    label,
    type,
    id,
    name,
    value,
    onChange,
    autoComplete
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
                name={name}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
            />
        </div>
    );
}

export default FormItem;
