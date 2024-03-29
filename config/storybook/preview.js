import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { Theme } from '../../src/shared/const/theme'
import { FeaturesFlagDecorator } from '../../src/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ['app', Theme.LIGHT], color: '#e8e8ea' },
      { name: 'dark', class: ['app', Theme.DARK], color: '#090949' },
      { name: 'orange', class: ['app', Theme.ORANGE], color: '#bd5012' }
    ],
  },
}

addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(FeaturesFlagDecorator({}));
