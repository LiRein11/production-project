import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, ECardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onClickTab: (tab: TabItem) => void;
}

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
                <Card className={cls.tab} theme={tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINED} key={tab.value} onClick={onClickHandle(tab)}>
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
