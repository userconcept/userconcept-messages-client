import cn from 'classnames';

import styles from './Copyright.module.scss';

function Copyright({ className }: { className: string; }) {
    return (
        <div className={cn(
            styles.Copyright,
            className
        )}>
            <span className={styles.Copyright__symbol}>©</span>
            <a
                className={styles.Copyright__link}
                href="https://userconcept.ru"
                rel="noopener noreferrer me"
                target="_blank"
            >
                userconcept
            </a>
            <span className={styles.Copyright__year}>2024</span>
        </div>
    );
}

export default Copyright;
