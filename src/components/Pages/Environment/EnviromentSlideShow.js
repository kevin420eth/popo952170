import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './enviromentslideshow.css'

const EnviromentSlideShow = () => {
    return (
        <Swiper
            className='enviroment__swiper'
            navigation={true}
            // pagination={{clickable: true}}
            pagination={true}
            autoplay={{delay: 2500, disableOnInteraction: false}}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}

export default EnviromentSlideShow