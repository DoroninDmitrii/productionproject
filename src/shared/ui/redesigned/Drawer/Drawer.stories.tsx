import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// eslint-disable-next-line plugin/layer-plugin
import { NotificationList } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <NotificationList />,
    isOpen: true,
};
Normal.decorators = [StoreDecorator({})];
