import React from 'react'
import './about.css'
import about from '../../../assets/about.png'

const About = () => {
    return (
        <section className='home__about__section section'>
            <div className='home__about__container'>
                <div className='home__about__text__container'>
                    <h1 className='home__about__title section__title'>澄臻美學牙醫診所</h1>
                    <p className='home__about__text'>澄臻美學牙醫診所是一家專注於提供高品質美學牙醫服務的診所。無論您是需要修復破損的牙齒、改善牙齒排列或想要美白您的微笑，他們的專業團隊將為您提供全面的解決方案。澄臻美學牙醫診所以其專業知識、先進技術和注重細節的服務而聞名。他們的團隊由經驗豐富的牙醫師和專業技術人員組成，致力於提供卓越的治療和舒適的病患體驗。</p>
                </div>

                <div className='home__about__image__container'>
                    <img src={about} alt="" className='home__about__image' />
                </div>
            </div>
        </section>

    )
}

export default About