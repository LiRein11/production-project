import { StateSchema } from 'app/providers/redux';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    const data = {
        first: 'Сергей',
        lastname: 'Степанов',
        age: 23,
        currency: ECurrency.RUB,
        country: ECountry.RUSSIA,
        city: 'Kurgan',
        username: 'admin',
    };
    test('return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {},
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual({});
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
