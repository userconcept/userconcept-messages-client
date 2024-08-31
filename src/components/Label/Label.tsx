import { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Label.module.scss';

type Props = {
    className: string;
    htmlFor: string;
}

function Label({
    className,
    children,
    htmlFor
}: PropsWithChildren<Props>) {
    return (
        <label
            className={cn(
                styles.Label,
                className
            )}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
}

export default Label;
