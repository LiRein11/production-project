import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/articles';

import { getArticleDetailsData } from '@/entities/Article';
import { RoutePath } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button theme={EButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Back to list')}
            </Button>
            {canEdit && (
                <Button theme={EButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Edit')}
                </Button>
            )}
        </HStack>
    );
});
