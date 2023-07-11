import React from 'react'
import './services.css'
import Navbar from '../../Header/Navbar/Navbar'
import banner from '../../../assets/banner.png'
import serviceData from './servicesData'

const Services = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className='banner__container'>
        <img src={banner} alt="" />
      </div>
      <section className='services__section'>
        <p className='services__section__title'>診療項目</p>
        <div className='services__container'>
          {serviceData.map((item, key) => {
            return (
              <a href={`/services/${item.route}`} className='service__showcase' key={key}>
                <div className='showcase__image__container'>
                  <img src={item.serviceImage} alt="showcase__image" className='showcase__image' />
                </div>
                <div className='showcase__text__container'>
                  <p className='service__name'>{item.serviceName}</p>
                  <p className='service__short__description'>{item.serviceShortDescription}</p>
                  <a href='https://google.com' className='service__checkmore__button'>查看更多</a>
                </div>
              </a>
            )
          })}

        </div>
      </section>

    </div>
  )
}

export default Services