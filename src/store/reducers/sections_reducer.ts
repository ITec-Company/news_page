import { createSlice } from '@reduxjs/toolkit'

import { deleteSectionTC, getSectionsTC } from 'store/thunks/sections_thunks'

export const initialState: SectionsInitialStateType = {
  sections: [{ id: 0, name: 'default' }],
}

export const mainSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSectionsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections = action.payload
      }
    })
    builder.addCase(deleteSectionTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections = state.sections.filter(({ id }) => id !== action.payload)
      }
    })
  },
})

export const sectionsReducer = mainSlice.reducer

// types
export type SectionType = {
  id: number
  name: string
}

export type SectionsInitialStateType = {
  sections: SectionType[]
}
