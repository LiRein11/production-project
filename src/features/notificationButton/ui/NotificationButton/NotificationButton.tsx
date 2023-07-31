import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { DropdownDirection } from '@/shared/types/ui';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

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
    }, [setIsOpen]);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const trigger = (
        <Button theme={EButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
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
        <Popover className={classNames(cls.NotificationButton, {}, [className])} direction={direction} trigger={trigger}>
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
