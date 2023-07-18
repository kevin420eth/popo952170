import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../Header/Header'
import EducationBlogSlideShow from './EducationBlogSlideShow'

import './articles.css'

import case_1 from '../../../assets/case_1.png'
import case_2 from '../../../assets/case_2.png'
import case_3 from '../../../assets/case_3.png'
import case_4 from '../../../assets/case_4.png'
import case_5 from '../../../assets/case_5.png'
import case_10 from '../../../assets/case_10.png'

const Articles = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className='articles__main__section section '>
        <div className='spotlight__container'>
          <Link to="/articles/article_10" className='main__spotlight__container shadow'>
            <img src={case_10} alt="" className='main__spotlight__imgae' />
          </Link>
          <div className='sub__spotlight__container'>
            <Link to="/articles/article_4" className='sub__spotlight__flagment shadow'>
              <img src={case_4} alt="" className='sub__spotlight__flagment__image' />
            </Link>
            <Link to="/articles/article_5" className='sub__spotlight__flagment'>
              <img src={case_5} alt="" className='sub__spotlight__flagment__image' />
            </Link>
          </div>
        </div>
      </section>

      <section className='articles__model__section section'>
        <h1 className='section__title'>案例分享</h1>
        <div className='articles__model__container'>
          <Link to="/articles/article_3" className='model__container shadow'>
            <img src={case_3} alt="" className='model__image' />
          </Link>
          <Link to="/articles/article_1" className='model__container shadow'>
            <img src={case_1} alt="" className='model__image' />
          </Link>
          <Link to="/articles/article_2" className='model__container shadow'>
            <img src={case_2} alt="" className='model__image' />
          </Link>
        </div>

      </section>

      <section className='articles__education__section section '>
        <h1 className='section__title'>精選文章</h1>
        <div className='article__education__container'>
          <EducationBlogSlideShow />
        </div>
      </section>
    </div>
  )
}

export default Articles