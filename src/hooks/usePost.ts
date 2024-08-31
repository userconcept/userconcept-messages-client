import { useForm, SubmitHandler } from 'react-hook-form';

import { postApi } from '../redux/services/post.ts';

type FormProps = {
    title: string;
    text: string;
}

function usePost() {
    const {
        register,
        handleSubmit,
        formState
    } = useForm<FormProps>({
        mode: 'onChange',
        defaultValues: {
            title: '',
            text: ''
        }
    });

    const [createPost, { isLoading }] = postApi.useCreatePostMutation();

    const onSubmit: SubmitHandler<FormProps> = (data: FormProps) => {
        createPost(data);
    }

    const errorTitle = formState.errors.title?.message;
    const errorText = formState.errors.text?.message;

    return {
        register,
        handleSubmit,
        isLoading,
        onSubmit,
        errorTitle,
        errorText
    };
}

export { usePost };
