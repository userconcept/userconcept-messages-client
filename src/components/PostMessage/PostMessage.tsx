import { PropsWithChildren } from 'react';

function PostMessage({
    className,
    children
}: PropsWithChildren<{ className: string; }>) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default PostMessage;
