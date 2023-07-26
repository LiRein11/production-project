import { EntityState } from '@reduxjs/toolkit';

import { SortOrder } from '@/shared/types/order';
import { EArticleSortField, EArticleType } from '../consts/consts';
import { Article, ArticleView } from './article';

export interface ArticlesHeaderFiltersSchema extends EntityState<Article> {
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
