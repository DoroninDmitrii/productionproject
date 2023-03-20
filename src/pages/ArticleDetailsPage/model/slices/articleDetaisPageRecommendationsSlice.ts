import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetaisPageRecommendationsSchema } from '../types/ArticleDetaisPageRecommendationsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { Article } from 'entities/Article'

const recommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsRecommendations || recommendationAdapter.getInitialState()
)

const articleDetaisPageRecommendationsSlice = createSlice({
  name: 'articleDetaisPageRecommendationsSlice',
  initialState: recommendationAdapter.getInitialState<ArticleDetaisPageRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCommentsByArticleId.pending, (state, action) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
  //       state.isLoading = false
  //       commentsAdapter.setAll(state, action.payload)
  //     })
  //     .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // }
})

export const { reducer: articleDetaisPageRecommendationsReducer } = articleDetaisPageRecommendationsSlice
