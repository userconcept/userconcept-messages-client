import { useAuth } from '../../hooks/useAuth.ts';

import Title from '../Title/Title.tsx';
import Text from '../Text/Text.tsx';
import TextLink from '../TextLink/TextLink.tsx';
import PostForm from '../PostFormRHF/PostForm.tsx';
import SignUpForm from '../SignUpFormRHF/SignUpForm.tsx';
import PostList from '../PostListRHF/PostList.tsx';

import styles from './Home.module.scss';

function Home() {
    console.log('Home');

    const { isAuth } = useAuth();

    return (
        <section className={styles.Home}>
            <Title
                level="1"
                hidden={true}
            >
                userconcept messages
            </Title>
            {isAuth ?
                <PostForm /> :
                <>
                    <SignUpForm
                        className={styles.Home__SignUpForm}
                    />
                    <Text
                        className={styles.Home__Text}
                    >
                        Already have an account?
                    </Text>
                    <TextLink
                        className={styles.Home__TextLink}
                        to="/login"
                    >
                        Sign In
                    </TextLink>
                </>
            }
            <PostList classNames={[
                styles.Home__PostList,
                styles.Home__PostMessage
            ]} />
        </section>
    );
}

export default Home;
