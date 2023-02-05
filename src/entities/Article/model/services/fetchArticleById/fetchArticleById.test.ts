import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchArticlebyId } from './fetchArticleById'

const data = {
  id: '1'
}

describe('fetchArticlebyId.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticlebyId)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk(data)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlebyId)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(data)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
