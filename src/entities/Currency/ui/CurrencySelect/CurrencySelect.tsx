import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ECurrency } from '../../model/consts/consts';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

export interface CurrencySelectProps {
    className?: string;
    value?: ECurrency;
    onChange?: (value: ECurrency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation('profile');

        const options = useMemo(
            () =>
                Object.entries(ECurrency).map((val) => ({
                    value: val[0],
                    content: val[1],
                })),
            [],
        );
        console.log(Object.entries(ECurrency));

        const onChangeHandlerSelect = useCallback(
            (value: string) => {
                onChange?.(value as ECurrency);
            },
            [onChange],
        );

        const props = {
            className,
            defaultValue: t('Currency'),
            onChange: onChangeHandlerSelect,
            value,
            items: options,
            readonly,
            direction: 'top right' as const,
            label: t('Currency'),
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
        );
    },
);
