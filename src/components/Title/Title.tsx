import { createElement, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Title.module.scss';

type Props = {
    className?: string;
    level: string;
    size?: "small" | "middle" | "large";
    hidden?: boolean;
}

function Title({
    className,
    level,
    size,
    children,
    hidden
}: PropsWithChildren<Props>) {
    const cnBlock = hidden ? styles.Title_hidden : styles.Title;
    const cnModifier = styles[`Title_${size}`];
    const cnMix = className;

    return createElement(
        `h${level}`,
        { className: cn(cnBlock, cnModifier, cnMix) },
        children
    );
}

export default Title;
