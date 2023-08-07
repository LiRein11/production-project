import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

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
            trigger={<Avatar fallbackInverted size={30} src={authData.avatar} alt="avatar" />}
        />
    );
});
