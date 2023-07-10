import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const ListBoxBottom = Template.bind({});
ListBoxBottom.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '12334', disabled: true },
        { value: '3', content: '12332' },
    ],
    direction: 'bottom',
};

export const ListBoxTop = Template.bind({});
ListBoxTop.args = {
    className: 'storiesTopListBox',
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '12334', disabled: true },
        { value: '3', content: '12332' },
    ],
    direction: 'top',
};

export const ListBoxBottomDark = Template.bind({});
ListBoxBottomDark.args = {
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '12334', disabled: true },
        { value: '3', content: '12332' },
    ],
    direction: 'bottom',
};
ListBoxBottomDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const ListBoxTopDark = Template.bind({});
ListBoxTopDark.args = {
    className: 'storiesTopListBox',
    defaultValue: 'Выберите цифру',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '123' },
        { value: '2', content: '12334', disabled: true },
        { value: '3', content: '12332' },
    ],
    direction: 'top',
};
ListBoxTopDark.decorators = [ThemeDecorator(ETheme.DARK)];
