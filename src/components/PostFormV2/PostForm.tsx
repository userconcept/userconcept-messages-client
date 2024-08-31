import React from 'react';

import FormItem from '../FormItem/FormItem.tsx';
import Button from '../Button/Button.tsx';

import styles from './PostForm.module.scss';

function PostForm({ handleSubmit }: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
    // console.log('PostForm');

    return (
        <form onSubmit={handleSubmit}>
            <FormItem
                className={styles.PostForm__FormItem}
                label="Title"
                type="text"
                id="title"
                name="title"
                autoComplete="off"
            />
            <FormItem
                className={styles.PostForm__FormItem}
                label="Text"
                type="text"
                id="text"
                name="text"
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
