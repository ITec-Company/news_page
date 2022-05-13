import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  changeSectionTC,
  deleteSectionTC,
  getSectionsTC,
  postSectionsTC,
} from 'store/thunks/sections_thunks'
import { findIndexElement } from 'utils/utils'

export const initialState: SectionsInitialStateType = {
  sections: [{ id: 0, name: 'все' }],
  defaultSection: { id: 0, name: 'все' },
  activeSectionId: 0,
}

export const mainSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setCurrentSectionAC: (state, action: PayloadAction<number>) => {
      state.activeSectionId = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getSectionsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections.push(...action.payload)
      }
    })
    builder.addCase(deleteSectionTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections = state.sections.filter(({ id }) => id !== action.payload)
      }
    })
    builder.addCase(postSectionsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections.push(action.payload)
      }
    })
    builder.addCase(
      changeSectionTC.fulfilled,
      (state, action: PayloadAction<SectionType | null>) => {
        if (action.payload) {
          const indexSection = findIndexElement(state.sections, action.payload.id)
          state.sections[indexSection].name = action.payload.name
        }
      },
    )
  },
})

export const { setCurrentSectionAC } = mainSlice.actions
export const sectionsReducer = mainSlice.reducer

// types
export type SectionType = {
  id: number
  name: string
}

export type SectionsInitialStateType = {
  sections: SectionType[]
  defaultSection: SectionType
  activeSectionId: number
}
