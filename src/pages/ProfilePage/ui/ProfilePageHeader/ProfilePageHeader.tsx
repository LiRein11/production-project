import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

export interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onClickEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onClickCancel = useCallback(() => {
        dispatch(profileActions.cancelUpdate());
    }, [dispatch]);

    const onClickSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button theme={EButtonTheme.OUTLINE} onClick={onClickEdit}>
                            {t('Edit')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button theme={EButtonTheme.OUTLINE_RED} onClick={onClickCancel}>
                                {t('Cancel')}
                            </Button>
                            <Button theme={EButtonTheme.OUTLINE} onClick={onClickSave}>
                                {t('Save')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
