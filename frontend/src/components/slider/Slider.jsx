import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';

import './Slider.scss';

const Slider = (props) => {
   return (
      <div className='slider'>
         <Swiper
            navigation
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            loop
            speed={800}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            className='slider-wrapper'
         >
            {props.imgs.map((elem, x) => {
               return (
                  <SwiperSlide className='images' key={x}>
                     <img src={elem} alt='' />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};

export default Slider;
