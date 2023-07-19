import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types/order';
import { EArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    order: SortOrder;
    sort: EArticleSortField;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: EArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, order, sort, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('asc'),
            },
            {
                value: 'desc',
                content: t('desc'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOptions<EArticleSortField>[]>(
        () => [
            {
                value: EArticleSortField.CREATED,
                content: t('created'),
            },
            {
                value: EArticleSortField.VIEWS,
                content: t('views'),
            },
            {
                value: EArticleSortField.TITLE,
                content: t('title'),
            },
        ],
        [t],
    );

    // const onChangeHandlerOrder = useCallback(
    //     (newOrder: string) => {
    //         onChangeOrder?.(newOrder as SortOrder);
    //     },
    //     [onChangeOrder],
    // ); // так делать можно, но плохо (пример как делать правильно в select через дженерики)

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<EArticleSortField> label={t('Sort by')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
            <Select<SortOrder> className={cls.order} label={t('by')} options={orderOptions} value={order} onChange={onChangeOrder} />
        </div>
    );
});
