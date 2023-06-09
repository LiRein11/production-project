import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { ECountry } from '../../model/types/country';

export interface CountrySelectProps {
    className?: string;
    value?: ECountry;
    onChange?: (value: ECountry) => void;
    readonly?: boolean;
}

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(() => Object.entries(ECountry).map((val) => ({ value: val[0], content: val[1] })), []);

    const onChangeHandlerSelect = useCallback(
        (value: string) => {
            onChange?.(value as ECountry);
        },
        [onChange],
    );

    return <ListBox className={className} defaultValue={t('Country')} onChange={onChangeHandlerSelect} value={value} items={options} readonly={readonly} direction="top right" label={t('Country')} />;
});
