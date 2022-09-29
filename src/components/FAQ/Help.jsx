import React from 'react'
import line1 from '../../assets/FAQ/lines_1.svg'
import line2 from '../../assets/FAQ/lines_2.svg'
const Help = () => {
  return (
    <div className='row'>
        <div className='col-12 sec-bnr-ptsm'>
          <p className='text-center fnt-20-fixed txt-primary fnt-600 mb-0'>
            Couldn’t find what you were looking for ?
          </p>
          <div className='faq_bg bg-primary rounded-19 mt-3 mt-lg-5'>
           <div className='d-flex'>
           <img src={line1} className='img-fluid faq_bg__img' alt='' />
           </div>
            <div className='my-auto'>
              <p className='text-white mb-0 text-center info'>
                Email us your doubt/question & we’ll reply within 24hrs.
              </p>
              <p className='fnt-500 text-white text-center mt-lg-4 mt-1 info__id mb-0'>
                hello@pecto.com
              </p>
            </div>
           <div className='d-flex'>
           <img src={line2} className='img-fluid faq_bg__img' alt='' />
           </div>
          </div>
        </div>
    </div>
  )
}

export default Help