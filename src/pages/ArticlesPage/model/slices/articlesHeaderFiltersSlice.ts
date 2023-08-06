import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { ArticlesHeaderFiltersSchema } from '../types/articlesHeaderFiltersSchema';

import { StateSchema } from '@/app/providers/redux';
import { Article, EArticleSortField, EArticleType, ArticleView } from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';
import { SortOrder } from '@/shared/types/order';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState());

const articlesHeaderFiltersSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesHeaderFiltersSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: 'grid',
        page: 1,
        hasMore: true,
        limit: 9,
        sort: EArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: EArticleType.ALL,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<EArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<EArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            // state.limit = view === 'list' ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;

            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        });
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = undefined;
            state.hasMore = action.payload.length >= state?.limit;

            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            } else {
                articlesAdapter.addMany(state, action.payload);
            }
        });
        builder.addCase(fetchArticles.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesHeaderFiltersReducer } = articlesHeaderFiltersSlice;
export const { actions: articlesHeaderFiltersActions } = articlesHeaderFiltersSlice;
