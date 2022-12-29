import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userAction } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'users/loginByUsername',
  async ({ password, username }, { extra, dispatch, rejectWithValue }) => {
    try {
      // @ts-expect-error
      const response = await extra.api.post<User>('/login', { username, password })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userAction.setAuthData(response.data))
      // @ts-expect-error
      extra.navigate('/about')

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('Error')
    }
  }
)
