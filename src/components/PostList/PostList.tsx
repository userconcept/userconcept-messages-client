import cn from 'classnames';

import PostItem from '../PostItem/PostItem.tsx';

import type { Post } from '../../types/post.types.ts';

import styles from './PostList.module.scss';

type Props = {
    className: string;
    items: Post[];
}

function PostList({ className, items }: Props) {
    // console.log('PostList');

    const renderItems = items.map((item: Post) => (
        <PostItem
            className={styles.PostList__PostItem}
            item={item}
            key={item.id}
        />
    ));

    return (
        <ul className={cn(
            styles.PostList,
            className
        )}>
            {renderItems}
        </ul>
    );
}

export default PostList;
