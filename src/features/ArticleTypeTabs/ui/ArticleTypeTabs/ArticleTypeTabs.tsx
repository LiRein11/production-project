import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { EArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: EArticleType;
    onChangeType: (type: EArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('articles');

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: EArticleType.ALL,
                content: t('All articles'),
                'data-testid': 'All',
            },
            {
                value: EArticleType.IT,
                content: t('IT'),
                'data-testid': 'It',
            },
            {
                value: EArticleType.ECONOMICS,
                content: t('ECONOMICS'),
                'data-testid': 'Economics',
            },
            {
                value: EArticleType.SCIENCE,
                content: t('SCIENCE'),
                'data-testid': 'Science',
            },
        ],
        [t],
    );

    const onClickTab = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as EArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            className={classNames('', {}, [className])}
            value={value}
            onClickTab={onClickTab}
            tabs={typeTabs}
        />
    );
});
