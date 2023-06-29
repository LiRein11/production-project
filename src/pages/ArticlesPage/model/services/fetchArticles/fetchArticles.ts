import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/redux/config/StateSchema';
import { Article } from 'entities/Article';
import { getArticlesLimit } from '../../selectors/articles';

interface FetchArticlesProps {
    page?: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>('articles/fetchArticles', async (props, thunkApi) => {
    const { page = 1 } = props;
    const { extra, rejectWithValue, getState } = thunkApi;

    const limit = getArticlesLimit(getState());

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response?.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
