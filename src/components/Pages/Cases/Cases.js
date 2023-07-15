import React from 'react'
import banner from '../../../assets/banner.png'
import Header from '../../Header/Header'

import './cases.css'

import case_0 from '../../../assets/cases_0.png'
import case_10 from '../../../assets/case_10.png'

const Cases = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='banner__container'>
        <img src={banner} alt="" />
      </div>
      <section className='cases__section section'>
        <p >案例回顧</p>
        <div className='cases__showcase__container'>
          <div className='case__showcase'>
            <img src={case_10} alt="" className='case__showcase__image' />
          </div>
          <div className='case__showcase'>
            <img src={case_0} alt="" className='case__showcase__image' />
          </div>
          <div className='case__showcase'>
            <img src={case_0} alt="" className='case__showcase__image' />
          </div>
          <div className='case__showcase'>
            <img src={case_0} alt="" className='case__showcase__image' />
          </div>
        </div>

      </section>
    </div>
      )
    }

export default Cases