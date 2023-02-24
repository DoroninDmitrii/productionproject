import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Articlelistitem from './Articlelistitem'

export default {
  title: 'entities/Articlelistitem',
  component: Articlelistitem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Articlelistitem>

const Template: ComponentStory<typeof Articlelistitem> = (args) => <Articlelistitem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
