import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { DropdownDirection } from '@/shared/types/ui';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
    className?: string;
    direction?: DropdownDirection;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className, direction = 'bottom left' } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (!authData) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    direction={direction}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                  {
                                      content: t('AdminPanel'),
                                      href: getRouteAdminPanel(),
                                  },
                              ]
                            : []),
                        {
                            content: t('Profile Page'),
                            href: getRouteProfile(authData.id),
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={40} src={authData.avatar} alt="avatar" />}
                />
            }
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    direction={direction}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                  {
                                      content: t('AdminPanel'),
                                      href: getRouteAdminPanel(),
                                  },
                              ]
                            : []),
                        {
                            content: t('Profile Page'),
                            href: getRouteProfile(authData.id),
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={
                        <AvatarDeprecated
                            fallbackInverted
                            size={30}
                            src={authData.avatar}
                            alt="avatar"
                        />
                    }
                />
            }
        />
    );
});
