import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { articlePageDetailsReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleRating } from '@/features/articleRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import cls from './ArticlePageDetails.module.scss';

interface ArticlePageDetailsProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePageDetails: articlePageDetailsReducer,
};

const ArticlePageDetails: FC<ArticlePageDetailsProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticlePageDetails, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlePageDetails);
