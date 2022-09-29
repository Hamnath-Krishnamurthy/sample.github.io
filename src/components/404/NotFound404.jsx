import React,{useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import NotFound from '../../assets/404/404.svg'
import SubscribeModal from './SubscribeModal'

const NotFound404 = () => {

  const [email,setEmail] = useState("")
  

  const handleSubmit = () => {
    // email !== '' 
  }

  return (
    <>
      <div className='container py-md-5 py-2 Error404'>
        <div className='row'>
          <div className='col-12 mb-4  mb-6'>
            <div className='d-flex justify-content-center mt-3 mt-md-0 mb-3'>
              <img src={NotFound} alt='' className='imgfluid' />
            </div>
            <p className='text-black fnt-24-fixed fnt-400 text-center'>
              Sorry, this page isn’t available.
            </p>
            <p className='txt-mild-grey fnt-400 fnt-16 text-center'>
              We suggest you back to home.
            </p>
            <div className='d-flex justify-content-center mt-4 mt-md-0'>
              <NavLink to='/' className='btn btn-pri text-uppercase d-flex justify-content-center align-items-center'>
                {' '}
                back to home
              </NavLink>
            </div>
          </div>
          <div className='subscribe mt-md-5 mt-2'>
            <div className='py-md-4 py-2'>
              <p className='fnt-24 fnt-500 text-black text-center newsLetter'>
                Join our Newsletter
              </p>
              <p className='txt-mild-grey fnt-400 fnt-16 text-center'>
                Subscribe to our newsletter to receive latest PECTO news,
                updates and announcements
              </p>

              <form className='subscribe__form' onSubmit={handleSubmit}>
                <div className='mb-3 form-content'>
                  <input
                    type='text'
                    className='form-control'
                    id='subscribeEmail'
                    aria-describedby='emailNotification'
                    autoComplete='off'
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label for="floatingInput">Enter your Email <span>*</span></label>
                  <button className='btn btn-pri fnt-600 fnt-16 text-uppercase' type="button" data-bs-toggle="modal" data-bs-target="#subscribeModal">subscribe</button>
                </div>
              </form>

              <p className='fnt-16 fnt-400 txt-mild-grey'>
                By clicking on subscribe you are agreeing to our{' '}
                <Link to='' className='border-bottom border-bottom-sm-none'>
                  Privacy Policy
                </Link>{' '}
                you can unsubscribe from the newsletter at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SubscribeModal/>
    </>
  )
}

export default NotFound404
