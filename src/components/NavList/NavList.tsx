import cn from 'classnames';

import NavItem from '../NavItem/NavItem.tsx';

import { nav } from '../../data/nav.data.ts';

import styles from './NavList.module.scss';

function NavList({ className }: { className: string; }) {
    const renderItems = nav.map(item =>
        <NavItem
            className={styles.NavList__NavItem}
            to={item.href}
            key={item.id}
        >
            {item.text}
        </NavItem>
    );

    return (
        <ul className={cn(
            styles.NavList,
            className
        )}>
            {renderItems}
        </ul>
    );
}

export default NavList;
