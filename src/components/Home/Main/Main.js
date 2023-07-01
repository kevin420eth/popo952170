import React from 'react'
import './main.css'
import home_logo from '../../../assets/logo.png'

const Main = () => {
  return (
    <section className='home__section'>
      <img src={home_logo} alt="" className='home__logo'/>
      <p className='home__title'>匠心之道載彩繪，精雕細琢石成金</p>
      <p className='home__description'>完美的笑容，從澄臻美學開始</p>
      
    </section>
  )
}

export default Main