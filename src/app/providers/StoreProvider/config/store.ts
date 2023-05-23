import { CombinedState, configureStore, getDefaultMiddleware, ReducersMapObject, Reducer } from '@reduxjs/toolkit'
import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { scrollSaveReducer } from '@/features/ScrollSave'
import { $api } from '@/shared/api/api'
import { createReducerManager } from './reducerManager'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArg = {
    api: $api
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // add ReducersMapObject<StateSchema> because reducers haven't appropriate types
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    }).concat(rtkApi.middleware)
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
