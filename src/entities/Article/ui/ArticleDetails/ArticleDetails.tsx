import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticleDetails';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');

    const articleData = useSelector(getArticleData);
    const error = useSelector(getArticleError);
    const isLoading = true;
    // const isLoading = useSelector(getArticleIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = <Text title={t('ErrorArticle')} align={ETextAlign.CENTER} theme={ETextTheme.ERROR} />;
    } else {
        content = <div>Всё норм</div>;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
        </DynamicReducerLoader>
    );
});
