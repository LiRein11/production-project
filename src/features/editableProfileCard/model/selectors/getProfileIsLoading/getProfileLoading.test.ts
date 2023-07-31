import { getProfileIsLoading } from './getProfileIsLoading';

import { StateSchema } from '@/app/providers/redux';

describe('getProfileIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
});
