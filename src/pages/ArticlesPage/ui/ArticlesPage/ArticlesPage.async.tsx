/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { lazy } from 'react'
// @ts-ignore
export const ArticlesPageAsync = lazy(async () => await import('./ArticlePage'))
