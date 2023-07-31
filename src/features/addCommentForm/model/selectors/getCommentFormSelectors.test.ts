import {
    getAddCommentFormText,
    getAddCommentFormError,
} from './getCommentFormSelectors';

import { StateSchema } from '@/app/providers/redux';

describe('getCommentFormSelectors.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { text: '123' },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { error: 'error' },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
