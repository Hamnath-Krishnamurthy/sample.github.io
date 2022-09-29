import React from 'react'
import VideoModal from './VideoModal'
import { useCase } from '../../Data/mockdata'
const HowWorks = () => {
  const { howItWorks } = useCase
  return (
    <div className='row mb-5 how-it-works'>
      <p className='txt-primary fnt-48 fnt-sm-32 fnt-600 title'>
        {howItWorks.title}
      </p>
      <div className='col-md-12 mt-4 mt-md-0'>
        <ol className='my-5'>
          {howItWorks.timeline.map((data, index) => (
            <li>
              <img src={data.img} alt='' className='mb-3' />
              <div>
                <p className='text-uppercase fnt-700 fnt-16 mb-3'>
                  {data.step}
                </p>
                <p className='txt-primary fnt-16 pe-3'>
                  {data.step_description}
                </p>
              </div>

              {
                data.step === 'step 4' || data.step === 'step 8' ? <span></span>  : ''
              }
            </li>
          ))}

          {/* <li>
            <img src={Home} alt='' className='mb-3' />
            <p className='text-uppercase fnt-700 fnt-16 mb-3'>step 10</p>
            <p className='txt-primary fnt-16 pe-3'>
              {' '}
              The customer applies for a loan through your digital platform.
            </p>
          </li>
          <li>
            <img src={Home} alt='' className='mb-3' />
            <p className='text-uppercase fnt-700 fnt-16 mb-3'>step 11</p>
            <p className='txt-primary fnt-16 pe-3'>
              {' '}
              The customer applies for a loan through your digital platform.
            </p>
          </li>
          <li>
            <img src={Home} alt='' className='mb-3' />
            <p className='text-uppercase fnt-700 fnt-16 mb-3'>step 12</p>
            <p className='txt-primary fnt-16 pe-3'>
              {' '}
              The customer applies for a loan through your digital platform.
            </p>
          </li> */}
        </ol>
        <ul className='d-block d-xl-none how-it-works-mobile'>
          {howItWorks.timeline.map((data, index) => (
            <li className='row mb-0 mb-md-4'>
              <div
                className={`col-2 content-img text-md-center px-0 step-${
                  index + 1
                }`}
              >
                <img className='img-fluid' src={data.img} />
              </div>
              <div className='col-10 '>
                <div>
                  <p className='text-uppercase fnt-700 fnt-16 mb-3'>
                    {data.step}
                  </p>
                  <p className='txt-primary fnt-16'>{data.step_description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <VideoModal />
      <div className='d-flex justify-content-center mt-4'>
        <a
          className='cursor-pointer txt-2d3577 fnt-16 text-center text-decoration-none border-bottom'
          download
        >
          Download the full diagram [PDF]
        </a>
      </div>
    </div>
  )
}

export default HowWorks
