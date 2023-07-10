import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'bottom' | 'top';

export interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
    const { items, className, value, defaultValue, onChange, readonly, label, direction = 'bottom' } = props;

    const optionsClasses = [cls[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox disabled={readonly} as="div" className={classNames(cls.ListBox, {}, [className])} value={value} onChange={onChange}>
                <HListBox.Button disabled={readonly} className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled }, [])}>
                                    <HStack>
                                        {item.content}
                                        {selected && <CheckIcon className={cls.icon} />}
                                    </HStack>
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
