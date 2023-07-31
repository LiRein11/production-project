import { getLoginUsername } from './getLoginUsername';

import { StateSchema } from '@/app/providers/redux';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'abc' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('abc');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
