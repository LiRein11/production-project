import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/redux/config/StateSchema';
import { getArticlesInited } from '../../selectors/articles';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>('articles/initArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesInited(getState());

    if (!inited) {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticles({ page: 1 }));
    }
});
