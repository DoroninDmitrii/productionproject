import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginAction, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' }
    expect(loginReducer(state as LoginSchema, loginAction.setUsername('123123'))).toEqual({ username: '123123' })
  })
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(state as LoginSchema, loginAction.setPassword('123123'))).toEqual({ password: '123123' })
  })
})
