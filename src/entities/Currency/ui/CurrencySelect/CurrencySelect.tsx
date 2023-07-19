import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { ECurrency } from '../../model/consts/consts';

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

    return <ListBox className={className} defaultValue={t('Currency')} onChange={onChangeHandlerSelect} value={value} items={options} readonly={readonly} direction="top right" label={t('Currency')} />;
});
