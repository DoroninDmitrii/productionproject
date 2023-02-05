import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer, articleDetailsAction } from './articleDetailsSlice'
import { fetchArticlebyId } from '../services/fetchArticleById/fetchArticleById'

const data = {
  id: '1',
  tutle: 'subtitle'
}

describe('articleDetailsSlice.test', () => {
  test('test isLoading', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticlebyId.pending)).toEqual({
      isLoading: true
    })
  })

  test('test get data', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { data: undefined, error: undefined, isLoading: true }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      // @ts-expect-error
      fetchArticlebyId.fulfilled(data))).toEqual({ data, error: undefined, isLoading: false })
  })

  test('test error', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { error: 'error', isLoading: true }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticlebyId.rejected)).toEqual({ error: undefined, isLoading: false })
  })
})
