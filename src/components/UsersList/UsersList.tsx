import { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './UsersList.module.scss';

type Props = {
    className: string;
}

function UsersList({
    className,
    children
}: PropsWithChildren<Props>) {
    return (
        <ul className={cn(
            styles.UsersList,
            className
        )}>
            {children}
        </ul>
    );
}

export default UsersList;
