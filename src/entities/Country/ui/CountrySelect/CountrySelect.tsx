import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
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

    return (
        <Select
            label={t('Country')}
            options={options}
            value={value}
            onChange={onChangeHandlerSelect}
            readonly={readonly}
            className={className}
        />
    );
});
