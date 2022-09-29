import React, { useEffect, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { BreadCrumb } from '../Breadcrumbs/BreadCrumb'
import Banner from '../../assets/CaseStudy/Banner.png'
import v from '../../assets/CaseStudy/v.svg'
import { caseStudy, mockData } from '../Data/mockdata'
import Cards from '../Cards/Cards'
import ArrowDown from '../../assets/icons/arrow-down.svg'
import axios from 'axios'
const CaseStudyListing = () => {
  const [data, setData] = useState([])
  const [activeId, setActiveId] = useState(1)
  const [tableOfContent, setTableOfContent] = useState([])
  const [visible, setVisible] = useState(0)

  useEffect(() => {
      (async () => {
      await axios
        .get(
          "http://projects.lollypop.design//pecto-wp/wp-json/wp-p/v1/casestudy/"
        )
        .then((res) => setData(res.data))
        .catch((err)=>console.log(err))
    })();
    let { table_of_content } = caseStudy
    setTableOfContent(table_of_content)
    setVisible(4)

  }, [''])
  const handleClick = useCallback(
    (id, content) => {
      setActiveId(id)
      if (content === 'all') {
        setData(mockData)
      } else {
        const particular = mockData.filter((data) => data.btn_content === content)
        setData(particular)
      }
    },
    [activeId]
  )
  return (
    <div className='container'>
      <BreadCrumb>
        <li className='breadcrumb-item'>
          <span>Resources</span>
        </li>
        <li
          className='breadcrumb-item active text-capitalize'
          aria-current='page'
        >
          <span> customer case study </span>
        </li>
      </BreadCrumb>
      <div className='mt-lg-5 mb-100 position-relative'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 order-lg-1 order-2'>
            <div className='d-lg-flex flex-column justify-content-center h-100 mt-3 mt-lg-0'>
              <p className='txt-primary fnt-600 fnt-48 mb-1'>
                Customer Case Studies
              </p>
              <p className='fnt-16 txt-black mb-3'>
                Credit card customer journey is defined as the sequential
                process steps and touch points that a credit card customer of a
                bank, credit card company, or fintech, experiences throughout
                their life-cycle as a prospect, or customer
              </p>
              <NavLink to='/contactus' className='btn btn-pri fnt-600 fnt-16 text-uppercase d-flex align-items-center justify-content-center'>
                get started
              </NavLink>
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-6 col-xl-5 order-1 order-lg-2 z-index'>
            <div>
              <img alt='' src={Banner} className='img-fluid' />
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-12 col-xl-1 order-lg-3 caseStudies-v-logo'>
            <img alt='' className='img-fluid' src={v} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-7 col-lg-9  order-lg-1 order-2'>
          <div className='row'>
            {data.slice(0, visible).map((content, index) => (
              <Cards
                index={index}
                content={content}
                rowsPerColumn={2}
                opacity='1'
              />
            ))}

            <div className='col-12 pt-4 pt-md-0 pb-lg-4 text-center'>
              <button
                className='btn-pri btn text-uppercase fnt-600 mx-auto fnt-14 d-none d-lg-block'
                onClick={() => setVisible((prev) => prev + 2)}
              >
                load more
              </button>
              <button
                className='btn-pri btn d-block d-lg-none mx-auto'
                data-type='rounded'
                onClick={() => setVisible((prev) => prev + 3)}
              >
                <img src={ArrowDown} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='col-xl-5 col-lg-3 d-lg-flex order-lg-2 order-1 justify-content-center'>
          <div className='sticky-table'>
            <p className='txt-orange fnt-500 fnt-24'>Table on contents</p>
            <ul className='table-of-contents-lg d-none d-lg-block'>
              {tableOfContent.map((data, index) => (
                <li key={data.id}>
                  <span
                    className={`mb-2 cursor-pointer fnt-600 txt-primary ${
                      activeId === data.id && 'active'
                    }`}
                    onClick={() => handleClick(data.id, data.content)}
                  >
                    {data.data}
                  </span>
                </li>
              ))}
            </ul>
            <select
              className={`fnt-16 txt-black form-select form-select-faq select d-block d-lg-none mb-5 mb-lg-0}`}
            >
              {tableOfContent.map((data, index) => (
                <option
                  key={data.id}
                  value={data.data}
                  selected={activeId === data.id && true}
                >
                  {data.data}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyListing
