import React from 'react'
import Header from '../components/Header/Header'
import FooterCode from '../components/Footer/Footer'
import CaseStudyListing from '../components/CaseStudy/CaseStudyListing'
const CaseStudyMain = () => {
  return (
    <section className='bg-gradient-primary'>
      <Header background={'primary'} />
      <CaseStudyListing />

      <FooterCode />
    </section>
  )
}

export default CaseStudyMain
