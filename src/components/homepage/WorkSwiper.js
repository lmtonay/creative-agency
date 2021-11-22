import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, {
  EffectCoverflow
} from 'swiper';
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import carousel4 from '../../images/carousel-4.png';
import carousel5 from '../../images/carousel-5.png';
SwiperCore.use([EffectCoverflow]);

export default function WorkSwiper() {
  return (
    <>
      <Swiper effect={'coverflow'} loop={true} slidesPerView={3} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
      }} breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }} className="mySwiper">
        <SwiperSlide>
          <img src={carousel1} alt="Example 1" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Example 2" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="Example 3" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt="Example 4" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel5} alt="Example 5" width="100%" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}