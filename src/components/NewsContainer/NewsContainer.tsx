import style from './NewsContainer.module.scss'
import {News} from "./News/News";
import {useSelector} from "react-redux";
import {currentPageSelector, newsSelector} from "utils/selectors/selectors";
import {FC, useCallback, useEffect} from "react";
import {getNewsTC, setCurrentNewsAC} from "store/news_reducer";
import {useAppDispatch} from "store/store";
import {useNavigate} from "react-router-dom";
import {Paths} from "utils/enums";


export const NewsContainer: FC = () => {

  const news = useSelector(newsSelector)
  const currentPage = useSelector(currentPageSelector)
  const dispatch = useAppDispatch()
  let navigate = useNavigate();

  const currentNews = news[currentPage]

  useEffect(() => {
    dispatch(getNewsTC())
  }, [dispatch])

  const setCurrentNews = useCallback((id: number) => {
    dispatch(setCurrentNewsAC(id))
  }, [dispatch])

  const newsHandler = () => {
    navigate(`/${Paths.CURRENT_NEWS}`);
  }


  return (
    <div className={style.container} onClick={newsHandler}>
      <News data={currentNews} setCurrentNews={setCurrentNews}/>
      {/*{news.map(({id, ...news}) => {*/}
      {/*  return <News key={id} data={news}/>*/}
      {/*})}*/}
    </div>
  );
};
