import { EValidateError, ProfileCard, fetchProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer } from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import { ETextTheme, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/ui/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const formData = useSelector(getProfileForm);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorsTranslate = {
        [EValidateError.INCORRECT_FIRSTNAME]: t('INCORRECT_FIRSTNAME'),
        [EValidateError.INCORRECT_LASTNAME]: t('INCORRECT_LASTNAME'),
        [EValidateError.INCORRECT_USERNAME]: t('INCORRECT_USERNAME'),
        [EValidateError.INCORRECT_CITY]: t('INCORRECT_CITY'),
        [EValidateError.INCORRECT_AGE]: t('INCORRECT_AGE'),
        [EValidateError.SERVER_ERROR]: t('INCORRECT_SERVER_ERROR'),
        [EValidateError.NO_DATA]: t('INCORRECT_NO_DATA'),
    };

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            if (/^\d*$/.test(value!)) {
                dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
            }
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency?: ECurrency) => {
            dispatch(profileActions.updateProfile({ currency: currency || ECurrency.RUB }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country?: ECountry) => {
            dispatch(profileActions.updateProfile({ country: country || ECountry.RUSSIA }));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <VStack gap="16" max>
                    <ProfilePageHeader />
                    {validateErrors?.length && validateErrors.map((err) => <Text theme={ETextTheme.ERROR} text={validateErrorsTranslate[err]} key={err} />)}
                    <ProfileCard data={formData} isLoading={isLoading} error={error} onChangeFirstname={onChangeFirstname} onChangeLastname={onChangeLastname} onChangeAge={onChangeAge} onChangeCity={onChangeCity} onChangeUsername={onChangeUsername} onChangeAvatar={onChangeAvatar} onChangeCurrency={onChangeCurrency} onChangeCountry={onChangeCountry} readonly={readonly} />
                </VStack>
            </Page>
        </DynamicReducerLoader>
    );
});

export default ProfilePage;
