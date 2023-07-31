import { DeepPartial } from '@reduxjs/toolkit';

import { getProfileForm } from './getProfileForm';

import { StateSchema } from '@/app/providers/redux';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

describe('getProfileForm.test', () => {
    const formData = {
        first: 'Сергей',
        lastname: 'Степанов',
        age: 23,
        currency: ECurrency.RUB,
        country: ECountry.RUSSIA,
        city: 'Kurgan',
        username: 'admin',
    };
    test('return formData', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(formData);
    });

    test('should work with empty formData', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {},
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual({});
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
