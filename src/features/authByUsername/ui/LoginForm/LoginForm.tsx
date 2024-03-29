import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicReducerLoader } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { ETextTheme, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
    const forceUpdate = useForceUpdate();

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            dispatch(loginActions.setClearInputs());
            forceUpdate();
        }
    }, [dispatch, username, password, forceUpdate]);

    return (
        <DynamicReducerLoader reducers={{ loginForm: loginReducer }} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack className={classNames(cls.LoginForm, {}, [className])} gap="16">
                        <Text title={t('Authorization form')} />
                        <Text text="login: admin/user, password: 123" />
                        {error && (
                            <Text text={t('Uncorrect username or password')} variant="error" />
                        )}
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
                            variant="outline"
                            className={classNames(cls.loginBtn)}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Login')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Authorization form')} />
                        {error && (
                            <TextDeprecated
                                text={t('Uncorrect username or password')}
                                theme={ETextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            autofocus
                            type="text"
                            className={classNames(cls.input)}
                            placeholder={t('Enter username')}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={classNames(cls.input)}
                            placeholder={t('Enter password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            theme={EButtonTheme.OUTLINE}
                            className={classNames(cls.loginBtn)}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Login')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicReducerLoader>
    );
});

export default LoginForm;
