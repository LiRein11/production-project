import { ChangeEvent, useMemo } from 'react';

import { typedMemo } from '@/shared/consts/typedMemo';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}

export interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    'data-testid'?: string;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
        'data-testid': dataTestId = 'Select',
    } = props;

    const onChangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option value={opt.value} className={cls.option} key={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(cls.SelectWrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                data-testid={dataTestId}
                disabled={readonly}
                value={value}
                onChange={onChangeHandlerSelect}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
});
