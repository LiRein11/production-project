import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { ETextSize, ETextTheme, Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text Text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text Text',
    theme: ETextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text Text Text Text Text Text Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text Text',
};
PrimaryDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title Title',
};
onlyTitleDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text Text Text Text Text Text Text',
};
onlyTextDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text Text',
    size: ETextSize.L,
};
