import { FC } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { CreateNews } from 'pages/CreateNews/CreateNews'
import { CurrentNews } from 'pages/CurrentNews/CurrentNews'
import { MainPage } from 'pages/MainPage/MainPage'
import { Paths } from 'utils/enums'

const App: FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<Navigate to={Paths.MAIN} />} />
      <Route path={Paths.MAIN} element={<MainPage />} />
      <Route path={Paths.CURRENT_NEWS} element={<CurrentNews />} />
      <Route path={Paths.CREATE_NEWS} element={<CreateNews />} />
    </Routes>
  </div>
)

export default App
