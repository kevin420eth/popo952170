import React from 'react'
import './service.css'
import Navbar from '../../../Header/Navbar/Navbar'
import banner from '../../../../assets/banner.png'
import { useParams } from 'react-router-dom'
import _servicesData from '../servicesData'

const Service = () => {
  const { serviceName } = useParams();
  const serviceNamePool = ['teethjustify', 'teethfix', 'plant', 'wholemtf', 'teethbeauty', 'kidteeth', 'homedentist', '3d', 'root', 'laser']
  const serviceIndex = serviceNamePool.indexOf(serviceName)
  const serviceData = _servicesData[serviceIndex]

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className='banner__container'>
        <img src={banner} alt="" />
      </div>
      <section className='service__section'>
        <h1>{serviceData.serviceName}</h1>
        <div className='service__container'>
          <div className='service__image__container'>
            <img src={serviceData.serviceImage} alt="" className='service__image' />
          </div>
          <div className='text__container'>
            <p className='service__description'>{serviceData.serviceLongDescription}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service