import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/test/ny-city.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    age: 30,
    country: Country.Ukraine,
    lastname: 'Ivanov',
    first: 'Ivan',
    city: 'Moscow',
    currency: Currency.USD,
    avatar
  }
}

export const withError = Template.bind({})
withError.args = {
  error: 'true'
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true
}

export const readonly = Template.bind({})
readonly.args = {
  readonly: true
}
