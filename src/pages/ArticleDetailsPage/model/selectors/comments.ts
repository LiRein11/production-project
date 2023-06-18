import { StateSchema } from 'app/providers/redux';

const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
