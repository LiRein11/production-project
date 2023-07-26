import { StateSchema } from '@/app/providers/redux';
import { getCounter } from './getCounter';

describe('getCounter.test', () => {
    test('getCounter should return obj', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }; // DeepPartial позволяет проигнорировать поля, и объявить только те, которые необходимы
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
