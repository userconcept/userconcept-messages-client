import cn from 'classnames';

import IconAvatar from '../../assets/images/icon_avatar.svg?react';

import styles from './Avatar.module.scss';

function Avatar({ className }: { className: string; }) {
    return (
        <div className={cn(
            styles.Avatar,
            className
        )}>
            <IconAvatar />
        </div>
    );
}

export default Avatar;
