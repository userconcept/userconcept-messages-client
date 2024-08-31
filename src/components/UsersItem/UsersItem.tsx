import cn from 'classnames';

import Title from '../Title/Title.tsx';
import Text from '../Text/Text.tsx';

import type { User } from '../../types/user.types.ts';

import styles from './UsersItem.module.scss';

type Props = {
    className: string;
    item: User;
}

function UsersItem({ className, item }: Props) {
    // console.log(item);

    return (
        <li
            className={cn(
                styles.UsersItem,
                className
            )}
            key={item.id}
        >
            <Text className={styles.UsersItem__Text}>
                {item.id}
            </Text>
            <Text className={styles.UsersItem__Text}>
                {item.createdAt}
            </Text>
            <Text className={styles.UsersItem__Text}>
                {item.updatedAt}
            </Text>
            <Text className={styles.UsersItem__Text}>
                {item.email}
            </Text>
            <Title
                className={styles.UsersItem__Title}
                level="2"
                size="middle"
            >
                {item.username}
            </Title>
        </li>
    );
}

export default UsersItem;
