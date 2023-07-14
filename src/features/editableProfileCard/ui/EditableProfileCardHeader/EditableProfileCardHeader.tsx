import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
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
});
