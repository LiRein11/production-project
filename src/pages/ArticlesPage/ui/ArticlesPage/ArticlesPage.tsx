import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
    getArticlesPageView,
    getArticlesPageError,
    getArticlesPageIsLoading,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    articlesHeaderFiltersReducer,
    getArticles,
} from '../../model/slices/articlesHeaderFiltersSlice';
import { ArticlesHeaderFilters } from '../ArticlesPageFilters/ArticlesHeaderFilters';

import { ArticleList } from '@/entities/Article';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
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
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <div>Произошла ошибка</div>;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                data-testid="ArticlesPage"
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesHeaderFilters />
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                    className={cls.list}
                />
                <ArticlePageGreeting />
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlesPage);
