import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

import { profileActions, profileReducer } from './profileSlice';

import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { EValidateError } from '@/shared/consts/errors';

const data = {
    first: 'Сергей',
    lastname: 'Степанов',
    age: 23,
    currency: ECurrency.RUB,
    country: ECountry.RUSSIA,
    city: 'Kurgan',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });
    test('test cancel update', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: { first: 'saf', age: 23 },
            validateErrors: [],
            data,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelUpdate(),
            ),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { age: 1, first: '13' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ age: 23, first: '123' }),
            ),
        ).toEqual({
            form: { age: 23, first: '123' },
        });
    });

    test('test update profile with undefined', () => {
        const state: DeepPartial<ProfileSchema> = { form: undefined };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile(undefined),
            ),
        ).toEqual({
            form: {},
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [EValidateError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
