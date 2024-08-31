import { ComponentProps, PropsWithChildren } from 'react';
import { useMatch, NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './NavItem.module.scss';

type Props = Omit<ComponentProps<typeof NavLink>, 'to'> & {
    to: string;
}

function NavItem({
    className,
    to,
    children,
    ...props
}: PropsWithChildren<Props>) {
    const match = useMatch(to);

    return (
        <li className={cn(
            styles.NavItem,
            className,
            {
                [styles.NavItem_active]: match
            }
        )}>
            <NavLink
                className={styles.NavItem__link}
                to={to}
                {...props}
            >
                {children}
            </NavLink>
        </li>
    );
}

export default NavItem;
