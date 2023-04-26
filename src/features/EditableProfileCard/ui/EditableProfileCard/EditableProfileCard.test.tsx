import { screen } from '@testing-library/react'
import { EditableProfileCard } from './EditableProfileCard'
import { componentRender } from 'shared/lib/tests/compinentRender/componentRender'
import { Profile } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { profileReducer } from '../../model/slice/profileSlice'

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 55,
  currency: Currency.USD,
  country: Country.Ukraine,
  city: 'Kiev',
  username: 'admin213'
}

describe('features/EditableProfileCard', () => {
  test('Test render', () => {
    componentRender(<EditableProfileCard id={'1'} />, {
      initialState: {
        profile: {
          readonly: true,
          data: profile,
          form: profile
        }
      },
      asyncReducers: {
        profile: profileReducer
      }
    })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
