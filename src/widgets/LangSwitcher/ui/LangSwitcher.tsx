import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

export interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={EButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};
