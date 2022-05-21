/* eslint-disable */
import { FC } from 'react'

import style from './NewsBody.module.scss'

import { Button } from 'components'
import { NewsType } from 'store/types'

type NewsBodyPropsType = {
  news: NewsType
  isAdmin: boolean
}

export const NewsBody: FC<NewsBodyPropsType> = ({
  news: {
    date,
    name,
    subtitle_1,
    image_1,
    full_text_1,
    full_text_3,
    subtitle_2,
    full_text_2,
    image_2,
    image_3,
    subtitle_3,
  },
  isAdmin,
}) => (
  <div className={style.container}>
    <div className={style.header}>
      <div>
        <div className={style.date}>{date}</div>
        {isAdmin && <Button name="change" />}
      </div>
      <h1>{name}</h1>
    </div>
    <div className={style.body}>
      <h3>{subtitle_1}</h3>
      <img alt="logo" src={image_1} />
      <div className={style.description}>{full_text_1}</div>
    </div>
    <div className={style.body}>
      <h3>{subtitle_2}</h3>
      {image_2 && <img alt="logo" src={image_2} />}
      <div className={style.description}>{full_text_2}</div>
    </div>
    <div className={style.body}>
      <h3>{subtitle_3}</h3>
      {image_3 && <img alt="logo" src={image_3} />}
      <div className={style.description}>{full_text_3}</div>
    </div>
  </div>
)
