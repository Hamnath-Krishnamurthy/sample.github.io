import React from 'react'
import image1 from '../../assets/Banner/contact-join-1.svg'
import image2 from '../../assets/Banner/contact-join.svg'
const LetsConnect = () => {
  return (
    <section className='mb-140-imp mb-140 connect'>
      <div className='lets-connect'>
        <div className='container h-100'>
          <div className='row h-100'>
            <div className='col-md-6'>
              <div className='first-section'>
                <p className='fnt-600 fnt-48 text-white mb-3 w-80'>
                  Let's talk about payment innovation
                </p>
                <p className='fnt-400 fnt-24 text-white mb-3 w-80'>
                  Let's talk about your use case and how can we help.
                </p>
                <button className='btn-white btn'> let's connect</button>
              </div>
            </div>
            <div className='col-md-6 second-section'>
              <div className='row h-100'>
                <div className='col-6 h-100 position-relative'>
                  <img alt='' className='img-fluid img-1' src={image2} />
                </div>
                <div className='col-6 h-100 position-relative'>
                  <img alt='' className='img-fluid img-2' src={image1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default LetsConnect
