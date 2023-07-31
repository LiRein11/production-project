import { getLoginState } from './getLoginState';

import { StateSchema } from '@/app/providers/redux';

describe('getLoginState.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: '123' },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '123',
            password: '123',
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
