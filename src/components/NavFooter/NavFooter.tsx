import NavList from '../NavList/NavList.tsx';

import styles from './NavFooter.module.scss';

function NavFooter() {
    return (
        <nav>
            <NavList className={styles.NavFooter__NavList} />
        </nav>
    );
}

export default NavFooter;
