import { instance } from 'api/instance'
import { NEWS_ON_PAGE } from 'constants/constants'
import { RequestSource } from 'enums/enums'
import { NewsBodyType, NewsFileType, NewsType } from 'store/types/types'

export type NewsPayloadType = {
  body: NewsBodyType
} & NewsFileType

export const newsRequests = {
  postNews: (news: NewsPayloadType) => {
    const formDataObject = new FormData()

    formDataObject.append('body', JSON.stringify(news.body))
    formDataObject.append('file', news.file)

    return instance.post(`${RequestSource.NEWS}/`, formDataObject, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },

  getNewsPart: (pageNumber: number) =>
    instance.get<{ Data: NewsType[] }>(
      `${RequestSource.NEWS}/?page=${pageNumber}&limit=${NEWS_ON_PAGE}`,
    ),

  deleteNews: (newsId: number) =>
    instance.delete<{ id: number }>(`${RequestSource.NEWS}/${newsId}`),

  addNewsViewsValue: (newsId: number) =>
    instance.patch(`${RequestSource.NEWS}/${newsId}`),
}
