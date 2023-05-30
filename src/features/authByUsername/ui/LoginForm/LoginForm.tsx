import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={classNames(cls.input)}
                placeholder={t('Enter username')}
            />
            <Input
                type="text"
                className={classNames(cls.input)}
                placeholder={t('Enter password')}
            />
            <Button theme={ButtonTheme.OUTLINE} className={classNames(cls.loginBtn)}>
                {t('Login')}
            </Button>
        </div>
    );
};
