import React from 'react'
import Header from '../components/Header/Header'
import '../styles/pages/company.scss'
import FooterCode from '../components/Footer/Footer'
import NewsDetails from '../components/NewsDetails/NewsDetails'
const NewsRoomDetails = () => {
  return (
    <section>
      <Header background={'secondary'} />
        <NewsDetails />
      <FooterCode />
    </section>
  )
}

export default NewsRoomDetails