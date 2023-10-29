import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommentCard from './CommentCard';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        text: 'hey',
        user: { id: '1', username: 'Ivan' },
    },
};

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [FeaturesFlagDecorator({isAppRedesigned: true})]

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '2',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
};
