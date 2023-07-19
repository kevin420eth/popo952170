import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './enviromentslideshow.css'

import enviroment_0 from '../../../assets/enviroment_0.png'
import enviroment_1 from '../../../assets/enviroment_1.png'
import enviroment_2 from '../../../assets/enviroment_2.png'
import enviroment_3 from '../../../assets/enviroment_3.png'
import enviroment_4 from '../../../assets/enviroment_4.png'
import enviroment_5 from '../../../assets/enviroment_5.png'
import enviroment_6 from '../../../assets/enviroment_6.png'
import enviroment_7 from '../../../assets/enviroment_7.png'
import enviroment_8 from '../../../assets/enviroment_8.png'
import enviroment_9 from '../../../assets/enviroment_9.png'
import enviroment_10 from '../../../assets/enviroment_10.png'
import enviroment_11 from '../../../assets/enviroment_11.png'

const EnviromentSlideShow = () => {
    return (
        <Swiper
            className='enviroment__swiper'
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
        >
            <SwiperSlide><img src={enviroment_0} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={enviroment_11} alt="" /></SwiperSlide>
        </Swiper>
    )
}

export default EnviromentSlideShow