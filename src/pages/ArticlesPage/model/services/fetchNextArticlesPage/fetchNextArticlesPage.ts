import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/redux/config/StateSchema';
import { getArticlesHasMore, getArticlesIsLoading, getArticlesPage } from '../../selectors/articles';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>('articles/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const isLoading = getArticlesIsLoading(getState());
    const page = getArticlesPage(getState());
    const hasMore = getArticlesHasMore(getState());

    if (hasMore && !isLoading) {
        dispatch(fetchArticles({ page: page + 1 }));
        dispatch(articlesPageActions.setPage(page + 1));
    }
});
