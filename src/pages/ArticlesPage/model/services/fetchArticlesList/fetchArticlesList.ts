/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import { getArticlesPageLimit, getArticlesPageSort, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageNum } from '../../selectors/articlesPageSelectors'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticlesListProps,
ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const limit = getArticlesPageLimit(getState())
    const sort = getArticlesPageSort(getState())
    const order = getArticlesPageOrder(getState())
    const search = getArticlesPageSearch(getState())
    const page = getArticlesPageNum(getState())

    try {
      addQueryParams({ sort, order, search })
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('Error')
    }
  }
)
