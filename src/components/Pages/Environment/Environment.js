import React from 'react'
import './environment.css'
import Header from '../../Header/Header'
import banner from '../../../assets/banner.png'
import EnviromentSlideShow from './EnviromentSlideShow'

const Environment = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className='banner__container'>
                <img src={banner} alt="" />
            </div>
            <section className='enviroment__section section '>
                <p className='section__title'>診所環境</p>
                <EnviromentSlideShow />
            </section>
        </div>
    )
}

export default Environment