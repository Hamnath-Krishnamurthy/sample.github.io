import React from 'react'
import './BreadCrumbs.scss'
export const BreadCrumb = ({children}) => {
  return (
    <nav aria-label='breadcrumb' className='fnt-500 fnt-16 py-3 d-none d-lg-block'>
      <ol className='breadcrumb ol-bread'>
        {children}
      </ol>
    </nav>
  )
}
