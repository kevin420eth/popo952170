import React from 'react'
import Header from '../../Header/Header'

import './cases.css'

import case_0 from '../../../assets/case_0.png'
import case_1 from '../../../assets/case_1.png'
import case_2 from '../../../assets/case_2.png'
import case_3 from '../../../assets/case_3.png'
import case_4 from '../../../assets/case_4.png'
import case_5 from '../../../assets/case_5.png'
import case_10 from '../../../assets/case_10.png'

const Cases = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className='cases__main__section section'>
        <div className='spotlight__container'>
          <a href="https://google.com" className='main__spotlight__container shadow'>
            <img src={case_10} alt="" className='main__spotlight__imgae' />
          </a>
          <div className='sub__spotlight__container'>
            <a href="https://google.com" className='sub__spotlight__flagment shadow'>
              <img src={case_4} alt="" className='sub__spotlight__flagment__image' />
            </a>
            <a href="https://google.com" className='sub__spotlight__flagment'>
              <img src={case_5} alt="" className='sub__spotlight__flagment__image' />
            </a>
          </div>
        </div>
      </section>
      <section className='cases__section section'>
        <a href="https://google.com" className='model__container shadow'>
          <img src={case_3} alt="" className='model__image' />
        </a>
        <a href="https://google.com" className='model__container shadow'>
          <img src={case_1} alt="" className='model__image' />
        </a>
        <a href="https://google.com" className='model__container shadow'>
          <img src={case_2} alt="" className='model__image' />
        </a>
      </section>
    </div>
  )
}

export default Cases