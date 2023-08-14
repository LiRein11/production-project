import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { DropdownDirection } from '@/shared/types/ui';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
    direction?: DropdownDirection;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className, direction = 'bottom left' } = props;
    const isMobile = useDevice();

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon Svg={NotificationIcon} onClick={onOpenDrawer} clickable />}
            off={
                <ButtonDeprecated theme={EButtonTheme.CLEAR} onClick={onOpenDrawer}>
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    if (isMobile) {
        return (
            <>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction={direction}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notificationsRedesign} />
                </Popover>
            }
            off={
                <PopoverDeprecated
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction={direction}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </PopoverDeprecated>
            }
        />
    );
});
