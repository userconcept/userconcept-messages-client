import { userApi } from '../../redux/services/user.ts';

import Title from '../Title/Title.tsx';
import UsersList from '../UsersList/UsersList.tsx';
import UsersItem from '../UsersItem/UsersItem.tsx';

import type { User } from '../../types/user.types.ts';

import styles from './Users.module.scss';
import stylesUsersList from './../UsersList/UsersList.module.scss';

function Users() {
    console.log('Users');

    const { data, isLoading, error } = userApi.useGetUsersProfileQuery();

    const renderItems = data?.map((item: User) => (
        <UsersItem
            className={stylesUsersList.UsersList__UsersItem}
            item={item}
            key={item.id}
        />
    ));

    return (
        <section className={styles.Users}>
            <Title
                className={styles.Users__Title}
                level="1"
                size="large"
            >
                Users
            </Title>
            <UsersList className={styles.Users__UsersList}>
                {isLoading && 'Loading...'}
                {error && 'Error...'}
                {renderItems}
            </UsersList>
        </section>
    );
}

export default Users;
