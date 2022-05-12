import { FC } from 'react'

import { SearchButton } from '../SearchButton/SearchButton'

import style from './Navigation.module.scss'

import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Path } from 'enums/enums'

export const paths: string[] = ['Всё', 'ITEC', 'Разделы']

export const Navigation: FC = () => (
  <div className={style.main}>
    <div className={style.container}>
      {paths.map(path => (
        <div key={path} className={style.path}>
          {path}
        </div>
      ))}
      <NavLinkComponent nameButton="создать секцию" path={Path.CREATE_SECTION} />
    </div>
    <SearchButton />
  </div>
)
