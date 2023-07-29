import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';
import { Button, EButtonSize, EButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: EButtonTheme.CLEAR,
};

export const ClearPrimary = Template.bind({});
ClearPrimary.args = {
    children: 'Text',
    theme: EButtonTheme.CLEAR_PRIMARY,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: EButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: EButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: EButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: EButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: EButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: EButtonTheme.OUTLINE,
    disabled: true,
};
