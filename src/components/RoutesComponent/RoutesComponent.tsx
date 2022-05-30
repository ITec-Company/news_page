import { FC } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Path } from 'enums/enums'
import { CreateNewsPage, CreateSectionPage, CurrentNews, MainPage } from 'pages'
import { ChangeNewsPage } from 'pages/ChangeNewsPage/ChangeNewsPage'

export const RoutesComponent: FC = () => (
  <Routes>
    <Route path={Path.DEFAULT} element={<Navigate to={Path.MAIN} />} />
    <Route path={Path.MAIN} element={<MainPage />} />
    <Route path={Path.CURRENT_NEWS} element={<CurrentNews />} />
    <Route path={Path.CREATE_NEWS} element={<CreateNewsPage />} />
    <Route path={Path.CREATE_SECTION} element={<CreateSectionPage />} />
    <Route path={Path.CHANGE_NEWS} element={<ChangeNewsPage />} />
  </Routes>
)
