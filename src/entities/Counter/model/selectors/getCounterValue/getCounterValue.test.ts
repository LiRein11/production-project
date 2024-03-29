import { getCounterValue } from './getCounterValue';

import { StateSchema } from '@/app/providers/redux';

describe('getCounter.test', () => {
    test('getCounterValue should return value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }; // DeepPartial позволяет проигнорировать поля, и объявить только те, которые необходимы
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
