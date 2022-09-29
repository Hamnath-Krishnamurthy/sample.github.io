import React from 'react'
import v from '../../../assets/logos/Main_logo_v.svg'

const VideoModal = () => {
  return (
    <>
      <div
        className='bg-primary rounded-8 market-place mx-auto'
        type='button'
        data-bs-toggle='modal'
        data-bs-target='#marketPlace'
      >
        <div className='d-flex'>
          <img
            src={v}
            alt=''
            className='img-fluid'
            width={'56px'}
            height={'56px'}
          />
        </div>
        <div className='ps-md-4 ps-2 py-3 my-auto'>
          <p className='text-white fnt-24 fnt-500 mb-0'>
            Marketplaces - How it works
          </p>
          <p className='text-white'>8 min</p>
        </div>
      </div>
      <div
        className='modal fade'
        id='marketPlace'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-xl overflow-hidden'>
          <div className='modal-content bg-transparent border-0'>
            <div className='modal-header border-0'>
              {/* <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button> */}
            </div>
            <div className='modal-body'>
              <video width={1111} controls>
                <source src='https://youtu.be/OZYKY55ig_w' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoModal
