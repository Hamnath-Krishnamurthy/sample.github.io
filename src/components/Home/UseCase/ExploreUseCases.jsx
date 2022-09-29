import React from 'react'
import Banner from '../../../assets/Banner/UseCase.svg'
import { useCase } from '../../Data/mockdata'
const ExploreUseCases = () => {
  const { exploreUseCase } = useCase

  return (
    <div className='row mb-140'>
      <p className='center fnt-600 fnt-48 fnt-sm-32 txt-primary mt-md-5 mt-3 mb-5'>
        Explore Other Use Cases
      </p>
      {exploreUseCase.map((data, index) => (
        <div className='col-lg-6 mb-3 d-flex d-md-block justify-content-center' key={index}>
          <div className='row  rounded-8 bg-primary h-100 d-md-flex py-md-3 py-2 align-items-center explore-cases'>
            <div className='col-md-4 col-4'>
              <div className='d-flex'>
                <img className='img-fluid' src={data.img} alt='' />
              </div>
            </div>
            <div className='col-md-8 col-8'>
              <p className='fnt-16 txt-orange'>{data.title}</p>
              <p className='fnt-500 fnt-24 text-white'>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* <div className='col-lg-6 mb-3 d-flex d-md-block justify-content-center'>
        <div className='row  rounded-8 bg-primary h-100 d-md-flex py-md-3 py-2 align-items-center explore-cases'>
          <div className='col-4'>
            <div className='d-flex'>
              <img className='img-fluid' src={Banner} alt='' />
            </div>
          </div>
          <div className='col-8'>
            <p className='fnt-16 txt-orange'>Digital only banks</p>
            <p className='fnt-500 fnt-24 text-white'>
              The demand in convenience, transparency, and a feature-rich
              digital experience.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ExploreUseCases
