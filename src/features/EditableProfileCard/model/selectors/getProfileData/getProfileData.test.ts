import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'

describe('getProfileData', () => {
  test('should return data', () => {
    const data = {
      username: 'admin',
      age: 30,
      country: Country.Ukraine,
      lastname: 'Ivanov',
      first: 'Ivan',
      city: 'Moscow',
      currency: Currency.USD
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should return empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
