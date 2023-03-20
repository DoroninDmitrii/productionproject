import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleReacommendationsIsLoading = (state: StateSchema) => state.articleDetailsRecommendations?.isLoading
export const getArticleReacommendationsIsError = (state: StateSchema) => state.articleDetailsRecommendations?.error
