import React from 'react'
import Banner from './Banner'
import thank_you from "../../assets/logos/thankyou.svg"

const ThankYou = () => {
  return (
    <div>
        <Banner/>
        <div className='d-flex mt-50 justify-content-center align-items-center contct-img-1'>
            <img src={thank_you} alt="" />
            <p className='fnt-20 fnt-500 text-dark-blue px-1 mb-0'>Thank you for Reaching Us.</p>
        </div>
        <div className='text-center mb-100 pt-md-3 pt-5'>
            <p className='fnt-16 fnt-400 txt--thank-you'>our team  will be getting back to you Soon . mean while explore our <a href='' className='text-underline'> Case studies</a></p>
        </div>
    </div>
  )
}

export default ThankYou