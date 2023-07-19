import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../../Header/Header'
import ErrorPage from '../../Error/Error'

import banner from '../../../../assets/banner.png'
import EductionData from '../../../../data/EducationData'

import './article.css'

const Article = () => {
    const { article } = useParams()
    let targetItem = EductionData.find(element => element.route === article);

    if (!targetItem) {
        return (
            <ErrorPage />
        )
    }

    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='banner__container'>
                <img src={banner} alt="" className='banner__image' />
            </div>
            <section className='article__section section '>
                <h1 className='section__title'>{targetItem.title}</h1>
                <div className='article__container'>
                    <div className='article__image__container shadow'>
                        <img src={targetItem.image} alt="" className='article__image' />
                    </div>
                    <div className='artile__text__container'>
                        <p className='article__content'>{targetItem.content}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Article