import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/order';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';

import { articlesHeaderFiltersActions } from '../../model/slices/articlesHeaderFiltersSlice';
import { EArticleSortField, EArticleType } from '../../model/consts/consts';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { ArticleView } from '../../model/types/article';
import { getArticlesView, getArticlesSort, getArticlesOrder, getArticlesSearch, getArticlesType } from '../../model/selectors/articles';

import cls from './ArticlesHeaderFilters.module.scss';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from '../ArticleTypeTabs/ArticleTypeTabs';
import { ArticleViewSelector } from '../ArticleViewSelector/ArticleViewSelector';

interface ArticlesHeaderFiltersProps {
    className?: string;
}

export const ArticlesHeaderFilters = memo((props: ArticlesHeaderFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

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
