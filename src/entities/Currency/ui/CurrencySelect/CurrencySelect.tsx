import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { ECurrency } from '../../model/types/currency';

export interface CurrencySelectProps {
    className?: string;
    value?: ECurrency;
    onChange?: (value: ECurrency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(() => Object.entries(ECurrency).map((val) => ({ value: val[0], content: val[1] })), []);
    console.log(Object.entries(ECurrency));

    const onChangeHandlerSelect = useCallback(
        (value: string) => {
            onChange?.(value as ECurrency);
        },
        [onChange],
    );

    return (
        <Select
            label={t('Currency')}
            options={options}
            value={value}
            onChange={onChangeHandlerSelect}
            readonly={readonly}
            className={className}
        />
    );
});
