import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageHasMore,
} from '../../selectors/articlesPageSelectors';
import { articlesHeaderFiltersActions } from '../../slices/articlesHeaderFiltersSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

import { ThunkConfig } from '@/app/providers/redux';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPageNum(getState());
        const hasMore = getArticlesPageHasMore(getState());
        console.log(true);
        if (hasMore && !isLoading) {
            dispatch(articlesHeaderFiltersActions.setPage(page + 1));
            dispatch(fetchArticles({}));
        }
    },
);
