import React from 'react'
import NotFound404 from '../components/404/NotFound404'
import Header from '../components/Header/Header'
import FooterCode from '../components/Footer/Footer'

const Error404 = () => {
  return (
    <section className='bg-gradient-primary'>
      <Header />
      <NotFound404 />
      <FooterCode />
    </section>
  )
}

export default Error404
