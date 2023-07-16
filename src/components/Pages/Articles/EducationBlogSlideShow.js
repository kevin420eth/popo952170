import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './educationblogslideshow.css'

import EducationData from './EducationData'

const EducationBlogSlideShow = () => {
    return (
        <>
            <Swiper
                className='education__blog__swiper'
                slidesPerView={3}
                grid={{ rows: 2 }}
                spaceBetween={30}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, pauseOnMouseEnter:true }}
                modules={[Grid, Pagination, Navigation, Autoplay]}
            >
                {EducationData.map((item, key) => {
                    return (
                        <SwiperSlide className='education__blog__swiper__slider' key={key} >
                            <div className='blog__article__image__container'>
                                <img src={item.image} alt="" className='blog__article__image' />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default EducationBlogSlideShow
