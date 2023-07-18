import { DeepPartial } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';
import { userReducer, userActions } from './userSlice';

const userData = {
    id: '1',
    username: 'saf',
    avatar: 'fwafaw.wfa',
};

describe('articleDetailsSlice.test', () => {
    test('test setAuthData', () => {
        const state: DeepPartial<UserSchema> = {};
        expect(
            userReducer(state as UserSchema, userActions.setAuthData(userData)),
        ).toEqual({
            authData: userData,
        });
    });

    test('test initAuthData', () => {
        const state: DeepPartial<UserSchema> = { _inited: false };

        expect(
            userReducer(state as UserSchema, userActions.initAuthData()),
        ).toEqual({
            _inited: true,
        });
    });

    test('test logout', () => {
        const state: DeepPartial<UserSchema> = { authData: userData };
        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
