import React from 'react'
import Header from '../components/Header/Header'
import '../styles/pages/company.scss'
import FooterCode from '../components/Footer/Footer'
import News from '../components/Company/NewsRoom/NewsRoomIndex'
const NewsRoom = () => {
  return (
    <section className='bg-gradient-primary'>
      <Header background={'primary'} />
      <div className='container mt-3'>
        <News />
      </div>
      <FooterCode />
    </section>
  )
}

export default NewsRoom
