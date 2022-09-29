import React from 'react'
import V from '../../../assets/logos/V.svg'
import Pic1 from '../../../assets/careers/StackedPic1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards, Autoplay, Pagination } from 'swiper'
const Culture = () => {
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
    <section className='mb-md-5 launch' id='navbar-example2'>
      <img alt='' src={V} className='imgfluid launchV' />
      <div className='container'>
        <div className='row'>
          <div className='mt-md-5 mb-160 mb-3 col-12 launchPecto'>
            <p className='fnt-600 fnt-48 text-blue-drk text-center mb-3'>
              Launch your career with PECTO
            </p>
            <p className='fnt-400 fnt-24 txt-black text-center'>
              Join our team and help shape the future of Anime!
            </p>
            <div className='d-flex justify-content-center'>
              <a
                href='#openings'
                className='btn btn-pri text-uppercase d-flex justify-content-center align-items-center'
              >
                view openings
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='pe-md-5'>
              <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={pagination}
              speed={500}
              navigation={false}
              effect={'cards'}
              grabCursor={false}
              modules={[EffectCards,Autoplay,Pagination]}
              className='StackedSlider'
              initialSlide={1}
            >
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Pic1} alt='' className='imgfluid' />
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
          <div className='col-md-6'>
            <p className='fnt-600 fnt-48 text-blue-drk mt-3 mt-md-0'>Our working culture</p>
            <p className='text-mild-black fnt-400 fnt-16 mb-4'>
              We’re a diverse team on a mission to help innovators change the
              way money moves. We value community and each other. Our work
              environment reflects our priorities, and we strive to learn, grow,
              connect, and create every day. Working here means diving into
              challenging career opportunities in a respectful and encouraging
              environment.
            </p>
            <p className='text-mild-black fnt-400 fnt-16 mb-4'>
              Collectively, we’re engineers, data scientists, payments
              specialists and developers—focusing our no-limits approach to
              opportunities in fintech and payments to create innovative
              solutions that drive our clients’ success.
            </p>
            <p className='text-mild-black fnt-400 fnt-16'>
              If you’re the best of the best in your field and have what it
              takes to be one of us, we want to talk to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Culture
