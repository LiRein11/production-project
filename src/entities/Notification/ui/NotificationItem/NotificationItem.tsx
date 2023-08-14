import { memo } from 'react';

import { Notification } from '../../model/types/notification';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecataed, ECardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    variant="outlined"
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            }
            off={
                <CardDeprecataed
                    theme={ECardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <TextDeprecated title={item.title} text={item.description} />
                </CardDeprecataed>
            }
        />
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
