import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Articlelist from './Articlelist'

export default {
  title: 'entities/Articlelist',
  component: Articlelist,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Articlelist>

const Template: ComponentStory<typeof Articlelist> = (args) => <Articlelist {...args} />

export const Normal = Template.bind({})
Normal.args = {}
