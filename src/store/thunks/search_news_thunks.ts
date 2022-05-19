import { createAsyncThunk } from '@reduxjs/toolkit'

import { newsRequests } from 'api/newsRequests'
import { StatusCode } from 'enums/enums'
import { ResponseErrorType } from 'store/types/response_error_type'
import { setError } from 'utils/utils'

export const getNewsByKeyWordTC = createAsyncThunk(
  'search_news/getNewsByKeyWordTC',
  async (keyWord: string, { dispatch }) => {
    try {
      const {
        data: { Data },
        status,
      } = await newsRequests.getNewsByKeyWord(keyWord)

      if (status === StatusCode.GET_NEWS_SUCCESS) {
        return Data
      }

      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)
