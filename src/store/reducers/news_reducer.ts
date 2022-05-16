import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  addNewsViewsValueTC,
  deleteNewsTC,
  getNewsByIdTC,
  getNewsPartTC,
} from 'store/thunks/news_thunks'
import { NewsType } from 'store/types/news_type'
import { findIndexElement } from 'utils/utils'

export type CommentType = {
  id: number
  author: string
  text: string
  news_id: number
  date: string
}

export type NewsInitialStateType = {
  news: NewsType[]
  currentNews: NewsType
}

export const initialState: NewsInitialStateType = {
  news: [
    {
      id: 0,
      name: '',
      subtitle_1: '',
      fullText_1: '',
      image_1: '',
      subtitle_2: '',
      fullText_2: '',
      image_2: '',
      fullText_3: '',
      image_3: '',
      link: '',
      date: '',
      subtitle_3: '',
      section: 0,
      views: 0,
    },
  ],
  currentNews: {
    id: 0,
    name: '',
    subtitle_1: '',
    fullText_1: '',
    image_1: '',
    subtitle_2: '',
    fullText_2: '',
    image_2: '',
    fullText_3: '',
    image_3: '',
    link: '',
    date: '',
    subtitle_3: '',
    section: 0,
    views: 0,
  },
}

export const mainSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCurrentNewsAC: (state, action: PayloadAction<number>) => {
      const currentNews = state.news.find(item => item.id === action.payload)
      if (currentNews) {
        state.currentNews = currentNews
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getNewsPartTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = action.payload
      }
    })
    builder.addCase(deleteNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = state.news.filter(comment => comment.id !== action.payload)
      }
    })
    builder.addCase(addNewsViewsValueTC.fulfilled, (state, action) => {
      if (action.payload) {
        const indexElement = findIndexElement(state.news, action.payload)
        state.news[indexElement].views += 1
      }
    })
    builder.addCase(getNewsByIdTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news.push(action.payload)
      }
    })
  },
})

export const { setCurrentNewsAC } = mainSlice.actions
export const newsReducer = mainSlice.reducer
