import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../../types/article';

import { ThunkConfig } from '@/app/providers/redux';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>('article/fetchArticleById', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        if (!articleId) {
            throw new Error('');
        }
        const response = await extra.api.get<Article>(`/articles/${articleId}`, { params: { _expand: 'user' } });

        if (!response.data) {
            throw new Error();
        }

        return response?.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
