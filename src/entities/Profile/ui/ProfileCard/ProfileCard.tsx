import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/Text/Text';

import { CurrencySelect, ECurrency } from 'entities/Currency';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import { CountrySelect, ECountry } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency: ECurrency) => void;
    onChangeCountry?: (country: ECountry) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const { className, data, isLoading, error, onChangeFirstname, onChangeLastname, onChangeAge, onChangeUsername, onChangeCity, onChangeCurrency, onChangeAvatar, onChangeCountry, readonly } = props;

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text theme={ETextTheme.ERROR} title={t('Error')} text={t('Reload')} align={ETextAlign.CENTER} />
            </HStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} size={150} alt="avatar" />
                </HStack>
            )}
            <Input data-testid="ProfileCard.firstname" value={data?.first} placeholder={t('firstname')} className={cls.input} onChange={onChangeFirstname} readonly={readonly} />
            <Input data-testid="ProfileCard.lastname" value={data?.lastname} placeholder={t('lastname')} className={cls.input} onChange={onChangeLastname} readonly={readonly} />
            <Input value={data?.age} placeholder={t('Age')} className={cls.input} onChange={onChangeAge} readonly={readonly} />
            <Input value={data?.city} placeholder={t('City')} className={cls.input} onChange={onChangeCity} readonly={readonly} />
            <Input value={data?.username} placeholder={t('Username')} className={cls.input} onChange={onChangeUsername} readonly={readonly} />
            <Input value={data?.avatar} placeholder={t('Avatar')} className={cls.input} onChange={onChangeAvatar} readonly={readonly} />
            <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
            <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
        </VStack>
    );
};
