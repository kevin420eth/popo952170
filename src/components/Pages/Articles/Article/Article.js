import React from 'react'
import './article.css'
import Header from '../../../Header/Header'
import banner from '../../../../assets/banner.png'

const Article = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='banner__container'>
                <img src={banner} alt="" className='banner__image'/>
            </div>
            <section className='article__section section'>
                hi
            </section>
        </div>
    )
}

export default Article