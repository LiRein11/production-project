import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData.test', () => {
    test('test validate data', () => {
        const profile = data;
        expect(validateProfileData(profile)).toEqual([]);
    });

    test('test validate err', () => {
        const profile = { ...data, first: '', age: 2, city: '' };
        expect(validateProfileData(profile)).toEqual([
            EValidateError.INCORRECT_FIRSTNAME,
            EValidateError.INCORRECT_AGE,
            EValidateError.INCORRECT_CITY,
        ]);
    });

    test('test validate no data', () => {
        expect(validateProfileData()).toEqual([EValidateError.NO_DATA]);
    });
});
