import { fetchProfileData } from './fetchProfileData';

import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
    id: '1',
    first: 'Сергей',
    lastname: 'Степанов',
    age: 23,
    currency: ECurrency.RUB,
    country: ECountry.RUSSIA,
    city: 'Kurgan',
    username: 'admin',
};
describe('fetchProfileData.test', () => {
    test('fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('fetch data error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
