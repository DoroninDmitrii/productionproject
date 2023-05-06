import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../const/const'

const data = {
  username: 'admin',
  age: 30,
  country: Country.Ukraine,
  lastname: 'Ivanov',
  first: 'Ivan',
  city: 'Moscow',
  currency: Currency.USD
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')

    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' }
      }
    })

    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')

    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
})
