import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { getArticleDetailsData } from 'entities/Article/model/selectors/ articleDetails'
import { getUserAuthData } from 'entities/User'
import { getAddCommentFromText } from '../../selectors/addCommentFormSelectors'

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const userData = getUserAuthData(getState())
    const text = getAddCommentFromText(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)
