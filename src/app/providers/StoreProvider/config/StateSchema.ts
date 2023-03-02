import { CombinedState, EnhancedStore, ReducersMapObject, Reducer, AnyAction } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'
import { AddCommentFormSchema } from 'features/addCommentForm'
import { ArticlePageSchema } from 'pages/ArticlesPage'
export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  addCommentForm?: AddCommentFormSchema
  articlePage?: ArticlePageSchema
}

// for key in StateSchema ('counter', 'user', 'loginForm')
export type StateSchemaKey = keyof StateSchema
export type MountedReducers = ObjectRecord<StateSchemaKey, boolean>

export interface reducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  // true - reducer is mounted false - isn't
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: reducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
