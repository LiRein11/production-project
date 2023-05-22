import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(ETheme.DARK)],
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(ETheme.DARK)],
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const RedDark: Story = {
    decorators: [ThemeDecorator(ETheme.DARK)],
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
