import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
    getArticlesPageView,
    getArticlesPageSort,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageType,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesHeaderFiltersActions } from '../../model/slices/articlesHeaderFiltersSlice';

import { ArticleView, EArticleSortField, EArticleType } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/order';

export const useArticleFilters = () => {
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

    return {
        onChangeOrder,
        onChangeSort,
        sort,
        order,
        view,
        onChangeView,
        search,
        onChangeSearch,
        type,
        onChangeType,
    };
};
