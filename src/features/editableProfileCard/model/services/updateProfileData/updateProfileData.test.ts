import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { EValidateError } from '../../types/editableProfileCardSchema';

const data = {
    first: 'Сергей',
    lastname: 'Степанов',
    age: 23,
    currency: ECurrency.RUB,
    country: ECountry.RUSSIA,
    city: 'Kurgan',
    username: 'admin',
};
describe('updateProfileData.test', () => {
    test('update data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('update data error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([EValidateError.SERVER_ERROR]);
    });

    test('update data validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...data, first: '', age: 3 } },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            EValidateError.INCORRECT_FIRSTNAME,
            EValidateError.INCORRECT_AGE,
        ]);
    });
});
