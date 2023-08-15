import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ECountry } from '../../model/consts/consts';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

export interface CountrySelectProps {
    className?: string;
    value?: ECountry;
    onChange?: (value: ECountry) => void;
    readonly?: boolean;
}

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const options = useMemo(
            () =>
                Object.entries(ECountry).map((val) => ({
                    value: val[0],
                    content: val[1],
                })),
            [],
        );

        const onChangeHandlerSelect = useCallback(
            (value: string) => {
                onChange?.(value as ECountry);
            },
            [onChange],
        );

        const props = {
            className,
            defaultValue: t('Country'),
            onChange: onChangeHandlerSelect,
            value,
            items: options,
            readonly,
            direction: 'top right' as const,
            label: t('Country'),
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
