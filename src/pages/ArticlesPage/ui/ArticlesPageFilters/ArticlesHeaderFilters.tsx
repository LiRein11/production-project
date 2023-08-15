import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import cls from './ArticlesHeaderFilters.module.scss';

interface ArticlesHeaderFiltersProps {
    className?: string;
}

export const ArticlesHeaderFilters = memo((props: ArticlesHeaderFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const {
        onChangeOrder,
        onChangeSort,
        sort,
        order,
        view,
        onChangeView,
        search,
        onChangeSearch,
        type,
        onChangeType,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlesHeaderFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    sort={sort}
                    order={order}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    data-testid="ArticlesHeaderFilters.Input"
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search')}
                />
            </Card>
            <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
        </div>
    );
});
