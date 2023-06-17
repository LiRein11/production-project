import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    // t('ArticleDetailsPage')

    if (!id) {
        return <div>{t('ArticleNotFound')}</div>;
    }

    return <ArticleDetails id={id} />;
};

export default memo(ArticleDetailsPage);
