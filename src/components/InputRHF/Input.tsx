import { forwardRef, ComponentPropsWithRef } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

type Props = ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, Props>((
    {
        className,
        ...props
    },
    ref
) => {
    // console.log('Input');

    return (
        <input
            className={cn(
                styles.Input,
                className
            )}
            {...props}
            ref={ref}
        />
    );
});

export default Input;
