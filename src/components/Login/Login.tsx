import Title from '../Title/Title.tsx';
import LoginForm from '../LoginFormRHF/LoginForm.tsx';
import Text from '../Text/Text.tsx';
import TextLink from '../TextLink/TextLink.tsx';

import styles from './Login.module.scss';

function Login() {
    console.log('Login');

    return (
        <section className={styles.Login}>
            <Title
                className={styles.Login__Title}
                level="1"
                size="large"
            >
                Sign In
            </Title>
            <LoginForm
                className={styles.Login__LoginForm}
            />
            <Text
                className={styles.Login__Text}
            >
                Are you new here?
            </Text>
            <TextLink
                className={styles.Login__TextLink}
                to="/signup"
            >
                Create an account
            </TextLink>
        </section>
    );
}

export default Login;
