import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from '../../const/const'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileData', () => {
  test('should return validate with errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_COUNTRY,
          ValidateProfileError.INCORRECT_AGE
        ]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_AGE
    ])
  })
  test('should return empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
