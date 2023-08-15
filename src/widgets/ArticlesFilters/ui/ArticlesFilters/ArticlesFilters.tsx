import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { EArticleSortField, EArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/order';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
    className?: string;
    order: SortOrder;
    sort: EArticleSortField;
    type: EArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: EArticleSortField) => void;
    onChangeType: (type: EArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        order,
        sort,
        search,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        type,
    } = props;
    const { t } = useTranslation();

    return (
        <Card padding="24" className={classNames(cls.ArticlesFilters, {}, [className])}>
            <VStack gap="32">
                <Input
                    data-testid="ArticlesHeaderFilters.Input"
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                    size="s"
                />

                <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    sort={sort}
                    order={order}
                />
            </VStack>
        </Card>
    );
});
