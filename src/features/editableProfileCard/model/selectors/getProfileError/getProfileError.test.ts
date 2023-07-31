import { DeepPartial } from '@reduxjs/toolkit';

import { getProfileError } from './getProfileError';

import { StateSchema } from '@/app/providers/redux';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'error' },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
