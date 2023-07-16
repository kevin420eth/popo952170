import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Grid } from 'swiper/modules'

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
                grid={{rows: 2,}}
                spaceBetween={30}
                navigation={true}
                pagination={{clickable: true}}
                modules={[Grid, Pagination, Navigation]}
            >
                {EducationData.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            {item.title}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default EducationBlogSlideShow
