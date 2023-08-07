import { StateSchema } from '@/app/providers/redux';

export const getArticleDetailsIsLoading = (state: StateSchema) =>
    state?.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: StateSchema) => state?.articleDetails?.error;
export const getArticleDetailsData = (state: StateSchema) => state?.articleDetails?.data;
