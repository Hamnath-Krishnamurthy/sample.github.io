import React from 'react'
import Header from '../components/Header/Header'
import FooterCode from '../components/Footer/Footer'
import CaseStudyDetails from '../components/CaseStudy/CaseStudyDetails'
const CaseDetails = () => {
  return (
    <section className='bg-gradient-primary'>
    <Header background={'secondary'} />
    {/* <CaseStudyListing /> */}
    <CaseStudyDetails/>
    <FooterCode />
  </section>
  )
}

export default CaseDetails