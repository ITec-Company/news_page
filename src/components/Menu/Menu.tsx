import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Menu.module.scss'

import { changeIsAdminModeAC } from 'store/reducers'
import { selectorIsAdminMode } from 'store/selectors'
import { useAppDispatch } from 'store/store'

export const Menu: FC = () => {
  const isAdmin = useSelector(selectorIsAdminMode)
  const dispatch = useAppDispatch()

  const switchIsAdminMode = (): void => {
    if (isAdmin) {
      dispatch(changeIsAdminModeAC(false))
    } else {
      dispatch(changeIsAdminModeAC(true))
    }
  }
  return (
    <div className={style.container}>
      <div>МЕНЮ</div>
      <div>новости</div>
      <h4>режим админа:</h4>
      <input type="checkbox" onClick={switchIsAdminMode} />
    </div>
  )
}
