import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import Banner2 from '../../assets/CaseStudy/banner2.png'
import Banner1 from '../../assets/CaseStudy/banner3.png'
import { BreadCrumb } from '../Breadcrumbs/BreadCrumb'
import twitterN from '../../assets/logos/twitterL.svg'
import facebkN from '../../assets/logos/facebk.svg'
import othimN from '../../assets/logos/othim.svg'
import linkedN from '../../assets/logos/linkedin.svg'
import arrowL from '../../assets/icons/arrow-left.svg'
import arrowR from '../../assets/icons/arrow-right.svg'
import PrevN from '../../assets/Banner/prevN.svg'
import NextN from '../../assets/Banner/nextN.svg'
import shareadd from '../../assets/icons/share-add.svg'
import lndin from '../../assets/icons/linkdin.svg'
import fcb from '../../assets/icons/facbklg.svg'
import twt from '../../assets/icons/twtrrr.svg'
import othri from '../../assets/icons/othimglg.svg'
import download from '../../assets/logos/download.svg'
import axios from 'axios'
import vector from '../../assets/logos/Vector.png'

const CaseStudyDetails = () => {
  const initialData = [
    'Introduction',
    'What were Rupay’s Key Challenges?',
    'How PECTO Helped Rupay with Collections & Payouts ',
    'What were the Outcomes?',
  ]
  const [tableOfContent, setTableOfContent] = useState([])
  const [activeId, setActiveId] = useState(0)
  const { slug } = useParams()
  const { state } = useLocation()
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      await axios
        .get(
          // 'http://projects.lollypop.design//pecto-wp/wp-json/wp-p/v1/casestudy/industry-experts-in-digital-payments/'
          `http://projects.lollypop.design//pecto-wp/wp-json/wp-p/v1/casestudy/${state.slug}/`
        )
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    })()
    setTableOfContent([initialData])
  }, [])
  useEffect(() => {}, [])

  const handleClick = (id) => {
    setActiveId(id)
  }

  return (
    <section className='main-section main-section-case casestudyDetails'>
      {data.map((cnt) => (
        <div className='container'>
          <div className='row'>
            <div className='mx-auto w-75'>
              <div className='pt-4 d-none d-md-block'>
                <BreadCrumb className='bread-news'>
                  <li className='breadcrumb-item '>
                    <NavLink to='/resources/casestudy'>
                      Customer Case studies
                    </NavLink>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    <span>{slug}</span>
                  </li>
                </BreadCrumb>
              </div>
              <div className='mt-3 mt-md-0'>
                <button className='outline-0 border-0 btn-orange btn-orng-brd fnt-14'>
                  Engineering & APIs
                </button>
              </div>
              <div className='mt-md-4 mt-3'>
                <h3 className='kyc-fnt fnt-48 text-dark-blue'>{cnt.title}</h3>
              </div>
              <div className='d-xl-flex news-a'>
                <p className='txt-primary fnt-600 fnt-16 mb-0'>
                  Industry & Keywords :{' '}
                  <span className='txt-orange'>Digital banking</span>{' '}
                  <span className='mx-2 d-none d-xl-inline'>|</span>
                </p>
                <a href='' className='fnt-16 fnt-14-14 text-org-org'>
                  #Banking serivces
                </a>
                <a
                  href=''
                  className='fnt-16 fnt-14-14 text-org-org mx-2 mx-md-4'
                >
                  #Finance
                </a>
                <a href='' className='fnt-16 fnt-14-14 text-org-org'>
                  #Crypto
                </a>
                <a
                  href=''
                  className='fnt-16 fnt-14-14 text-org-org mx-2 mx-md-4'
                >
                  #Business
                </a>
              </div>
              <div className='pt-3'>
                <p className='mb-0 fnt-16 txt-black'>
                  Posted on 9 June 2022 4:14 PM by John Simon
                </p>
              </div>
            </div>
            <div className='col-md-12 mx-auto mt-3 col-12 start'>
              <img src={Banner1} alt='' width='100%' height='auto' />
              <button className='btn btn-pri w-auto px-5 mt-3 mt-lg-5'>
                <img src={download} alt='' className='pe-2' />
                Download Case study
              </button>
            </div>
          </div>
          <div className='row mt-40'>
            <div className='d-block d-md-none '>
              <div className='tableOfContentMobile bg-sky-200 mb-4'>
                <p className='fnt-14 fnt-600 txt-orange mb-2'>Table of Contents </p>
                <ul>
                  {initialData.map((data, index) => (
                    <div className="d-flex align-items-center ">
                    <img
                      src={vector}
                      alt=""
                      width="6.78px"
                      height="7.53px"
                    />
                    <a href="" className='text-decoration-none'>
                      <li className="lit-sty fnt-14 fnt-600 txt-primary">{data}</li>
                    </a>
                  </div>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className='col-md-8 dynamicContent'
              key={cnt.id}
              dangerouslySetInnerHTML={{ __html: cnt.content }}
            ></div>

            {/* <div className='col-md-8'>
            <p className='fnt-500 txt-primary fnt-20 mb-5'>Introduction</p>
            <p className='fnt-500 text-black fnt-20 mb-3'>
              “A Symbiotic Community For Businesses”
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              {' '}
              An online platform for companies to find leads & make purchases
              from verified businesses, Zoozle helps a business to gather leads
              from everyday purchases. Be it anything- a laptop or executive
              chair.{' '}
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              When your business makes a purchase, it goes as a lead for another
              company, and when you buy something on Zoozle, you get their lead.
              This is the symbiotic relationship Zoozle is setting up for the
              business community
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              Driven by AI, Zoozle helps businesses with lead generation,
              logistics, supplier credit & financing, and payment management, to
              name a few. The more a business purchase via Zoozle, the more
              leads it can gather. The platform also creates a secure payments
              collection environment to ensure zero bad debts via escrow.
            </p>
            <p className='fnt-500 txt-black fnt-20 my-4'>
              What were Rupay’s Key Challenges?
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              Being the auto-pilot for businesses meant there were many aspects
              for Zoozle to take care of. Some of the challenges Zoozle wished
              to iron out were: Cashflow Management & Instant Settlements
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              Increased trade among businesses meant increased fund flows.
              Traditional payment gateways could prove inept to handle SMEs’
              essence- quick settlements at affordable rates. This is a myth in
              the SME landscape and is a crucial challenge that most businesses
              struggle with.
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              Besides, Zoozle knew that for the platform to deliver the promised
              symbiotic community, it was necessary to manage the flow of funds
              between businesses.
              <br />
              <span>Company Identity Verification</span>
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              When two companies come together to make purchasing decisions,
              it’s vital to verify each one’s identity to ensure they are
              trustworthy & real. Lack of KYC-compliance meant serious trouble &
              hefty fines. Zoozle wanted a solution that helped them onboard
              businesses and perform KYC(know your customer) checks.
            </p>
            <p className='fnt-400 fnt-16 txt-black'>Bank Integrations</p>
            <p className='fnt-400 fnt-16 txt-black'>
              To manage cash flows and, most importantly, to ensure that
              settlements between the SMEs were instant, Zoozle must integrate
              with banks to have control over the payments. The integration
              process is long-drawn and would’ve cost them a lot of money and
              time.{' '}
            </p>
            <div className='d-flex'>
              <img src={Banner2} alt='' className='img-fluid object-fit' />
            </div>
            <p className='fnt-500 fnt-20 txt-primary my-4'>
              How PECTO Helped Rupay’s with Collections & Payouts{' '}
            </p>
            <p className='fnt-400 fnt-16 txt-black mb-5'>
              PECTO’s product suite helped Zoozle streamline its collection
              processes and payouts and verify the identities of registered
              businesses.{' '}
            </p>
            <p className='fnt-500 fnt-20 text-black mb-2'>
              PECTO’s Virtual Accounts Workflow
            </p>
            <p className='fnt-400 fnt-16 txt-black mb-5'>
              Each buyer had a virtual account created into which they loaded
              money using UPI or bank transfers. These virtual accounts were
              set-up on top of Zoozle’s business account. Any ledger entry or
              transaction was updated on Zoozle’s dashboard & Accounting ERP,
              making it effortless for reconciling payments. In addition, Zoozle
              was able to reconcile payments in real-time and automate the same.{' '}
            </p>
            <p className='fnt-500 fnt-20 text-black'>KYC Suite</p>
            <p className='fnt-400 fnt-16 txt-black'>
              PECTO KYC suite enabled Rupay to run comprehensive identification
              checks on sellers using multiple Government-issued IDs such as
              PAN, GSTIN, Voter ID, Driver’s License, and Aadhar. Instant KYC
              means faster seller onboarding and lesser hassle of record
              keeping.
            </p>
            <p className='fnt-500 my-5 fnt-20 txt-primary'>
              What were the Outcomes?
            </p>
            <ul className='fnt-400 text-black fnt-16 mb-4 list-group-disc ps-5'>
              <li>Rupay’s go-to-market timelines were reduced by 50%. </li>
              <li>
                They were able to facilitate the transfer of funds within a
                click of a button.
              </li>
              <li>
                Instant settlements were made possible at half the costs for
                sellers.{' '}
              </li>
              <li>
                Real-time and automated payment reconciliation removed
                additional headaches out of the equation.
              </li>
              <li>
                Anytime cash-withdrawal from virtual account to seller’s bank
                account enabled the sellers to have absolute control over their
                funds.{' '}
              </li>
            </ul>
            <p className='fnt-400 fnt-16 txt-black mb-4'>
              If your business is trying to solve a financial challenge and
              overcome it as Rupay did, feel free to drop us an email at
              hello@decentro.tech. Our product suite comprising Accounts,
              Lending, KYC, and AML & Compliance modules is at your fingertips.
            </p>
            <p className='fnt-400 fnt-16 txt-black'>
              It’s not that hard. We’ll help you make it easy. <br />
              As easy as it should be.{' '}
            </p>

            <hr className='hr' />
          </div> */}
            <div className='col-md-4'>
              <div className='d-none d-md-block'>
                <p className='txt-orange fnt-500 fnt-24'>Table on contents</p>
                <ul className='table-of-contents-lg'>
                  <li>
                    <span
                      className={`mb-2 cursor-pointer fnt-600 fnt-16 txt-primary ${
                        activeId === 0 && 'active'
                      }`}
                      onClick={() => handleClick(0)}
                    >
                      Introduction
                    </span>
                  </li>
                  <li>
                    <span
                      className={`mb-2 cursor-pointer fnt-600 fnt-16 txt-primary ${
                        activeId === 1 && 'active'
                      }`}
                      onClick={() => handleClick(1)}
                    >
                      What were Rupay’s Key Challenges?
                    </span>
                  </li>
                  <li>
                    <span
                      className={`mb-2 cursor-pointer fnt-600 fnt-16 txt-primary ${
                        activeId === 2 && 'active'
                      }`}
                      onClick={() => handleClick(2)}
                    >
                      How PECTO Helped Rupay with
                    </span>
                  </li>
                  <li>
                    <span
                      className={`mb-2 cursor-pointer fnt-600 fnt-16 txt-primary ${
                        activeId === 3 && 'active'
                      }`}
                      onClick={() => handleClick(3)}
                    >
                      Collections & Payouts
                    </span>
                  </li>
                  <li>
                    <span
                      className={`mb-2 cursor-pointer fnt-600 fnt-16 txt-primary ${
                        activeId === 4 && 'active'
                      }`}
                      onClick={() => handleClick(4)}
                    >
                      What were the Outcomes?
                    </span>
                  </li>
                </ul>
              </div>
              <div className='content d-md-none'>
                <input type='checkbox' id='click' />
                <label for='click' className='share-btn'>
                  <span className='fas fa-share-alt'>
                    <img src={shareadd} alt='' />
                  </span>
                  <a href='/'>
                    <img src={twt} alt='' />
                  </a>
                  <a href='/'>
                    <img src={fcb} alt='' />
                  </a>
                  <a href='/'>
                    <img src={lndin} alt='' />
                  </a>
                  <a href='/'>
                    <img src={othri} alt='' />
                  </a>
                </label>
              </div>
              <div className='sec-tiwter d-none d-md-block '>
                <div className='d-none d-md-block'>
                  <div>
                    <p className='mb-3 fnt-16 text-black text-end fnt-barlow-600 px-2'>
                      Share
                    </p>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <div className=''>
                      <div>
                        <a href=''>
                          <img src={twitterN} alt='' />
                        </a>
                      </div>
                      <div className='mt-3'>
                        <a href=''>
                          <img src={linkedN} alt='' />
                        </a>
                      </div>
                      <div className='mt-3'>
                        <a href=''>
                          <img src={facebkN} alt='' />
                        </a>
                      </div>
                      <div className='mt-3'>
                        <a href=''>
                          <img src={othimN} alt='' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-9'>
              <ul className='row mt-3'>
                <li className='col-md-6 px-0 col-12 d-none d-md-block'>
                  <div className='d-flex align-items-center'>
                    <div className='pe-2'>
                      <a href=''>
                        <img src={arrowL} alt='' />
                      </a>
                    </div>
                    <div>
                      <img src={PrevN} alt='' />
                    </div>
                    <div className='ps-3   text-start'>
                      <p className='mb-0 fnt-16 txt-black'>PREVIOUS NEWS</p>
                      <p className='mb-0 fnt-16 fnt-600 txt-primary d-md-none d-lg-block'>
                        Prepaid cards 101- a definitive guide
                        <br /> for growth and profitability
                      </p>
                    </div>
                  </div>
                </li>
                {/* <div className="vl"></div> */}
                <li className='col-md-6 vl col-12 previous_news'>
                  <div className='d-flex align-items-center justify-content-lg-end'>
                    <div className='px-md-3 text-md-end'>
                      <p className='mb-0 fnt-16 txt-black'>NEXT NEWS</p>
                      <p className='mb-0 fnt-16 fnt-600 txt-primary d-md-none d-lg-block'>
                        Know your customer (KYC)
                        <br className='d-none d-md-block' /> the need for
                        authentication
                      </p>
                    </div>
                    <div>
                      <img src={NextN} alt='' />
                    </div>
                    <div className='px-3'>
                      <a href=''>
                        <img src={arrowR} alt='' />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CaseStudyDetails
