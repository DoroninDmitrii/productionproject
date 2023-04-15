import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { {{pascalCase}}Schema } from '../types/{{pascalCase}}Schema'

const initialState: {{pascalCase}}Schema = {}

export const {{pascalCase}}Slice = createSlice({
  name: '{{pascalCase}}',
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

export const { actions: {{pascalCase}}Action } = {{pascalCase}}Slice
export const { reducer: {{pascalCase}}Reducer } = {{pascalCase}}Slice
