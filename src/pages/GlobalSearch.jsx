import React from 'react'
import FooterCode from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'

const GlobalSearch = () => {
  return (
    <section className='bg-gradient-primary overflow-x-hidden position-relative'>
      <Header />
      <Search />
      <FooterCode />
    </section>
  )
}

export default GlobalSearch
