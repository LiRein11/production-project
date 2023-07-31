import { DeepPartial } from '@reduxjs/toolkit';

import { getUserInited } from './getUserInited';

import { StateSchema } from '@/app/providers/redux';

describe('getInited.test', () => {
    test('should return inited=true', () => {
        const state: DeepPartial<StateSchema> = {
            user: { _inited: true },
        };
        expect(getUserInited(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserInited(state as StateSchema)).toEqual(undefined);
    });
});
