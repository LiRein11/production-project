import { createAsyncThunk } from '@reduxjs/toolkit';

import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ThunkConfig } from 'app/providers/redux';
import { getArticlesLimit, getArticlesOrder, getArticlesPage, getArticlesSearch, getArticlesSort, getArticlesType } from '../../selectors/articles';
import { EArticleType } from '../../consts/consts';
import { Article } from '../../types/article';

interface FetchArticlesProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>('articles/fetchArticles', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const limit = getArticlesLimit(getState());
    const page = getArticlesPage(getState());
    const sort = getArticlesSort(getState());
    const order = getArticlesOrder(getState());
    const search = getArticlesSearch(getState());
    const type = getArticlesType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _order: order,
                _sort: sort,
                q: search,
                type: type === EArticleType.ALL ? undefined : type,
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
