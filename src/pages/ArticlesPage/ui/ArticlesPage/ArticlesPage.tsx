import { FC, memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesHeaderFiltersReducer } from '../../model/slices/articlesHeaderFiltersSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesHeaderFilters } from '../ArticlesPageFilters/ArticlesHeaderFilters';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesHeaderFiltersReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    content={
                        <Page
                            onScrollEnd={onLoadNextPart}
                            data-testid="ArticlesPage"
                            className={classNames(cls.ArticlesPageRedesigned, {}, [className])}
                        >
                            <ArticleInfiniteList />

                            <ArticlePageGreeting />
                        </Page>
                    }
                    right={<FiltersContainer />}
                />
            }
            off={
                <Page
                    onScrollEnd={onLoadNextPart}
                    data-testid="ArticlesPage"
                    className={classNames(cls.ArticlesPage, {}, [className])}
                >
                    <ArticlesHeaderFilters />
                    <ArticleInfiniteList />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicReducerLoader>
    );
};

export default memo(ArticlesPage);
