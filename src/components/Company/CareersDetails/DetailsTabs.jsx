import React, { useState } from 'react'
import ApplyNow from './ApplyNow'
import RoleOverView from './RoleOverView'
import Check from '../../../assets/icons/checkCircle.svg'
import { NavLink } from 'react-router-dom'

const DetailsTabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleActive = (newActive) => {
    setActiveTab(newActive)
  }
  const handleSuccess = (success) => {
    setIsSuccess(success)
  }
  return (
    <section className='py-4'>
      {!isSuccess ? (
        <>
          <div className='tab'>
            <div className='container'>
              <ul>
                <li
                  className={`pb-3 ${activeTab === 0 && 'active'} cursor-pointer`}
                  onClick={() => handleActive(0)}
                >
                  Role Overview
                </li>
                <li
                  className={`pb-3 ms-5 ${activeTab === 1 && 'active'} cursor-pointer`}
                  onClick={() => handleActive(1)}
                >
                  Apply Now
                </li>
              </ul>
            </div>
          </div>
          {activeTab === 0 ? (
            <RoleOverView active={handleActive} />
          ) : (
            <ApplyNow success={handleSuccess} />
          )}
        </>
      ) : (
        <div className='success px-3'>
          <div className='d-flex align-items-end mb-3'>
            <img className='imgfluid' src={Check} alt='' />
            <p className='fnt-500 fnt-20-fixed txt-primary ps-2'>
              Thank you for applying.
            </p>
          </div>
          <p className='successStatus fnt-400 fnt-16'>
            Your application for Backend Developer (CID: T4546546) has been
            received. If there is a fit, someone will be getting back to you.
            <NavLink to='/company/careers#scrollspy'>View more jobs.</NavLink>
          </p>
        </div>
      )}
    </section>
  )
}

export default DetailsTabs
