import React from 'react'
import { NavLink } from 'react-router-dom'
import { BreadCrumb } from '../../Breadcrumbs/BreadCrumb'
import v from '../../../assets/logos/Main_logo_v.svg'
import UseCaseBanner from './UseCaseBanner'
import UseCaseAccordion from './UseCaseAccordion'
import ProblemsSolutions from './ProblemsSolutions'
import ExploreUseCases from './ExploreUseCases'
import HowWorks from './HowWorks'

const UseCase = () => {
  return (
    <>
      <div className='container'>
        <BreadCrumb className='bread-news'>
          <li className='breadcrumb-item '>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='breadcrumb-item '>
            <NavLink to='/solutions'>Solutions</NavLink>
          </li>
          <li className='breadcrumb-item '>
            <NavLink to='/'>digital lending</NavLink>
          </li>
        </BreadCrumb>
        <div className=' mt-lg-3 mb-100 position-relative'>
          
          <UseCaseBanner/>

          {/* Problems & Solutions */}

          <ProblemsSolutions />

          {/* How it works */}

          <HowWorks />

          <UseCaseAccordion />

          {/* Explore other cases */}

          <ExploreUseCases />
        </div>
      </div>
      <img
        src={v}
        alt=''
        className='img-fluid top-135 translate-middle-y position-absolute start-5 d-none d-xl-block'
        width={'250px'}
        height={'300px'}
      />
       <img
        src={v}
        alt=''
        className='img-fluid bottom-55rem z-index  position-absolute right-35 d-none d-xl-block'
        width={'290px'}
        height={'290px'}
      />
    </>
  )
}

export default UseCase
