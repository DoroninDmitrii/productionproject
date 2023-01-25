import { resolve } from 'path'
import { lazy } from 'react'

export const ArticleDetailesPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => resolve(import('./ArticleDetailesPage')), 1500)
}))
