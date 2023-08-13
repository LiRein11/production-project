import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

export interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="clear" onClick={toggle}>
                    {short ? t('Короткий язык') : t('Язык')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={EButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                >
                    {short ? t('Короткий язык') : t('Язык')}
                </ButtonDeprecated>
            }
        />
    );
});
