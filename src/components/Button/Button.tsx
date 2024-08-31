import {
    ComponentProps,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Button.module.scss';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

type Props = ComponentProps<typeof Link>
    | AnchorProps
    | ButtonHTMLAttributes<HTMLButtonElement>

type CustomProps = {
    color: "black" | "red";
}

function Button({
    className,
    children,
    color,
    ...props
}: PropsWithChildren<Props> & CustomProps) {
    const cnGroup = cn(
        styles.Button,
        styles[`Button_${color}`],
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

    if ('href' in props) {
        return (
            <a
                className={cn(cnGroup)}
                {...props}
            >
                {children}
            </a>
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

export default Button;
