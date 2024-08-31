import {
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import cn from 'classnames';

import styles from './ButtonNav.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

type CustomProps = { isActive: boolean; }

function ButtonNav({
    className,
    children,
    isActive,
    onClick
}: PropsWithChildren<Props> & CustomProps) {
    return (
        <button
            className={cn(
                styles.ButtonNav,
                className,
                {
                    [styles.ButtonNav_active]: isActive
                }
            )}
            onClick={onClick}
        >
            <span className={styles.ButtonNav__hamburger}>
                {children}
            </span>
        </button>
    );
}

export default ButtonNav;
