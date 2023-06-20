import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/redux';
import {
    getArticleCommentsIsLoading,
    getArticleCommentsError,
} from './comments';

describe('comments.test', () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: { isLoading: true, ids: [], entities: {} },
        };

        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
            false,
        );
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: { error: 'error', ids: [], entities: {} },
        };

        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should work error with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
