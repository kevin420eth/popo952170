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
import enviroment_12 from '../../../assets/enviroment_12.png'
import enviroment_13 from '../../../assets/enviroment_13.png'
import enviroment_14 from '../../../assets/enviroment_14.png'
import enviroment_15 from '../../../assets/enviroment_15.png'
import enviroment_16 from '../../../assets/enviroment_16.png'

const EnviromentSlideShow = () => {
    return (
        <Swiper
            className='enviroment__swiper'
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>{enviroment_0}</SwiperSlide>
            <SwiperSlide>{enviroment_1}</SwiperSlide>
            <SwiperSlide>{enviroment_2}</SwiperSlide>
            <SwiperSlide>{enviroment_3}</SwiperSlide>
        </Swiper>
    )
}

export default EnviromentSlideShow