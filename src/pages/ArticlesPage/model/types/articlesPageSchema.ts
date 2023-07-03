import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView, EArticleSortField, EArticleType } from 'entities/Article';

import { SortOrder } from 'shared/types/order';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view?: ArticleView;
    order?: SortOrder;
    sort?: EArticleSortField;
    search?: string;
    type: EArticleType;

    _inited?: boolean;
}
