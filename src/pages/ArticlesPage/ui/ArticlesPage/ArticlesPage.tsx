import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articles';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
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
    const [searchParams] = useSearchParams();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesView);
    const error = useSelector(getArticlesError);
    const isLoading = useSelector(getArticlesIsLoading);

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <div>Произошла ошибка</div>;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                {/* <ArticlesPageFilters /> */}
                <ArticleList view={view} articles={articles} isLoading={isLoading} className={cls.list} onLoadNextPart={onLoadNextPart} />
            </div>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlesPage);
