import React, { useCallback, useEffect, useState } from 'react'
import { faq } from '../Data/mockdata'
import logo from '../../assets/FAQ/v.svg'
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios'
import SearchIcon from '../SearchIcon/SearchIcon'
const FAQ = () => {
  const [tableOfContent, setTableOfContents] = useState([])
  const [accordionData, setAccordionData] = useState([])
  const [activeContent, setActiveContent] = useState('API Basics')
  const [activeId, setActiveId] = useState(1)
  const [searchContent, setSearchContent] = useState('')
  const [visible, setVisible] = useState()
  const [api, setApi] = useState([])

  useEffect(() => {
    let { table_of_contents } = faq
    setTableOfContents(table_of_contents)
    // setAccordionData(accordion);
    setVisible(8)
    ;(async () => {
      await axios
        .get('http://projects.lollypop.design//pecto-wp/wp-json/wp-p/v1/faqs/')
        .then((res) => {
          setApi(res.data)
          setAccordionData(res.data)
        })
    })()
  }, [searchContent])

  const handleClick = useCallback(
    (id) => {
      setActiveId(id)
      let particular = tableOfContent.find((data, index) => data.id === id)
      setActiveContent(particular.data)
    },
    [activeId]
  )

  const Search = () => {
    if (!searchContent) {
      setAccordionData(api)
      //  setStatus(false)
    }

    setAccordionData(
      api.filter((data) =>
        data.question.toLowerCase().includes(searchContent.toLowerCase())
      )
    )
    // setStatus(true)
  }

  const loadMore = (data) => {
    setVisible((prev) => prev + 2)
  }

  return (
    <>
      <p className='text-center fnt-600 txt-primary fnt-48 pt-4 mb-0'>
        Common Questions
      </p>
      <p className='text-center fnt-16 txt-primary mb-2 mb-md-4'>
        How can we help you today?
      </p>
      <div className='row'>
        <div className='col-12  pt-2 pt-md-0'>
          <div class='input-group mt-3 box-shadow rounded-7 position-relative'>
            <span class='input-group-text ps-2 ps-lg-4' id='search'>
              <SearchIcon insideInputTag={true} />
            </span>
            <input
              type='text'
              class='form-control form-control-search m-auto m-md-0'
              placeholder='Search FAQs ....'
              aria-label='Username'
              aria-describedby='search'
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
            />
            <span class='input-group-text position-absolute  search-btn bg-transparent z-index'>
              <button
                className='btn-search  bg-primary text-uppercase text-white rounded-8 fnt-600 fnt-14'
                onClick={Search}
              >
                Search
              </button>
            </span>
          </div>
        </div>
        <div className='col-12 pt-lg-3 mt-40'>
          <div className='row'>
            <div className='col-lg-9 order-2 order-lg-1 pt-3 pt-md-0 faq-accordion'>
              <div
                className={`border-right ${
                  !accordionData.length && 'h-100'
                } pe-lg-5 pb-55`}
              >
                {accordionData.length > 0 ? (
                  <>
                    <span className='txt-black mb-3 d-none d-lg-block fnt-16'>
                      {activeContent}
                    </span>

                    <Accordion defaultActiveKey={1} flush className='acc'>
                      {accordionData.map((data, index) => (
                        <Accordion.Item
                          activeKey='0'
                          eventKey={data.id}
                          className='acc-item'
                        >
                          <Accordion.Header className='border-bottom-0 acc-header'>
                            <p className='fnt-24 fnt-500 txt-primary pe-2'>
                              {data.question}
                            </p>
                          </Accordion.Header>
                          <Accordion.Body className='acc-body'>
                            <>
                              <p className='fnt-16 txt-black pe-3'>
                                {data.answer}
                              </p>
                              <span className='timeStamp-acc txt-mild-grey fnt-12 '>
                                {/* {data.timeStamp} */}
                                Updated May 05, 2022
                              </span>
                            </>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </>
                ) : (
                  <p class='fnt-500 txt-orange text-center mt-3 mt-lg-0 mb-0 moreResults'>
                    We couldn't find any more results for{' '}
                    <span class='txt-primary'>
                      <br class='d-block d-lg-none' />
                      {`'${searchContent}'`}.
                    </span>
                  </p>
                )}
              </div>
              {accordionData.length > 0 && (
                <button
                  onClick={loadMore}
                  className={`btn-pri btn cursor-pointer text-uppercase faq-load-more fnt-600 mx-auto fnt-14 d-none d-md-block ${
                    accordionData.length && 'd-none'
                  }`}
                  disabled={accordionData.length < 8 && true}
                >
                  load more
                </button>
              )}
            </div>
            <div className='col-lg-3 order-1 order-lg-2'>
              <div className='ps-0 mt-lg-0 mt-4 ps-lg-4'>
                <p className='txt-orange fnt-500 fnt-24'>Table on contents</p>
                <ul className='table-of-contents-lg d-none d-lg-block'>
                  {tableOfContent.map((data, index) => (
                    <li key={data.id}>
                      <span
                        className={`mb-2 cursor-pointer fnt-600 txt-primary ${
                          activeId === data.id && 'active'
                        }`}
                        onClick={() => handleClick(data.id)}
                      >
                        {data.data}
                      </span>
                    </li>
                  ))}
                </ul>
                <select
                  className={`fnt-16 txt-black form-select form-select-faq select d-block d-lg-none ${
                    accordionData.length < 0 && 'mb-5 mb-lg-0'
                  }`}
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
      </div>
      <img src={logo} alt='' className='img-fluid faq_img d-lg-block d-none' />
    </>
  )
}

export default FAQ
