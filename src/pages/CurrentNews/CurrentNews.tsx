import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments' // todo решить вопрос о их необходимости с Сергеем
import style from './CurrentNews.module.scss'
import { NewsBody } from './NewsBody/NewsBody'

import { Footer, MobileNavigation, Navigation, PopularNewsPreview } from 'components'
import { selectCurrentNews, selectPartSearchNews } from 'store/selectors'
import { selectIsLogin } from 'store/selectors/login'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC, getNewsByIdTC, getPopularNewsTC } from 'store/thunks'

const CurrentNews: FC = () => {
  const dispatch = useAppDispatch()

  const currentNews = useSelector(selectCurrentNews)

  const popularNews = useSelector(selectPartSearchNews) // пока редьюсер свободен туда сетаются популярные новости
  const isAdmin = useSelector(selectIsLogin)

  useEffect(() => {
    dispatch(getPopularNewsTC())
  }, [])

  const setCurrentNews = (newsId: number): void => {
    const currentNewsItem = popularNews.find(item => item.id === newsId)

    if (currentNewsItem) {
      dispatch(getNewsByIdTC.fulfilled(currentNewsItem, '', currentNewsItem.id))
    }

    dispatch(addNewsViewsValueTC(newsId))
  }

  return (
    <div className={style.container}>
      <MobileNavigation />
      <div className={style.bodyContainer}>
        <Navigation />
        <div className={style.body}>
          <NewsBody news={currentNews} isAdmin={isAdmin} />
          <PopularNewsPreview news={popularNews} setCurrentNews={setCurrentNews} />
        </div>
        <Comments newsId={currentNews.id} />
        <Footer />
      </div>
    </div>
  )
}

export default CurrentNews
