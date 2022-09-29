import React from 'react'
import { careers } from '../../Data/mockdata'

const CoreValues = () => {
  let { core } = careers
  return (
    <section className='container pt-2 pt-md-3'>
      <p className='fnt-600 fnt-48 text-blue-drk mb-4'>{core.title}</p>
      <div className='row coreValues'>
        {core.content.map((data, index) => (
          <div className='col-md-4'>
            <div className='content mb-4'>
              <img alt='' src={data.img} className='mb-xl-4 mb-3' />
              <p className='fnt-24 fnt-600 text-blue-drk mb-xl-4 mb-2'>
                {data.typeOfWork}
              </p>
              <p className='txt-black fnt-16 fnt-400 mb-0'>
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreValues
