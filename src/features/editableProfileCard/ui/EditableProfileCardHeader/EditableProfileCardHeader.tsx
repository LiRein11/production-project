import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card border="partial" padding="24" max>
                    <HStack max justify="between" className={classNames('', {}, [className])}>
                        <Text title={t('Profile')} />
                        {canEdit && (
                            <div>
                                {readonly ? (
                                    <Button
                                        data-testid="EditableProfileCardHeader.EditButton"
                                        onClick={onClickEdit}
                                    >
                                        {t('Edit')}
                                    </Button>
                                ) : (
                                    <HStack gap="8">
                                        <Button
                                            color="error"
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                            onClick={onClickCancel}
                                        >
                                            {t('Cancel')}
                                        </Button>
                                        <Button
                                            color="success"
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                            onClick={onClickSave}
                                        >
                                            {t('Save')}
                                        </Button>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <HStack max justify="between" className={classNames('', {}, [className])}>
                    <TextDeprecated title={t('Profile')} />
                    {canEdit && (
                        <div>
                            {readonly ? (
                                <ButtonDeprecated
                                    data-testid="EditableProfileCardHeader.EditButton"
                                    theme={EButtonTheme.OUTLINE}
                                    onClick={onClickEdit}
                                >
                                    {t('Edit')}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap="8">
                                    <ButtonDeprecated
                                        data-testid="EditableProfileCardHeader.CancelButton"
                                        theme={EButtonTheme.OUTLINE_RED}
                                        onClick={onClickCancel}
                                    >
                                        {t('Cancel')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                        theme={EButtonTheme.OUTLINE}
                                        onClick={onClickSave}
                                    >
                                        {t('Save')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </div>
                    )}
                </HStack>
            }
        />
    );
});
