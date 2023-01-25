import { resolve } from 'path'
import { lazy } from 'react'

export const ArticlesPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => resolve(import('./ArticlePage')), 1500)
}))
