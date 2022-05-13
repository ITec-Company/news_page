import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: SinglePaginationReducerType = {
  currentPage: 1,
  pagesCount: 1,
}

export const mainSlice = createSlice({
  name: 'single_pagination',
  initialState,
  reducers: {
    setNextPageAC: state => {
      state.currentPage += 1
    },
    setPreviousPageAC: state => {
      state.currentPage -= 1
    },
    setPagesCountAC: (state, action: PayloadAction<number>) => {
      state.pagesCount = action.payload
    },
    setFirstPageAC: state => {
      // как обойтись без создания этого метода ?
      state.currentPage = initialState.currentPage
    },
  },
})

export const { setPreviousPageAC, setNextPageAC, setPagesCountAC, setFirstPageAC } =
  mainSlice.actions
export const singlePaginationReducer = mainSlice.reducer

// types
export type SinglePaginationReducerType = {
  currentPage: number
  pagesCount: number
}
