import { StateSchema } from '@/app/providers/redux';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articlePageDetails?.comments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articlePageDetails?.comments?.error;
