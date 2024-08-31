import React, { HTMLInputAutoCompleteAttribute } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

type Props = {
    className: string;
    type: "text" | "email" | "password";
    id: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete?: HTMLInputAutoCompleteAttribute;
}

function Input({
    className,
    type,
    id,
    name,
    value,
    onChange,
    autoComplete
}: Props) {
    // console.log('Input');

    return (
        <input
            className={cn(
                styles.Input,
                className
            )}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
        />
    );
}

export default Input;
