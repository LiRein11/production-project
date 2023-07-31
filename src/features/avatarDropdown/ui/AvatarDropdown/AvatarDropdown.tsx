import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/consts/router';
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
                            href: RoutePath.admin_panel,
                        },
                    ]
                    : []),
                {
                    content: t('Profile Page'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} alt="avatar" />}
        />
    );
});
