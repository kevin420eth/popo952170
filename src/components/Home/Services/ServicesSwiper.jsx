import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './servicesSwiper.css'

const ServicesSwiper = () => {
    return (
        <Swiper
            className="home__services__swiper"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, pauseOnMouseEnter:true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>

            <SwiperSlide className='home__services__slide shadow'>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
        </Swiper>
    )
}

export default ServicesSwiper