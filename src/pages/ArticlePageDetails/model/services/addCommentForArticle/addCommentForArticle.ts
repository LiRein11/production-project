import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/redux';
import { getArticleDetailsData } from 'entities/Article';

import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',

    async (text, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi;

        const article = getArticleDetailsData(getState());
        const user = getUserAuthData(getState());

        if (!article || !text || !user) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                text,
                articleId: article?.id,
                userId: user.id,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article?.id));

            return response.data; // 3 вызов диспатча
        } catch (e) {
            return rejectWithValue('error');
        }
    },
); // 1ый вызов диспатча (при вызове самого экшена)
