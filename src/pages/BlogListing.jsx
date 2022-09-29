import React from 'react'
import FooterCode from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Blog from '../components/Company/Blog/Blog'
const BlogListing = () => {
  return (
   <section>
    <div className='container'>
    <Header  />
      <Blog/>
      <FooterCode />
   </div>
   </section>
  )
}

export default BlogListing