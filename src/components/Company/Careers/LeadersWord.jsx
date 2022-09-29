import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Pic1 from '../../../assets/careers/Img-1.svg'

const LeadersWord = () => {
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
          <rect  width="50" height="4" fill="#8F94BB"/>
          </svg> </span>`
    },
  }
  return (
    <div className='bg-sky-200 leaderWords'>
      <div className='container'>
        <p className='fnt-48 text-blue-drk fnt-600'>Leader’s words</p>

        <div className='pt-md-5'>
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
            className='LeadersWordSlider'
          >
            <SwiperSlide>
              <div className='row mt-2 mt-md-0'>
                <div className='col-md-3'>
                    <div className='d-flex justify-content-center'>
                        <img src={Pic1} alt='' className='imgfluid sliderImg' />
                    </div>
                </div>
                <div className='col-md-9 align-self-center'>
                  <p className='fnt-24 fnt-500 txt-primary pt-4 pt-md-0'>
                    “To rive and sustain high growth culture, its not just
                    important to do things well but also continously innovate
                    and improve how things are done”
                  </p>
                  <div className='mt-md-5 mt-4'>
                    <p className='fnt-500 fnt-24 text-black mb-0 fnt-sm-20'>
                      Hari Chandran
                    </p>
                    <p className='fnt-400 fnt-16 txt-black-300'>
                      Vice President - Marketing
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='row mt-2 mt-md-0'>
                <div className='col-md-3'>
                    <div className='d-flex justify-content-center'>
                        <img src={Pic1} alt='' className='imgfluid sliderImg' />
                    </div>
                </div>
                <div className='col-md-9 align-self-center'>
                  <p className='fnt-24 fnt-500 txt-primary pt-4 pt-md-0'>
                    “To rive and sustain high growth culture, its not just
                    important to do things well but also continously innovate
                    and improve how things are done”
                  </p>
                  <div className='mt-md-5 mt-4'>
                    <p className='fnt-500 fnt-24 text-black mb-0 fnt-sm-20'>
                      Hari Chandran
                    </p>
                    <p className='fnt-400 fnt-16 txt-black-300'>
                      Vice President - Marketing
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='row mt-2 mt-md-0'>
                <div className='col-md-3'>
                    <div className='d-flex justify-content-center'>
                        <img src={Pic1} alt='' className='imgfluid sliderImg' />
                    </div>
                </div>
                <div className='col-md-9 align-self-center'>
                  <p className='fnt-24 fnt-500 txt-primary pt-4 pt-md-0'>
                    “To rive and sustain high growth culture, its not just
                    important to do things well but also continously innovate
                    and improve how things are done”
                  </p>
                  <div className='mt-md-5 mt-4'>
                    <p className='fnt-500 fnt-24 text-black mb-0 fnt-sm-20'>
                      Hari Chandran
                    </p>
                    <p className='fnt-400 fnt-16 txt-black-300'>
                      Vice President - Marketing
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default LeadersWord
