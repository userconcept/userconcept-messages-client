import cn from 'classnames';

import NavList from '../NavList/NavList.tsx';

import styles from './NavHeader.module.scss';

type Props = {
    className: string;
    isActive: boolean;
}

function NavHeader({
    className,
    isActive
}: Props) {
    return (
        <nav className={cn(
            styles.NavHeader,
            className,
            {
                [styles.NavHeader_active]: isActive
            }
        )}>
            <NavList className={styles.NavHeader__NavList} />
        </nav>
    );
}

export default NavHeader;
