import { FC } from 'react'

import style from './SectionButton.module.scss'

import { ButtonCommonType } from 'store/types'

type SectionButtonPropsType = ButtonCommonType & {
  isActive: boolean
}

export const SectionButton: FC<SectionButtonPropsType> = ({
  name,
  isActive,
  ...props
}) => (
  <button
    type="button"
    className={`${style.container} ${isActive && style.active}`}
    {...props}
  >
    {name}
  </button>
)
