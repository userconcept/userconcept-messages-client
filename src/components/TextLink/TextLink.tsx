import {
    ComponentProps,
    AnchorHTMLAttributes,
    PropsWithChildren
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './TextLink.module.scss';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

type Props = ComponentProps<typeof Link>
    | AnchorProps

function TextLink({
    className,
    children,
    ...props
}: PropsWithChildren<Props>) {
    const cnGroup = cn(styles.TextLink, className);

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
        <a
            className={cn(cnGroup)}
            {...props}
        >
            {children}
        </a>
    );
}

export default TextLink;
