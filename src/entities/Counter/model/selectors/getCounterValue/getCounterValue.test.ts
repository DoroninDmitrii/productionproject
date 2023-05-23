import { StateSchema } from '@/app/providers/StoreProvider'
import { gettCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('should return getcounter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(gettCounterValue(state as StateSchema)).toEqual(10)
  })
})
