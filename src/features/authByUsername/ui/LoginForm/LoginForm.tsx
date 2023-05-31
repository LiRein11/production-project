import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useEffect, useState } from 'react';
import { ETextTheme, Text } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import { getLogin } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { password, username, isLoading, error } = useSelector(getLogin);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(loginActions.setClearError());
            }, 3000);
        }
    }, [dispatch, error]);

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
        dispatch(loginActions.setClearInputs());
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={t('Uncorrect username or password')} theme={ETextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={classNames(cls.input)}
                placeholder={t('Enter username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={classNames(cls.input)}
                placeholder={t('Enter password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={EButtonTheme.OUTLINE}
                className={classNames(cls.loginBtn)}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
});
