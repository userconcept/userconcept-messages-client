import Title from '../Title/Title.tsx';
import ProfileForm from '../ProfileForm/ProfileForm.tsx';

import styles from './Profile.module.scss';

function Profile() {
    console.log('Profile');

    return (
        <section className={styles.Profile}>
            <Title
                className={styles.Profile__Title}
                level="1"
                size="large"
            >
                Profile
            </Title>
            <ProfileForm
                className={styles.Profile__ProfileForm}
            />
        </section>
    );
}

export default Profile;
