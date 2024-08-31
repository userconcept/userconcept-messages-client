import { PropsWithChildren } from 'react';
import cn from 'classnames';

function Text({
    className,
    children
}: PropsWithChildren<{ className: string; }>) {
    return (
        <p className={cn(className)}>{children}</p>
    );
}

export default Text;
