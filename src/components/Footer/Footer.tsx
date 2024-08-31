import NavFooter from '../NavFooter/NavFooter.tsx';
import Copyright from '../Copyright/Copyright.tsx';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <NavFooter />
            <Copyright className={styles.Footer__Copyright} />
        </footer>
    );
}

export default Footer;
