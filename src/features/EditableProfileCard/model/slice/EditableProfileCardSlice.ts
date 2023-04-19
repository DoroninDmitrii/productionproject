import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditableProfileCardSchema } from '../types/EditableProfileCardSchema'

const initialState: EditableProfileCardSchema = {}

export const EditableProfileCardSlice = createSlice({
  name: 'EditableProfileCard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchArticlebyId.pending, (state, action) => {
    //     state.error = undefined
    //     state.isLoading = true
    //   })
    //   .addCase(fetchArticlebyId.fulfilled, (state, action: PayloadAction<Article>) => {
    //     state.isLoading = false
    //     state.data = action.payload
    //   })
    //   .addCase(fetchArticlebyId.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.error = action.payload
    //   })
  }
})

export const { actions: EditableProfileCardAction } = EditableProfileCardSlice
export const { reducer: EditableProfileCardReducer } = EditableProfileCardSlice
