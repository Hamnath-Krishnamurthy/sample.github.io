import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from "swiper";
import "./About.scss";
import awards_img from "../../assets/Banner/awrds_img.png";


const SwiperDemo=()=> {
  return (
    <>
    <section className="bg-primary">
    <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class=${className} ><svg width="30" height="3" viewBox="0 0 50 4" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="half">
              <stop offset="0%" stop-color="#2d3577" />
              <stop offset="60%" stop-color="#2d3577" />
              <stop offset="60%" stop-color="white" />
              
            </linearGradient>            
          </defs>
            <rect  width="30" height="4" fill="#EFEFEF"/>
            </svg> </span>`
          },
        }}
        speed={500}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={awards_img} className="imgfluid w-100 h-100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={awards_img} className="imgfluid w-100 h-100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={awards_img} className="imgfluid w-100 h-100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={awards_img} className="imgfluid w-100 h-100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={awards_img} className="imgfluid w-100 h-100" alt="" />
        </SwiperSlide>
      </Swiper>
      </section>
    </>
  );
}

export default SwiperDemo;