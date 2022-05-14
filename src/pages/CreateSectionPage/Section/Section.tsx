import { FC } from 'react'

import { Button } from 'components/Button/Button'
import style from 'pages/CreateSectionPage/Section/Section.module.scss'
import { SectionType } from 'store/reducers/sections_reducer'

type SectionPropsType = {
  section: SectionType
  deleteSection: (id: number) => void
}
export const Section: FC<SectionPropsType> = ({ section, deleteSection }) => {
  console.log()

  return (
    <div className={style.container}>
      <div>{section.id}</div>
      <div>{section.name}</div>
      <Button name="удалить" onClick={() => deleteSection(section.id)} />
    </div>
  )
}