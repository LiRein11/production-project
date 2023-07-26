import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';
import { ArticlesHeaderFilters } from './ArticlesHeaderFilters';

export default {
    title: 'entities/Article/ArticlesHeaderFilters',
    component: ArticlesHeaderFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesHeaderFilters>;

const Template: ComponentStory<typeof ArticlesHeaderFilters> = (args) => (
    <ArticlesHeaderFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(ETheme.DARK)];
