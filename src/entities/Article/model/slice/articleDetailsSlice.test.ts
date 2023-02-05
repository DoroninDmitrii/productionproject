import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer, articleDetailsAction } from './articleDetailsSlice'
import { fetchArticlebyId } from '../services/fetchArticleById/fetchArticleById'

const data = {
  id: '1',
  tutle: 'subtitle'
}

describe('articleDetailsSlice.test', () => {
  test('test get data', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { data: undefined, error: undefined, isLoading: true }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticlebyId.fulfilled)).toEqual({ data: undefined, error: undefined, isLoading: false })
  })

  test('test isLoading', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false, error: 'error' }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticlebyId.pending)).toEqual({
      isLoading: true,
      error: undefined
    })
  })

  test('test error', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { error: 'error', isLoading: true }
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticlebyId.rejected)).toEqual({ error: undefined, isLoading: false })
  })
})
