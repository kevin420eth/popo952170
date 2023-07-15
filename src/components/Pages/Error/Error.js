import { useRouteError } from "react-router-dom";
import './error.css'
import { PiTooth } from 'react-icons/pi'
import { AiOutlineHome } from 'react-icons/ai'
import Header from '../../Header/Header'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="error__page">
        <h1 className="error__title">Oops!<span><PiTooth /></span></h1>
        <p className="error__message">頁面不存在或發生錯誤</p>
        <a href="/" className="back__to__home__button">回首頁 <AiOutlineHome /></a>
      </div>
    </div>
  )
}