import { ReactNode, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, ECardTheme } from '../Card/Card';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
    'data-testid'?: string;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onClickTab: (tab: TabItem) => void;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onClickTab } = props;
    const { t } = useTranslation();

    const onClickHandle = useCallback(
        (tab: TabItem) => () => {
            onClickTab(tab);
        },
        [onClickTab],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    data-testid={tab['data-testid']}
                    className={cls.tab}
                    theme={tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINED}
                    key={tab.value}
                    onClick={onClickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
