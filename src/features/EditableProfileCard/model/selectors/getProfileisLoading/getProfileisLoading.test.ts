import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileisLoading } from './getProfileisLoading'

describe('getProfileisLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileisLoading(state as StateSchema)).toEqual(true)
  })
  test('should return empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileisLoading(state as StateSchema)).toEqual(undefined)
  })
})
