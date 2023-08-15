import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import cls from './FiltersContainer.module.scss';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { onChangeOrder, onChangeSort, sort, order, search, onChangeSearch, type, onChangeType } =
        useArticleFilters();

    return (
        <ArticlesFilters
            order={order}
            sort={sort}
            type={type}
            search={search}
            onChangeSearch={onChangeSearch}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            className={classNames(cls.FiltersContainer, {}, [className])}
        />
    );
});
