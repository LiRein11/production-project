import { StateSchema } from 'app/providers/redux';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { EValidateError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should return incorrect age', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [EValidateError.INCORRECT_AGE] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.INCORRECT_AGE,
        ]);
    });

    test('should return incorrect lastname', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [EValidateError.INCORRECT_LASTNAME] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.INCORRECT_LASTNAME,
        ]);
    });

    test('should return incorrect firstname', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [EValidateError.INCORRECT_FIRSTNAME] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.INCORRECT_FIRSTNAME,
        ]);
    });

    test('should return incorrect username', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [EValidateError.INCORRECT_USERNAME] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.INCORRECT_USERNAME,
        ]);
    });

    test('should return incorrect city', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [EValidateError.INCORRECT_CITY] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.INCORRECT_CITY,
        ]);
    });

    test('should return incorrect server error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [EValidateError.SERVER_ERROR] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.SERVER_ERROR,
        ]);
    });

    test('should return incorrect no data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [EValidateError.NO_DATA] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.NO_DATA,
        ]);
    });

    test('should return incorrect city, age, username', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    EValidateError.INCORRECT_CITY,
                    EValidateError.INCORRECT_USERNAME,
                    EValidateError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            EValidateError.INCORRECT_CITY,
            EValidateError.INCORRECT_USERNAME,
            EValidateError.INCORRECT_AGE,
        ]);
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [] },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
