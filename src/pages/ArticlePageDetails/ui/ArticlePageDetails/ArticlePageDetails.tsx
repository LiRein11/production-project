import { ArticleDetails } from 'entities/Article';

import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/ui/Page/Page';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articlePageDetailsReducer } from '../../model/slice';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticlePageDetails.module.scss';

interface ArticlePageDetailsProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePageDetails: articlePageDetailsReducer,
};

const ArticlePageDetails: FC<ArticlePageDetailsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Page>{t('ArticleNotFound')}</Page>;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticlePageDetails, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlePageDetails);
