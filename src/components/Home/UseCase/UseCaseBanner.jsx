import React, { useEffect, useState } from 'react'
import Banner from '../../../assets/Banner/UseCase.svg'
import v from '../../../assets/logos/Main_logo_v.svg'

import { useCase } from '../../Data/mockdata'

const UseCaseBanner = () => {

 const {banner} = useCase

  return (
    <div className='row mb-5'>
      <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 order-lg-1 order-2'>
        <div className='d-lg-flex flex-column justify-content-center h-100 mt-3 mt-lg-0'>
          <p className='fnt-500 txt-orange fnt-24 fnt-sm-20 mb-3'>{banner.title}</p>
          <p className='txt-primary fnt-600 fnt-48 w-101'>
            {banner.content.title}
          </p>
          <p className='fnt-16 txt-black'>
            {banner.content.description}
          </p>
          <button className='btn btn-pri mt-3 fnt-600 fnt-16 text-uppercase'>
            get started
          </button>
        </div>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6 col-xl-5 order-1 order-lg-2 z-index'>
        <div className='d-flex justify-content-center'>
          <img alt='' src={Banner} className='img-fluid z-index' />
        </div>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-12 col-xl-1 order-lg-3 useCase-v-logo'>
        <img alt='' className='img-fluid' src={v} />
      </div>
    </div>
  )
}

export default UseCaseBanner
