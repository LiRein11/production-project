export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export type { ArticleSchema, Article } from './model/types/article';
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
export {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors/getArticleDetails';
export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';