import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetaisPageRecommendationsSchema } from '../types/ArticleDetaisPageRecommendationsSchema'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendation/fetchArticleRecommendation'
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false
        recommendationAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleDetaisPageRecommendationsReducer } = articleDetaisPageRecommendationsSlice
