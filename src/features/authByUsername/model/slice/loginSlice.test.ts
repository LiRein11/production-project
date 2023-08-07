import { LoginSchema } from '../types/loginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123456'))).toEqual({
            username: '123456',
        });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123456'))).toEqual({
            username: '123456',
        });
    });
    test('test set clearError', () => {
        const state: DeepPartial<LoginSchema> = { error: 'error' };
        expect(loginReducer(state as LoginSchema, loginActions.setClearError())).toEqual({
            error: null || '',
        });
    });
    test('test set clearInputs', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setClearInputs())).toEqual({
            username: '',
            password: '',
        });
    });
});
