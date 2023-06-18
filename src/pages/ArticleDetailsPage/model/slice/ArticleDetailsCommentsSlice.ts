import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/redux';
import { Comment } from 'entities/Comment/model/types/comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
            commentsAdapter.setAll(state, action.payload);
            state.isLoading = false;
            state.error = undefined;
        });
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
