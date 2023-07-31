import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/redux';
import { SortOrder } from '@/shared/types/order';
import { EArticleSortField, EArticleType, articlesHeaderFiltersActions, fetchArticles, getArticlesInited } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>('articles/initArticlesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesInited(getState());

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
