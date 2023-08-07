import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/redux';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchArticleRecommendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 5,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response?.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
