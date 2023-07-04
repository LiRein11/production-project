import { StateSchema } from 'app/providers/redux';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading || false;
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
