import { createAsyncThunk } from '@reduxjs/toolkit'

import { NewsPayloadType, newsRequests } from 'api'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { RootState } from 'store/store'
import { getNewsByIdTC } from 'store/thunks/news_thunks'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const updateNewsTC = createAsyncThunk(
  'current_news/updateNewsTC',
  async (news: NewsPayloadType, { dispatch, getState }) => {
    const {
      currentNews: { currentNews },
      login: { token },
    } = getState() as RootState

    try {
      dispatch(setIsLoadingStatusAC(true))
      const { status } = await newsRequests.updateNews(news, currentNews.id, token)
      if (status === StatusCode.UPDATE_NEWS_SUCCESS) {
        dispatch(
          getNewsByIdTC.fulfilled({ ...currentNews, ...news.body }, '', currentNews.id),
        )
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
