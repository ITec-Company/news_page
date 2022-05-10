import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './CurrentNews.module.scss'

import { MainPageNavigate } from 'components/MainPageNavigate/MainPageNavigate'
import { Comments } from 'pages/CurrentNews/Comments/Comments'
import { NewsPreview } from 'pages/CurrentNews/NewsPreview/NewsPreview'
import { currentNewsSelector } from 'utils/selectors'

export const CurrentNews: FC = () => {
  const news = useSelector(currentNewsSelector)

  return (
    <div className={style.container}>
      <div>{`HOME -------------> Новости -------------> ${news.name}`}</div>
      <MainPageNavigate />
      <img alt="logo" src={news.image_1} />
      <h3>{news.name}</h3>
      <div>{`количество просмотров: ${news.views}`}</div>
      <div>{`дата публикации: ${news.date}`}</div>
      <div className={style.description}>{news.fullText_1}</div>
      <div>
        <h4>Больше интересных новостей:</h4>
        <NewsPreview />
        <NewsPreview />
      </div>
      <Comments newsId={news.id} />
    </div>
  )
}
