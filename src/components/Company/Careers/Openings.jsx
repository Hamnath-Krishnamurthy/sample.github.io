import React from 'react'
import { NavLink } from 'react-router-dom'
import { careers } from '../../Data/mockdata'
const Openings = () => {
  const { careerOpenings } = careers
  const id = 1;
  return (
    <div className='container my-5' id="openings">
      <div className='row my-4 openings'>
        <h1 className='fnt-600 fnt-48 txt-primary mb-3'>
          {careerOpenings.title}
        </h1>
        <p className='fnt-400 fnt-16 txt-black w-75'>
          {careerOpenings.description}
        </p>
        {/* Selections */}
        <div className='col-md-4 mt-md-4'>
          <select className='form-select form-select-lg mb-3 locations cursor-pointer'>
            <option selected>All locations</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='col-md-4 mt-md-4'>
          <select className='form-select form-select-lg mb-3 functions cursor-pointer'>
            <option selected>All functions</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='col-md-4 mt-md-4 d-flex justify-content-center justify-content-md-start'>
          <button className='btn-pri btn fnt-600 fnt-16 text-white text-uppercase'>
            go
          </button>
        </div>
        <p className='fnt-400 text-blue-drk fnt-16 mt-4 mt-md-0'>
          40 jobs in All Locations in All Functions
        </p>
        <ul className='job'>
          <li className='col-md-12 mt-3'>
            <div className='row px-4'>
              <div className='col-md-4'>
                <p className='fnt-500 fnt-20-fixed txt-primary mb-0'>
                  Backend Developer
                </p>
              </div>
              <div className='col-md-3'>
                <p className='txt-grey-300 fnt-400 fnt-16 mb-0'>Engineering</p>
              </div>
              <div className='col-md-3'>
                <div className='d-flex justify-content-between'>
                  <p className='txt-grey-300 fnt-400 fnt-16 mb-0'>
                    India, Mumbai
                  </p>
                  <NavLink
                    to={`/company/careers/${id}`}
                    className={`fnt-600 fnt-14 txt-primary text-uppercase d-block d-md-none`}
                  >
                    apply now
                  </NavLink>
                </div>
              </div>
              <div className='col-md-2 d-none d-md-block '>
                <NavLink
                 to={`/company/careers/${id}`}
                  className={`fnt-600 fnt-14 txt-primary text-uppercase`}
                >
                  apply now
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Openings
