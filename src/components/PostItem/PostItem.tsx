import cn from 'classnames';

import Title from '../Title/Title.tsx';
import Text from '../Text/Text.tsx';

import type { Post } from '../../types/post.types.ts';

import styles from './PostItem.module.scss';

type Props = {
    className: string;
    item: Post;
}

function PostItem({ className, item }: Props) {
    // console.log('PostItem');

    return (
        <li className={cn(
            styles.PostItem,
            className
        )}>
            <div>{item.id}</div>
            <Title
                className={styles.PostItem__Title}
                level="2"
                size="middle"
            >
                {item.title}
            </Title>
            <Text className={styles.PostItem__Text}>
                {item.text}
            </Text>
            <Text className={styles.PostItem__Text}>
                {item.author.username}
            </Text>
            {item.images.length ? <div>{item.images}</div> : null}
        </li>
    );
}

export default PostItem;
