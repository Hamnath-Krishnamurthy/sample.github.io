import React from 'react'
import Check from '../../assets/icons/checkCircle.svg'

const SubscribeModal = () => {
  return (
    <div>
      <div
        className='modal fade'
        id='subscribeModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog  modal-dialog-centered modal-lg'>
          <div className='modal-content subscriberModal'>
            <div className='modal-header'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body pb-5'>
              <p className='text-center fnt-500 fnt-24 txt-primary'>
                Join our Newsletter
              </p>
              <p className='text-center fnt-400 fnt-16 txt-mild-grey w-60 mx-md-auto'>
                Subscribe to our newsletter to receive latest PECTO news,
                updates and announcements
              </p>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={Check} alt='' className='imgfluid' />
                <p className='fnt-500 fnt-24 txt-primary mb-0 ms-3'>
                  Subscribed successfully!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeModal
