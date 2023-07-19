export { ArticlePageDetailsAsync as ArticlePageDetails } from './ui/ArticlePageDetails/ArticlePageDetails.async';
export { articlePageDetailsReducer } from './model/slice/index';
export { articleDetailsCommentsReducer, articleDetailsCommentsActions } from './model/slice/articleDetailsCommentsSlice';

export type { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema';
export type { ArticleDetailsRecommendationsSchema } from './model/types/articleDetailsRecommendationsSchema';
export type { ArticlePageDetailsSchema } from './model/types/index';
