import {
    ArticleDetails,
    articleDetailsReducer,
    fetchArticleById,
    getArticleData,
    getArticleError,
    getArticleIsLoading,
} from 'entities/Article';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';

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
