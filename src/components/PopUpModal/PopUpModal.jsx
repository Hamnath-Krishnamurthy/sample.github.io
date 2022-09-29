import React, { useState, useEffect } from 'react'
import linked_ldr from '../../assets/icons/ldr_linked.svg'
import linked_twt from '../../assets/icons/ldr_twitter.svg'
import leader_lin from '../../assets/logos/leader_link.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
const PopUpModal = (props) => {
  const [slides, setSlides] = useState()
  const [slidesNo, setSlideNo] = useState(-1)
  useEffect(() => {
    setSlides(props.renderModal)
    setSlideNo(props.start)
    console.log(props)
  }, [props])

  return (
    slides && (
      <div
        className='modal fade bs-leader-modal'
        id={props.id}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        // data-bs-keyboard='false'
        // data-bs-backdrop='static'
        
      >
        <div className='modal-dialog  modal-dialog-centered modal-lg' id='exampleModalLabel'>
          <div className='modal-content subscriberModal'>
            <div className='modal-header'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                // onClick={() => setSlides(false)}
              ></button>
            </div>
            <div className='modal-body pb-5'>
              {/* <div className='container'> */}
                {/* <div className='row'> */}
                <Swiper
                  autoplay={false}
                  pagination={false}
                  speed={500}
                  navigation={true}
                  modules={[Navigation]}
                  initialSlide={slidesNo}
                  className='BannerSwiper'
                >
                  {props.data.map((values, index) => (
                    <SwiperSlide>
                      <div className='row' key={values.id}>
                        <div className='col-lg-4 offset-md-1 '>
                          <div className='d-flex'>
                            <img
                              src={values.img}
                              alt=''
                              className='img-fluid'
                            />
                          </div>
                        </div>
                        <div className='pe-3 ps-4 col-lg-6'>
                          <div>
                          <p className='mb-0 fnt-48 text-blue-drk fnt-600'>
                            {`${values.name} ${index}`}
                          </p>
                          <p className='mb-0 pt-2 fnt-20 fnt-500 txt-light-grey'>
                            {values.designation}
                          </p>
                          <p className='mb-0 pt-3 fnt-16 fnt-400 txt-black'>
                            {values.content}
                          </p>
                          <div className='mt-2 mb-5'>
                            <img src={linked_ldr} alt='' />
                            <img src={linked_twt} alt='' className='mx-3' />
                          </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
    //   </div>
    )
  )
}

export default PopUpModal
