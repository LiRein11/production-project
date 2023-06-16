import { StateSchema } from 'app/providers/redux';

export const getArticleIsLoading = (state: StateSchema) => state?.articleDetails?.isLoading;
export const getArticleError = (state: StateSchema) => state?.articleDetails?.error;
export const getArticleData = (state: StateSchema) => state?.articleDetails?.data;
