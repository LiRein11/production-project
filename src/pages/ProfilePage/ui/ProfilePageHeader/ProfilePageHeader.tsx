import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly ? (
                        <Button className={cls.editBtn} theme={EButtonTheme.OUTLINE} onClick={onClickEdit}>
                            {t('Edit')}
                        </Button>
                    ) : (
                        <>
                            <Button className={cls.editBtn} theme={EButtonTheme.OUTLINE_RED} onClick={onClickCancel}>
                                {t('Cancel')}
                            </Button>
                            <Button className={cls.saveBtn} theme={EButtonTheme.OUTLINE} onClick={onClickSave}>
                                {t('Save')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
