import { StateSchema } from 'app/providers/StoreProvider'
import axios from 'axios'
import { userAction } from 'entities/User'
import { Dispatch } from 'react'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  test('', async () => {
    const userValue = { username: '123', id: '1' }

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const action = loginByUsername({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)
    console.log(result)

    expect(dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })
})
