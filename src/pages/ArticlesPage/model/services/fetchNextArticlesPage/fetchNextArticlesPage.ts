import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/redux';
import { articlesHeaderFiltersActions, fetchArticles, getArticlesHasMore, getArticlesIsLoading, getArticlesPage } from '@/entities/Article';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>('articles/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const isLoading = getArticlesIsLoading(getState());
    const page = getArticlesPage(getState());
    const hasMore = getArticlesHasMore(getState());
    console.log(true);
    if (hasMore && !isLoading) {
        dispatch(articlesHeaderFiltersActions.setPage(page + 1));
        dispatch(fetchArticles({}));
    }
});
