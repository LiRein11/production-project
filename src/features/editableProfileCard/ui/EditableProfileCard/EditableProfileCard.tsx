import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ETextTheme, Text } from '@/shared/ui/Text/Text';
import { ProfileCard } from '@/entities/Profile';

import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { VStack } from '@/shared/ui/Stack';
import { EValidateError } from '@/shared/consts/errors';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const formData = useSelector(getProfileForm);
    const validateErrors = useSelector(getProfileValidateErrors);

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
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((err) => <Text data-testid="EditableProfileCard.Error" theme={ETextTheme.ERROR} text={validateErrorsTranslate[err]} key={err} />)}
                <ProfileCard data={formData} isLoading={isLoading} error={error} onChangeFirstname={onChangeFirstname} onChangeLastname={onChangeLastname} onChangeAge={onChangeAge} onChangeCity={onChangeCity} onChangeUsername={onChangeUsername} onChangeAvatar={onChangeAvatar} onChangeCurrency={onChangeCurrency} onChangeCountry={onChangeCountry} readonly={readonly} />
            </VStack>
        </DynamicReducerLoader>
    );
});
