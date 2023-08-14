import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '200px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const ListBoxBottomLeft = Template.bind({});
ListBoxBottomLeft.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: 'Story',
    items: [
        { value: '1', content: '1241241241241243' },
        { value: '2', content: '1231241241241234', disabled: true },
        { value: '3', content: '12124124214214332' },
    ],
    direction: 'bottom left',
};

export const ListBoxBottomRight = Template.bind({});
ListBoxBottomRight.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: 'Story',
    items: [
        { value: '1', content: '12124214124123' },
        { value: '2', content: '12124124214334', disabled: true },
        { value: '3', content: '12312412421432' },
    ],
    direction: 'bottom right',
};

export const ListBoxTopLeft = Template.bind({});
ListBoxTopLeft.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: 'Story',
    items: [
        { value: '1', content: '123124214214124' },
        { value: '2', content: '12324112421434', disabled: true },
        { value: '3', content: '123342141242142' },
    ],
    direction: 'top left',
};

export const ListBoxTopRight = Template.bind({});
ListBoxTopRight.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: 'Story',
    items: [
        { value: '1', content: '123124124124214' },
        { value: '2', content: '123344214124124', disabled: true },
        { value: '3', content: '12332421412412' },
    ],
    direction: 'top right',
};

export const ListBoxBottomRightDark = Template.bind({});
ListBoxBottomRightDark.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: 'Story',
    items: [
        { value: '1', content: '123124214214' },
        { value: '2', content: '12334214124124', disabled: true },
        { value: '3', content: '123322144124' },
    ],
    direction: 'bottom right',
};
ListBoxBottomRightDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const ListBoxTopRightDark = Template.bind({});
ListBoxTopRightDark.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: 'Story',
    items: [
        { value: '1', content: '1232141242' },
        { value: '2', content: '123344214124', disabled: true },
        { value: '3', content: '123341242142142' },
    ],
    direction: 'top right',
};
ListBoxTopRightDark.decorators = [ThemeDecorator(ETheme.DARK)];
