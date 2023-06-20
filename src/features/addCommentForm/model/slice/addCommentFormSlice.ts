import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

// const addCommentFormAdapter = createEntityAdapter<Comment>({
//     selectId: (comment) => comment.id,
// });

// export const getArticleComments = addCommentFormAdapter.getSelectors<StateSchema>(
//     (state) => state.articleDetailsComments || addCommentFormAdapter.getInitialState(),
// );

const initialState: AddCommentFormSchema = {
    text: '',
};

const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(sendComment.pending, (state) => {
    //         state.error = undefined;
    //     });
    //     builder.addCase(sendComment.fulfilled, (state) => {
    //         state.error = undefined;
    //     });
    //     builder.addCase(sendComment.rejected, (state, action: PayloadAction<string | undefined>) => {
    //         state.error = action.payload;
    //     });
    // },
});

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { actions: addCommentFormActions } = addCommentFormSlice;
