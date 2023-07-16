import React from 'react'
import { useParams } from 'react-router-dom'
import './article.css'
import Header from '../../../Header/Header'
import banner from '../../../../assets/banner.png'

const Article = () => {
    const {article} = useParams()

    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='banner__container'>
                <img src={banner} alt="" className='banner__image'/>
            </div>
            <section className='article__section section'>
                {article}
            </section>
        </div>
    )
}

export default Article