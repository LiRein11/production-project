import { DeepPartial } from '@reduxjs/toolkit';

import { getUserAuthData } from './getUserAuthData';

import { StateSchema } from '@/app/providers/redux';

const userData = {
    id: '1',
    username: 'saf',
    avatar: 'fwafaw.wfa',
};

describe('getUserAuthData.test', () => {
    test('should return authData', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userData },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(userData);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
