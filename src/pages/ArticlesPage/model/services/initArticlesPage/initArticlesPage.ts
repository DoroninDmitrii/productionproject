import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageInited
} from '../../selectors/articlesPageSelectors'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      dispatch(articlePageActions.initState())
      dispatch(fetchArticlesList({
        page: 1
      }))
    }
  }
)
