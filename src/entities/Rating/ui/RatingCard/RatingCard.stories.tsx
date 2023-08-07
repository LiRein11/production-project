import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const NormalSelected = Template.bind({});
NormalSelected.args = { rate: 3 };

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];

export const DarkSelected = Template.bind({});
DarkSelected.args = { rate: 3 };
DarkSelected.decorators = [ThemeDecorator(ETheme.DARK)];
