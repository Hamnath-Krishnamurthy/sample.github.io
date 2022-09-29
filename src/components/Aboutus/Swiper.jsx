import React from "react";
import awards_img from "../../assets/Banner/awrds_img.png";
import awards_2 from "../../assets/Banner/award_2.svg";
import awards_3 from "../../assets/Banner/award_3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import contact_vec from "../../assets/logos/Cont-vec.svg";

import "./About.scss";

const SwiperData = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className} ><svg width="50" height="4" viewBox="0 0 50 4" xmlns="http://www.w3.org/2000/svg">
      <defs>
      <linearGradient id="half">
        <stop offset="0%" stop-color="#2d3577" />
        <stop offset="60%" stop-color="#2d3577" />
        <stop offset="60%" stop-color="white" />

      </linearGradient>
    </defs>
      <rect  width="50" height="4" fill="#EFEFEF"/>
      </svg> </span>`;
    },
  };
  return (
    <div className="container mt-5 mb-5">
      {/* <div className="position-absolute swip-img">
        <img src={contact_vec} alt="" />
      </div> */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: `swiper-container swiper-container-testClass .swiper-pagination`,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
          pagination,
        }}
        speed={500}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={awards_img} className="img-fluid w-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={awards_2} className="img-fluid w-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={awards_3} className="img-fluid w-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={awards_img} className="img-fluid w-auto" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperData;
