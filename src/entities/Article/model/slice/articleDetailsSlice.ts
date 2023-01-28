import { createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {

  }
})

export const { actions: articleDetailsAction } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
