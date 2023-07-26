import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { ETextTheme, Text } from '@/shared/ui/Text/Text';
import { DynamicReducerLoader } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicReducerLoader reducers={{ loginForm: loginReducer }} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && <Text text={t('Uncorrect username or password')} theme={ETextTheme.ERROR} />}
                <Input autofocus type="text" className={classNames(cls.input)} placeholder={t('Enter username')} onChange={onChangeUsername} value={username} />
                <Input type="text" className={classNames(cls.input)} placeholder={t('Enter password')} onChange={onChangePassword} value={password} />
                <Button theme={EButtonTheme.OUTLINE} className={classNames(cls.loginBtn)} onClick={onLoginClick} disabled={isLoading}>
                    {t('Login')}
                </Button>
            </div>
        </DynamicReducerLoader>
    );
});

export default LoginForm;
