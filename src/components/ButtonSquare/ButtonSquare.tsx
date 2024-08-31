import {
    ComponentProps,
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './ButtonSquare.module.scss';

type Props = ComponentProps<typeof Link>
    | ButtonHTMLAttributes<HTMLButtonElement>

function ButtonSquare({
    className,
    children,
    ...props
}: PropsWithChildren<Props>) {
    const cnGroup = cn(
        styles.ButtonSquare,
        className
    );

    if ('to' in props) {
        return (
            <Link
                className={cn(cnGroup)}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={cn(cnGroup)}
            {...props}
        >
            {children}
        </button>
    );
}

export default ButtonSquare;
