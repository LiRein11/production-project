import { useDispatch, useSelector } from 'react-redux';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
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
