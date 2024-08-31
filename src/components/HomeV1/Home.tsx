// @ts-nocheck

import React, { useState, useRef } from 'react';

import { useAuth } from '../../hooks/useAuth.ts';

import Title from '../Title/Title.tsx';
import Text from '../Text/Text.tsx';
import TextLink from '../TextLink/TextLink.tsx';
import PostForm from '../PostFormV1/PostForm.tsx';
import SignUpForm from '../SignUpFormRHF/SignUpForm.tsx';
import PostList from '../PostList/PostList.tsx';

import type { Post } from '../../types/post.types.ts';

import { posts } from '../../data/posts.data.ts';

import styles from './Home.module.scss';

function Home() {
    console.log('Home');

    const { isAuth } = useAuth();

    const idRef = useRef(posts[posts.length - 1].id);

    const [data, setData] = useState<Post[]>(posts);

    const [formData, setFormData] = useState<Post>({
        id: idRef.current + 1,
        title: '',
        text: '',
        images: []
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        idRef.current += 1;
        setData([
            ...data,
            { ...formData, id: idRef.current }
        ]);
    }

    return (
        <section className={styles.Home}>
            <Title
                level="1"
                hidden={true}
            >
                userconcept messages
            </Title>
            {isAuth ?
                <PostForm
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                /> :
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
            <PostList
                className={styles.Home__PostList}
                items={data}
            />
        </section>
    );
}

export default Home;
