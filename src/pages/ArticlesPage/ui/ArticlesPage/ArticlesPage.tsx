import { Article, ArticleView, ArticleViewSelector } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articles';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesView);
    const error = useSelector(getArticlesError);
    const isLoading = useSelector(getArticlesIsLoading);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticles({ page: 1 }));
    });

    if (error) {
        return <div>Произошла ошибка</div>;
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page className={classNames(cls.ArticlesPage, {}, [className])} onScrollEnd={onLoadNextPart}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlesPage);
