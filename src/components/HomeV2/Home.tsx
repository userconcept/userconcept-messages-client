// @ts-nocheck

import React, { useState, useRef } from 'react';

import Title from '../Title/Title.tsx';
import PostForm from '../PostFormV2/PostForm.tsx';
import PostList from '../PostList/PostList.tsx';

import type { Post } from '../../types/post.types.ts';

import { posts } from '../../data/posts.data.ts';

import styles from './Home.module.scss';

function Home() {
    console.log('Home');

    const idRef = useRef(posts[posts.length - 1].id);

    const [data, setData] = useState<Post[]>(posts);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // for (const pair of formData.entries()) {
        //     console.log(pair[0], pair[1]);
        // }

        const title = formData.get('title')!.toString();
        const text = formData.get('text')!.toString();

        idRef.current += 1;

        setData([...data, {
            id: idRef.current,
            title,
            text,
            images: []
        }]);
    }

    return (
        <section className={styles.Home}>
            <Title
                level="1"
                hidden={true}
            >
                userconcept messages
            </Title>
            <PostForm
                handleSubmit={handleSubmit}
            />
            <PostList
                className={styles.Home__PostList}
                items={data}
            />
        </section>
    );
}

export default Home;
