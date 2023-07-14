import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { isLoading, error, data: articles } = useArticleRecommendationsList(3);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text title={t('Recommendations')} />
            <ArticleList articles={articles} target="_blank" />
        </VStack>
    );
});
