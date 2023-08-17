import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/consts/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

export const OnEditBtn = memo(() => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [navigate, article]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="outline" onClick={onEditArticle}>
                    {t('Edit')}
                </Button>
            }
            off={
                <ButtonDeprecated theme={EButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Edit')}
                </ButtonDeprecated>
            }
        />
    );
});
