import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const NormalSelected = Template.bind({});
NormalSelected.args = { selectedStars: 3 };

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];

export const DarkSelected = Template.bind({});
DarkSelected.args = { selectedStars: 3 };
DarkSelected.decorators = [ThemeDecorator(ETheme.DARK)];
