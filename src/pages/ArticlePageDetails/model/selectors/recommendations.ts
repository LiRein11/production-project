import { StateSchema } from '@/app/providers/redux';

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
    state.articlePageDetails?.recommendations?.isLoading || false;
export const getArticleRecommendationsError = (state: StateSchema) =>
    state.articlePageDetails?.recommendations?.error;
