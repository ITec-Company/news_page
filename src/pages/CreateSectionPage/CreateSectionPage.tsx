import { FC, useCallback } from 'react'

import { useSelector } from 'react-redux'

import style from './CreateSectionPage.module.scss'

import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Path } from 'enums/enums'
import { Section } from 'pages/CreateSectionPage/Section/Section'
import { NewSectionForm } from 'pages/CreateSectionPage/SectionForm/NewSectionForm'
import { SectionType } from 'store/reducers/sections_reducer'
import { selectorSections } from 'store/selectors/sections'
import { useAppDispatch } from 'store/store'
import {
  changeSectionTC,
  deleteSectionTC,
  postSectionsTC,
} from 'store/thunks/sections_thunks'

export const CreateSectionPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectorSections)

  const sectionsId = sections.map(section => section.id)

  const postSection = useCallback((section: SectionType): void => {
    dispatch(postSectionsTC(section.name))
  }, [])

  const changeSection = useCallback((section: SectionType): void => {
    dispatch(changeSectionTC(section))
  }, [])

  const deleteSection = useCallback((id: number): void => {
    dispatch(deleteSectionTC(id))
  }, [])

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <div className={style.body}>
        <div>
          <div className={style.create}>
            <span>создать</span>
            <NewSectionForm mode="add" setSectionData={postSection} />
          </div>
          <div className={style.create}>
            <span>редактировать</span>
            <NewSectionForm
              mode="edit"
              setSectionData={changeSection}
              sectionsId={sectionsId}
            />
          </div>
        </div>
        <div className={style.list}>
          <span>все секции:</span>
          {sections.map(section => (
            <Section key={section.id} section={section} deleteSection={deleteSection} />
          ))}
        </div>
      </div>
    </div>
  )
}