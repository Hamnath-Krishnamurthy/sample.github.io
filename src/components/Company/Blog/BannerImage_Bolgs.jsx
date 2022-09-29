import React from "react";
import BannerV from "../../../assets/Banner/Banner_v.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export const BannerImage_Blogs = () => {
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
    <>
      <div className="row flex-lg-wrap d-none d-lg-flex mt-3">
        <div className="col-lg-8">
          <div>
            <div className="position-relative cursor-pointer banner-img-1 rounded-top-left">
              <button className="btn btn-md btn-orange fnt-14 fnt-700 rounded-pill txt-white position-absolute start-1 top-1 ">
                Engineering & APIs
              </button>
              <div className="d-flex px-md-3 w-95 justify-content-between position-absolute bottom-1 start-1">
                <article className="max-width-250 ">
                  <span className="txt-white fnt-16">9 June 2022 4:14 PM</span>
                  <p className="text-white fnt-500 fnt-24 mt-2">
                    Industry experts in digital payments
                  </p>
                </article>
                <img src={BannerV} className="img-fluid banner-logo" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row h-100 flex-nowrap flex-lg-wrap align-content-md-between">
            <div className="position-relative cursor-pointer banner-img-2 rounded-top-right">
              {/* <img src={Banner2} className='img-fluid' alt='' /> */}
              <button className="btn btn-md btn-orange fnt-14 fnt-700 rounded-pill txt-white position-absolute start-0-5 top-1 ">
                Business
              </button>
              <div className="d-flex px-md-2 w-95 justify-content-between position-absolute bottom-1">
                <article className="max-width-250 ">
                  <span className="txt-white fnt-16">9 June 2022 4:14 PM</span>
                  <p className="text-white fnt-500 fnt-24 mt-2">
                    Industry experts in digital payments
                  </p>
                </article>
                <img
                  src={BannerV}
                  className="img-fluid me-2 banner-logo"
                  alt=""
                />
              </div>
            </div>
            <div className="position-relative cursor-pointer banner-img-3 ms-3 ms-md-0 rounded-bottom-right">
              {/* <img src={Banner3} className='img-fluid ' alt='' /> */}
              <button className="btn btn-md btn-orange fnt-14 fnt-700 rounded-pill txt-white position-absolute start-0-5 top-1 ">
                Business
              </button>
              <div className="d-flex px-md-2 justify-content-between position-absolute bottom-1">
                <article className="w-60">
                  <span className="txt-white fnt-16">9 June 2022 4:14 PM</span>
                  <p className="text-white fnt-500 fnt-24 mt-2">
                    Industry experts in digital payments
                  </p>
                </article>
                <img
                  src={BannerV}
                  className="img-fluid me-2 banner-logo"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          speed={500}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="position-relative cursor-pointer banner-img-1 rounded-top-left">
              <button className="btn btn-md btn-orange fnt-14 fnt-700 rounded-pill txt-white position-absolute start-1 top-1 ">
                Finance
              </button>
              <div className="d-flex px-md-3 w-95 justify-content-between position-absolute bottom-1 start-1">
                <article className="max-width-250 ">
                  <span className="txt-white fnt-16">9 June 2022 4:14 PM</span>
                  <p className="text-white fnt-500 fnt-24 mt-2">
                    Industry experts in digital payments
                  </p>
                </article>
                <img src={BannerV} className="img-fluid banner-logo" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative cursor-pointer banner-img-2 rounded-top-right">
              {/* <img src={Banner2} className='img-fluid' alt='' /> */}
              <button className="btn btn-md btn-orange fnt-14 fnt-700 rounded-pill txt-white position-absolute start-0-5 top-1 ">
                Business
              </button>
              <div className="d-flex px-3 w-95 justify-content-between position-absolute bottom-1">
                <article className="max-width-250 ">
                  <span className="txt-white fnt-16">9 June 2022 4:14 PM</span>
                  <p className="text-white fnt-500 fnt-24 mt-2">
                    Know your customer (KYC): the need for authentication
                  </p>
                </article>
                <img src={BannerV} className="img-fluid banner-logo" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative cursor-pointer banner-img-3 ms-md-0 rounded-bottom-right">
              {/* <img src={Banner3} className='img-fluid ' alt='' /> */}
              <button className="btn btn-md btn-orange fnt-14 fnt-700 rounded-pill txt-white position-absolute start-0-5 top-1 ">
                Payments
              </button>
              <div className="d-flex px-3 justify-content-between position-absolute bottom-1">
                <article className="w-76">
                  <span className="txt-white fnt-16">9 June 2022 4:14 PM</span>
                  <p className="text-white fnt-500 fnt-24 mt-2">
                    Prepaid cards 101- a definitive guide for growth and
                    profitability
                  </p>
                </article>
                <img src={BannerV} className="img-fluid banner-logo" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
