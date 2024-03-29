import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';

import { StateSchema } from '@/app/providers/redux';
import { Article } from '@/entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articlePageDetails?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecommendations.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(
            fetchArticleRecommendations.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                recommendationsAdapter.setAll(state, action.payload);
                state.isLoading = false;
                state.error = undefined;
            },
        );
        builder.addCase(
            fetchArticleRecommendations.rejected,
            (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        );
    },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice;
