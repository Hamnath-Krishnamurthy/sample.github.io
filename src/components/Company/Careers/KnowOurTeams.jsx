import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperArrow from '../../../assets/careers/swiperArrows.svg'
import V from '../../../assets/logos/V.svg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import "swiper/css/navigation";
import { Navigation, Grid } from 'swiper'
import { careers } from '../../Data/mockdata'
import PopUpModal from '../../PopUpModal/PopUpModal'


const KnowOurTeams = () => {
  const { knowOurTeams } = careers
  const [swiper, setSwiper] = useState()
  const prevRef = React.useRef()
  const nextRef = React.useRef()
  const [initial,setInitial] = useState(0)
  const [renderModal,setRenderModal] = useState(false)

  const handleClick =(id)=>{
    setInitial(id)
    setRenderModal(true)
  }

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiper])

  return (
    <section className='bg-primary knowOurTeam'>
      <img src={V} className='imgfluid knowOurTeam__V' alt=''/>
      <div className='container'>
        <p className='text-white fnt-600 fnt-48'>Get to know our team</p>
        <div className='row'>
          <div className='col-lg-6'>
            <p className='fnt-400 fnt-16 text-white w-75'>
              Stay constantly inspired by working alongside creative,
              collaborative and passionate colleagues.
            </p>
          </div>
          <div className='col-lg-6 d-flex justify-content-end'>
            <div className='d-flex SwiperButton justify-content-around'>
                <div>
                    <img alt='' className='imgfluid swiper-button cursor-pointer' ref={prevRef} src={SwiperArrow} />
                </div>
                <div>
                    <img alt='' className='imgfluid rotate-180 swiper-button cursor-pointer' ref={nextRef} src={SwiperArrow} />
                </div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <Swiper
            slidesPerView={2}
            grid={{
              rows: 3,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                grid : {
                  rows : 2
                }
              },
            }}
            spaceBetween={30}
            pagination={false}
            modules={[Grid, Navigation]}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            className='KnowOurTeamsSlider'
            onSwiper={setSwiper}
          >
            {knowOurTeams.map((data, index) => (
              <SwiperSlide>
                
                <div className='d-flex'
                   data-bs-toggle='modal'
                   data-bs-target='#knowOurTeam'
                   onClick={(e) => {
                     e.persist()
                     handleClick(index)
                   }} 
                >

                  <img className='imgfluid' src={data.img} alt='' type='button' />
                     
                </div>
                <p className='fnt-20 fnt-500 text-white mt-3 mb-2'>
                  {data.name}
                </p>
                <p className='fnt-16 fnt-400 text-white'>{data.designation}</p>
                
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>
      <>
              <PopUpModal id={'knowOurTeam'} start={initial} renderModal={renderModal} data={knowOurTeams}  />
            </>
    </section>
  )
}

export default KnowOurTeams
