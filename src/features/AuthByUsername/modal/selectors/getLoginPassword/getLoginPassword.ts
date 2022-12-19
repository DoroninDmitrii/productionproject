import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginPassward = (state: StateSchema) => state?.loginForm?.password || ''
