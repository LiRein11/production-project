import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { ETextAlign, ETextTheme, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <TextDeprecated
                theme={ETextTheme.ERROR}
                title={t('Error')}
                text={t('Reload')}
                align={ETextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [cls.loading])}>
            <LoaderDeprecated />
        </HStack>
    );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeUsername,
        onChangeCity,
        onChangeCurrency,
        onChangeAvatar,
        onChangeCountry,
        readonly,
    } = props;
    const { t } = useTranslation('profile');

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.ProfileCardDeprecated, { [cls.editing]: !readonly }, [
                className,
            ])}
        >
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} size={150} alt="avatar" />
                </HStack>
            )}
            <InputDeprecated
                data-testid="ProfileCard.firstname"
                value={data?.first}
                placeholder={t('firstname')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <InputDeprecated
                data-testid="ProfileCard.lastname"
                value={data?.lastname}
                placeholder={t('lastname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
});
