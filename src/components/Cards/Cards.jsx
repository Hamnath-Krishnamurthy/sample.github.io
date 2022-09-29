import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Cards = (props) => {
  
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [navLink,setNavLink] = useState('')

  useEffect(()=>{

    setNavLink(pathname)

  },[pathname])

  const handleRoute= ( title,slug) =>{
    navigate(`${navLink}/${title}`,{
      state : {
        slug : slug
      }
    })
  }


  return (
    <div
      className={`col-lg-${12 / props.rowsPerColumn} col-md-6`}
      key={props.content.id}
    >
      <div
        className={`card mb-md-5 mb-2 bg-sky-200 border-0 cursor-pointer text-decoration-none`}
        data-count={props.index + 1}
        onClick = {() => handleRoute(props.content.title, props.content.slug)}
      >
        <div className='row g-0'>
          <div className='col-md-12 d-flex col-4 position-relative '>
            <div className='d-flex w-100'>
              <img
                className={`card-img-top img-fluid d-none d-md-block cardsImg`}
                src={props.content.featured_image.large}
                alt='...'
              />
              <img
                className={`card-img-top img-fluid d-block d-md-none`}
                src={props.content.featured_image.thumbnail}
                alt='...'
              />
            </div>
            <button
              className={`btn category-btn btn-md btn-orange fnt-14 fnt-700 rounded-pill txt-white position-absolute top-1 ${
                props.opacity && 'opacity-1'
              }`}
            >
               { pathname !== '/resources/casestudy' ? props.content.taxonomy[0].name : "Health Care"}
            </button>
          </div>
          <div className='col-md-12 col-8'>
            <div className='card-body'>
              <span className='txt-orange'>9 June 2022 4:14 PM</span>
              <p className='card-text txt-primary fnt-24 fnt-500 w-75 py-md-2 py-0 mb-2 mb-md-3 title'>
                {props.content.title}
              </p>
              <div className='txt-black content' dangerouslySetInnerHTML={{__html : props.content.content}}>
                
              </div>
              <a
              onClick = {() => handleRoute(props.content.title, props.content.slug)}
                
                className='text-uppercase fnt-600 text-dark-blue fnt-14 mt-md-3 text-decoration-none'
              >
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
