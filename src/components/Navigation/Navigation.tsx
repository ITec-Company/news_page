import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Navigation.module.scss'

import {
  FIRST_ARRAY_ITEM,
  SECOND_ARRAY_ITEM,
  THIRD_ARRAY_ITEM,
} from 'components/Footer/Footer'
import { SearchField } from 'components/SearchField'
import { SectionButton } from 'components/SectionButton/SectionButton'
import {
  DEFAULT_FIRST_COUNT_SECTIONS,
  NEWS_BY_SEARCHING,
  NEWS_BY_SECTIONS,
} from 'constants/constants'
import { changeNewsTypeViewAC, setCurrentSectionAC, setFirstPageAC } from 'store/reducers'
import { selectIdActiveSection, selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { getPopularNewsTC, getSearchNewsTC } from 'store/thunks'

export const Navigation: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectSections)
  const activeSection = useSelector(selectIdActiveSection)

  const isActiveStyle = (id: number): boolean => id === activeSection

  const setCurrentSection = (sectionId: number): void => {
    dispatch(setCurrentSectionAC(sectionId))
    dispatch(changeNewsTypeViewAC(NEWS_BY_SECTIONS))
    dispatch(setFirstPageAC())
  }

  const setPopularNews = (sectionId: number): void => {
    dispatch(setCurrentSectionAC(sectionId))
    dispatch(getPopularNewsTC())
    dispatch(setFirstPageAC())
  }

  const getNewsByKeyWord = (keyWord: string): void => {
    dispatch(getSearchNewsTC(keyWord))
    dispatch(changeNewsTypeViewAC(NEWS_BY_SEARCHING))
  }

  const ALL_SECTION = sections[FIRST_ARRAY_ITEM]
  const POPULAR_SECTION = sections[SECOND_ARRAY_ITEM]
  const ITEC_SECTION = sections[THIRD_ARRAY_ITEM]
  const OTHER_SECTION = sections[SECOND_ARRAY_ITEM]

  const copySections = [...sections]

  const defaultFirstSections = copySections.splice(
    FIRST_ARRAY_ITEM,
    DEFAULT_FIRST_COUNT_SECTIONS,
  )

  const otherSection = copySections.pop()

  return (
    <div className={style.main}>
      <div className={style.container}>
        <SectionButton
          isActive={isActiveStyle(ALL_SECTION.id)}
          name={ALL_SECTION.name}
          onClick={() => setCurrentSection(ALL_SECTION.id)}
        />
        {POPULAR_SECTION && (
          <SectionButton
            isActive={isActiveStyle(POPULAR_SECTION.id)}
            name={POPULAR_SECTION.name}
            onClick={() => setPopularNews(POPULAR_SECTION.id)}
          />
        )}
        {ITEC_SECTION && (
          <SectionButton
            isActive={isActiveStyle(ITEC_SECTION.id)}
            name={ITEC_SECTION.name}
            onClick={() => setCurrentSection(ITEC_SECTION.id)}
          />
        )}

        <select onChange={e => setCurrentSection(Number(e.currentTarget.value))}>
          {copySections.map(({ name, id }) => (
            <option key={id} onClick={() => setCurrentSection(id)} value={id}>
              {name}
            </option>
          ))}
        </select>
        {otherSection && (
          <SectionButton
            name={otherSection.name}
            isActive={isActiveStyle(otherSection.id)}
            onClick={() => setCurrentSection(otherSection.id)}
          />
        )}
      </div>
      <SearchField getNewsByKeyWord={getNewsByKeyWord} />
    </div>
  )
}
