import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


import { OnEditBtn } from '@/features/onEditBtn';
import { getRouteArticles } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button theme={EButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Back to list')}
            </Button>
            <OnEditBtn />
        </HStack>
    );
});
