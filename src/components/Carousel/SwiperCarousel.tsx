import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from '../../assets/banner2.jpg';
import banner2 from '../../assets/banner1.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';

const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default SwiperCarousel;