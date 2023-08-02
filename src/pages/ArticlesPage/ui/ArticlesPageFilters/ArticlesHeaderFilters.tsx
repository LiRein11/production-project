import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticlesPageView, getArticlesPageSort, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageType } from '../../model/selectors/articlesPageSelectors';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesHeaderFiltersActions } from '../../model/slices/articlesHeaderFiltersSlice';

import { ArticleView, EArticleSortField, EArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/order';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import cls from './ArticlesHeaderFilters.module.scss';

interface ArticlesHeaderFiltersProps {
    className?: string;
}

export const ArticlesHeaderFilters = memo((props: ArticlesHeaderFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesHeaderFiltersActions.setView(view));
        },

        [dispatch],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesHeaderFiltersActions.setOrder(order));
            dispatch(articlesHeaderFiltersActions.setPage(1));
            fetchData();
        },

        [dispatch, fetchData],
    );

    const onChangeSort = useCallback(
        (sort: EArticleSortField) => {
            dispatch(articlesHeaderFiltersActions.setSort(sort));
            dispatch(articlesHeaderFiltersActions.setPage(1));
            fetchData();
        },

        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesHeaderFiltersActions.setSearch(search));
            dispatch(articlesHeaderFiltersActions.setPage(1));
            debouncedFetchData();
        },

        [debouncedFetchData, dispatch],
    );

    const onChangeType = useCallback(
        (value: EArticleType) => {
            dispatch(articlesHeaderFiltersActions.setType(value));
            dispatch(articlesHeaderFiltersActions.setPage(1));
            fetchData();
        },

        [fetchData, dispatch],
    );

    return (
        <div className={classNames(cls.ArticlesHeaderFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} sort={sort} order={order} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder={t('Search')} />
            </Card>
            <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
        </div>
    );
});
