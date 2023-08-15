import { ReactNode, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

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
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onClickTab, direction = 'row' } = props;
    const { t } = useTranslation();

    const onClickHandle = useCallback(
        (tab: TabItem) => () => {
            onClickTab(tab);
        },
        [onClickTab],
    );

    return (
        <Flex
            align="start"
            direction={direction}
            gap="8"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        data-testid={tab['data-testid']}
                        className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        onClick={onClickHandle(tab)}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
