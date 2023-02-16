import { lazy } from 'react'

export const AddCommentFormAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => resolve(import('./AddCommentForm')), 1500)
}))
