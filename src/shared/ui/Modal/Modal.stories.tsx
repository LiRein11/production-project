import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio amet totam unde enim veritatis rerum atque excepturi! Labore itaque expedita iste voluptates neque dicta alias deserunt accusantium ipsam, consectetur reprehenderi',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio amet totam unde enim veritatis rerum atque excepturi! Labore itaque expedita iste voluptates neque dicta alias deserunt accusantium ipsam, consectetur reprehenderi',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];
