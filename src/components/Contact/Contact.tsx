import Title from '../Title/Title.tsx';

import styles from './Contact.module.scss';

function Contact() {
    console.log('Contact');

    return (
        <section className={styles.Contact}>
            <Title
                className={styles.Contact__Title}
                level="1"
                size="large"
            >
                Contact
            </Title>
        </section>
    );
}

export default Contact;
