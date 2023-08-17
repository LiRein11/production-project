import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DetailsContainer } from './DetailsContainer';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ArticlePageDetails/DetailsContainer',
    component: DetailsContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DetailsContainer>;

const Template: ComponentStory<typeof DetailsContainer> = (args) => <DetailsContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
