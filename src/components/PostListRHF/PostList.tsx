import cn from 'classnames';

import { postApi } from '../../redux/services/post.ts';

import PostItem from '../PostItem/PostItem.tsx';
import PostMessage from '../PostMessage/PostMessage.tsx';

import type { Post } from '../../types/post.types.ts';

import styles from './PostList.module.scss';

function PostList({ classNames }: { classNames: [string, string] }) {
    // console.log('PostList');

    const { data, isLoading, error } = postApi.useGetPostsQuery();

    const renderItems = data?.map((item: Post) => (
        <PostItem
            className={styles.PostList__PostItem}
            item={item}
            key={item.id}
        />
    ));

    if (isLoading || error || (data?.length === 0)) {
        return (
            <PostMessage
                className={classNames[1]}
            >
                {isLoading && 'Loading...'}
                {error && 'Error...'}
                {data?.length === 0 && 'No messages...'}
            </PostMessage>
        );
    }

    return (
        <ul className={cn(
            styles.PostList,
            classNames[0]
        )}>
            {renderItems}
        </ul>
    );
}

export default PostList;
