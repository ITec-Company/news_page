import style from 'pages/MainPage/MainPage.module.scss'
import {Navigation} from "components/Navigation/Navigation";
import {NewsContainer} from "components/NewsContainer/NewsContainer";
import {FC} from "react";
import {Footer} from "components/Footer/Footer";
import {SinglePagination} from "components/SinglePagination/SinglePagination";
import {CreatePageNavigate} from "components/CreatePageNavigate/CreatePageNavigate";


export const MainPage: FC = () => {

  return (
    <div className={style.container}>
      <div className={style.header}>НОВОСТИ - текст</div>
      <Navigation/>
      <CreatePageNavigate/>
      <NewsContainer/>
      <SinglePagination/>
      <Footer/>
    </div>
  )
}