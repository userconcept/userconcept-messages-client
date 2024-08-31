import { usePost } from '../../hooks/usePost.ts';

import FormItem from '../FormItemRHF/FormItem.tsx';
import Button from '../Button/Button.tsx';

import styles from './PostForm.module.scss';

function PostForm() {
    // console.log('PostForm');

    const {
        register,
        handleSubmit,
        onSubmit,
        errorTitle,
        errorText
    } = usePost();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem
                className={styles.PostForm__FormItem}
                label="Title"
                type="text"
                id="title"
                register={register('title', {
                    required: 'This field is required',
                    minLength: {
                        value: 2,
                        message: 'Minimum 2 Characters required'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Maximum 30 Characters required'
                    }
                })}
                autoComplete="off"
                error={errorTitle}
            />
            <FormItem
                className={styles.PostForm__FormItem}
                label="Text"
                type="text"
                id="text"
                register={register('text', {
                    required: 'This field is required',
                    minLength: {
                        value: 2,
                        message: 'Minimum 2 Characters required'
                    },
                    maxLength: {
                        value: 30,
                        message: 'Maximum 30 Characters required'
                    }
                })}
                autoComplete="off"
                error={errorText}
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
