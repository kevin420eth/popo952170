import React from 'react'
import banner from '../../../assets/banner.png'
import Header from '../../Header/Header'

const Cases = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='banner__container'>
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Cases