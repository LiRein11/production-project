import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesHeaderFiltersActions } from '../../slices/articlesHeaderFiltersSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

import { ThunkConfig } from '@/app/providers/redux';
import { EArticleSortField, EArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/order';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>('articles/initArticlesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as EArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as EArticleType;

        if (orderFromUrl) {
            dispatch(articlesHeaderFiltersActions.setOrder(orderFromUrl));
        }

        if (sortFromUrl) {
            dispatch(articlesHeaderFiltersActions.setSort(sortFromUrl));
        }

        if (searchFromUrl) {
            dispatch(articlesHeaderFiltersActions.setSearch(searchFromUrl));
        }

        if (typeFromUrl) {
            dispatch(articlesHeaderFiltersActions.setType(typeFromUrl));
        }

        dispatch(articlesHeaderFiltersActions.initState());
        dispatch(fetchArticles({}));
    }
});
