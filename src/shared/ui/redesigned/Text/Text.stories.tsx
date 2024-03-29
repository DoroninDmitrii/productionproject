import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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
    title: 'Title',
    text: 'Text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    variant: 'error',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Text',
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Text',
    size: 'l',
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    title: 'Title',
    text: 'Text',
    size: 'xl',
};
