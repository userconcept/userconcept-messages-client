import Title from '../Title/Title.tsx';
import SignUpForm from '../SignUpFormRHF/SignUpForm.tsx';
import Text from '../Text/Text.tsx';
import TextLink from '../TextLink/TextLink.tsx';

import styles from './SignUp.module.scss';

function SignUp() {
    console.log('SignUp');

    return (
        <section className={styles.SignUp}>
            <Title
                className={styles.SignUp__Title}
                level="1"
                size="large"
            >
                Sign Up
            </Title>
            <SignUpForm
                className={styles.SignUp__SignUpForm}
            />
            <Text
                className={styles.SignUp__Text}
            >
                Already have an account?
            </Text>
            <TextLink
                className={styles.SignUp__TextLink}
                to="/login"
            >
                Sign In
            </TextLink>
        </section>
    );
}

export default SignUp;
