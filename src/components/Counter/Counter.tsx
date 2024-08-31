import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import {
    decrement,
    increment
} from '../../redux/features/counter/counterSlice.ts';

import type { RootState } from '../../redux/store.ts';

import styles from './Counter.module.scss';

function Counter() {
    const count = useAppSelector(
        (state: RootState) => state.counter.value
    );

    const dispatch = useAppDispatch();

    return (
        <div className={styles.Counter}>
            <button
                className={cn(
                    styles.Counter__button,
                    styles.Counter__button_left
                )}
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
            <div
                className={styles.Counter__value}
                aria-label="Counter value"
            >
                {count}
            </div>
            <button
                className={cn(
                    styles.Counter__button,
                    styles.Counter__button_right
                )}
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                +
            </button>
        </div>
    );
}

export default Counter;
