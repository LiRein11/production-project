import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import cls from './Counter.module.scss';

export interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <h1 data-testid="value-title">{value}</h1>
            <Button data-testid="increment" onClick={increment}>
                inc
            </Button>
            <Button data-testid="decrement" onClick={decrement}>
                dec
            </Button>
        </div>
    );
};
