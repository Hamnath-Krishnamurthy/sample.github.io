import React from 'react'
import { careers } from '../../Data/mockdata'
import V from '../../../assets/logos/V.svg'
const PerksBenefits = () => {
  const { perksBenefits } = careers

  return (
    <section className='perksBenefits'>
      <img src={V} className='imgfluid perksBenefits__V' alt=''/>
      <div className='container pt-2 pt-md-3'>
        <div className='row py-5 '>
          <div className='col-12'>
            <h1 className='fnt-600 fnt-48 text-blue-drk text-md-center mb-3'>
              {perksBenefits.title}
            </h1>

            <p className='fnt-400 fnt-16 txt-black text-center d-none d-lg-block'>
              We’re building a culture where great people get great rewards,
              from learning and growth opportunities to benefits that will help
              you live your best life. We need a healthy and happy team to
              succeed, so we make sure to take care of our employees in more
              ways than one.
            </p>
          </div>
          <div className='row mt-3 z-index cards'>
            {perksBenefits.cards.map((data, index) => (
              <div className='col-xl-4 col-md-6'>
                <div className='content'>
                  <img alt='' src={data.img} className='mb-4' />
                  <p className='fnt-24 fnt-600 text-blue-drk mb-md-4 mb-2'>
                    {data.title}
                  </p>
                  <p className='txt-black fnt-16 fnt-400 mb-0'>
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerksBenefits
