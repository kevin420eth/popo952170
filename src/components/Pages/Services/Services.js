import React from 'react'
import { Link } from "react-router-dom"
import './services.css'
import Header from '../../Header/Header'
import banner from '../../../assets/banner.png'
import serviceData from './servicesData'

const Services = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='banner__container'>
        <img src={banner} alt="" />
      </div>
      <section className='services__section section '>
        <p className='section__title'>診療項目</p>

        <div className='services__container'>
          {serviceData.map((item, key) => {
            return (
              <Link to={`/services/${item.route}`} className='services__showcase' key={key}>
                <div className='services__showcase__image__container'>
                  <img src={item.serviceImage} alt="" className='services__showcase__image' />
                </div>
                <div className='services__showcase__text__container'>
                  <p className='services__showcase__service__name'>{item.serviceName}</p>
                  <p className='services__showcase__short__description'>{item.serviceShortDescription}</p>
                </div>
                <button className='services__showcase__button'>查看更多</button>
              </Link>
            )
          })}
        </div>

      </section>

    </div>
  )
}

export default Services