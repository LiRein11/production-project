import { AddCommentFormSchema } from '../types/addCommentForm';

import { addCommentFormReducer, addCommentFormActions } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '123' };
        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('456'),
            ),
        ).toEqual({
            text: '456',
        });
    });
});
