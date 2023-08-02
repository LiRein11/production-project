import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/redux';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorValue = () => {
        return useSelector(selector);
    };

    return [useSelectorValue, selector];
}
