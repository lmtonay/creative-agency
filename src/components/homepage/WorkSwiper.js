import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import carousel4 from '../../images/carousel-4.png';
import carousel5 from '../../images/carousel-5.png';

export default function WorkSwiper() {
  return (
    <>
      <Swiper slidesPerView={2} loop={true} spaceBetween={30} className="mySwiper">
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