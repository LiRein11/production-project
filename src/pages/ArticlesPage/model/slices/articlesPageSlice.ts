import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/redux';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState());

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: 'grid',
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === 'list' ? 4 : 9;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
            articlesAdapter.addMany(state, action.payload);
            state.isLoading = false;
            state.error = undefined;
            state.hasMore = action.payload.length > 0;
        });
        builder.addCase(fetchArticles.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
