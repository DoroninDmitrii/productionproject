import { CombinedState, EnhancedStore, ReducersMapObject, Reducer, AnyAction } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

// for key in StateSchema ('counter', 'user', 'loginForm')
export type StateSchemaKey = keyof StateSchema

export interface reducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: reducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
}
