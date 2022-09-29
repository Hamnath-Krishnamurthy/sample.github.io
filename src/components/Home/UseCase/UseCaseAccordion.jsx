import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Card from '../../../assets/Banner/JohnSmith.png'

import { useCase } from '../../Data/mockdata'

const UseCaseAccordion = () => {
  const [active, setActive] = useState(1)
  const { benefits } = useCase
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    if (windowSize.innerWidth >1023){
      setTimeout(() => {
        setActive((prevState) => (prevState < 6 ? prevState + 1 : 1))
      }, 9000)

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearTimeout()
   }
    };
  }, [active,windowSize.innerWidth]);

 
  const handleActive = (data) => {
    setActive(data)
  }
  return (
    <div className='row my-lg-5 py-lg-5'>
      <p className='text-center fnt-600 fnt-48 fnt-sm-32 txt-primary mb-2'>
        {benefits.title}
      </p>
      <p className='text-center fnt-24 txt-black mb-5'>{benefits.subtitle}</p>
      <div className='col-lg-6 useCaseAccordion'>
        <div className='d-flex '>
          <img src={Card} alt='' className='img-fluid' />
        </div>
      </div>
      <div className='col-lg-6'>
        <ul className='ps-4 timeline d-none d-lg-block'>
          {benefits.accordion.map((data) => (
            <li
            key={data.id}
              className={`mb-5 cursor-pointer ${
                active === data.id && 'active'
              }`}
              onClick={() => handleActive(data.id)}
            >
              <p
                className={`fnt-24 fnt-500 mb-2 ${
                  active === data.id ? 'txt-primary' : 'txt-mild-grey'
                }`}
              >
                {data.question}
              </p>
              <p
                className={`fnt-16 fnt-400 mb-0 ${
                  active === data.id ? 'd-block' : 'd-none'
                } txt-black`}
              >
                {data.answer}
              </p>
            </li>
          ))}
        </ul>
        <div className='d-block d-lg-none mt-3 mb-4'>
          <Accordion defaultActiveKey={1} flush>
            {benefits.accordion.map((data) => (
              <Accordion.Item
              key={data.id}
                activeKey={`'${data.id}`}
                eventKey={data.id}
                className='border-0 mb-2'
              >
                <Accordion.Header className='border-bottom-0 useCase-acc-header'>
                  <p className='fnt-500 fnt-20 txt-primary mb-0'>
                    {data.question}
                  </p>
                </Accordion.Header>
                <Accordion.Body className='p-2'>
                  <p className='txt-black fnt-16 fnt-400'>{data.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default UseCaseAccordion
