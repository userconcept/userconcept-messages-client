import React from 'react';

import FormItem from '../FormItem/FormItem.tsx';
import Button from '../Button/Button.tsx';

import type { Post } from '../../types/post.types.ts';

import styles from './PostForm.module.scss';

function PostForm({
    handleInputChange,
    handleSubmit,
    formData
}: {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    formData: Post
}) {
    // console.log('PostForm');

    const { title, text } = formData;

    return (
        <form onSubmit={handleSubmit}>
            <FormItem
                className={styles.PostForm__FormItem}
                label="Title"
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleInputChange}
                autoComplete="off"
            />
            <FormItem
                className={styles.PostForm__FormItem}
                label="Text"
                type="text"
                id="text"
                name="text"
                value={text}
                onChange={handleInputChange}
                autoComplete="off"
            />
            <Button
                className={styles.PostForm__Button}
                color="black"
            >
                Add Post
            </Button>
        </form>
    );
}

export default PostForm;
