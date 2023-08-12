import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainLayout } from './MainLayout';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'shared/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    header: <div>asfsaf</div>,
    content: <div>asfsaf</div>,
    sidebar: <div>asfsaf</div>,
    toolbar: <div>asfsaf</div>,
};

export const Dark = Template.bind({});
Dark.args = {
    header: <div>asfsaf</div>,
    content: <div>asfsaf</div>,
    sidebar: <div>asfsaf</div>,
    toolbar: <div>asfsaf</div>,
};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];
