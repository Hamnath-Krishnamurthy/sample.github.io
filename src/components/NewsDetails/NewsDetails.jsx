import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useLocation } from 'react-router-dom'
import { BreadCrumb } from '../Breadcrumbs/BreadCrumb'
import './NewsDetails.scss'
import newsbanner from '../../assets/Banner/Newsbanner.svg'
import newsrecent1 from '../../assets/Banner/Newsrecent1.svg'
import newsrecent2 from '../../assets/Banner/Newsrecent2.svg'
import newsrecent3 from '../../assets/Banner/Newsrecent3.svg'
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
import axios from 'axios'

const NewsDetails = () => {
  const { slug } = useParams()
  const { state } = useLocation()
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      await axios
        .get(
          // 'http://projects.lollypop.design//pecto-wp/wp-json/wp-p/v1/newsrooms/industry-experts-in-digital-payments/'
          `http://projects.lollypop.design//pecto-wp/wp-json/wp-p/v1/newsrooms/${state.slug}/`
        )
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    })()
  }, [])
  // console.log(data)

  return (
    <>
      <section className='main-section'>
        {
          data.map(value => (
            <div className='container'>
            <div className='row'>
              <div className='col-md-8 mx-auto col-12'>
                <div className='pt-4 d-none d-md-block'>
                  <BreadCrumb className='bread-news'>
                    <li className='breadcrumb-item '>
                      <span>Company</span>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      <NavLink to='/company/newsRoom'>NewsRoom</NavLink>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      <span>{slug}.</span>
                    </li>
                  </BreadCrumb>
                </div>
                <div className='mt-5 mt-md-0'>
                
                      <button key={data.id} className='outline-0 border-0 btn-orange btn-orng-brd fnt-14'>
                        {value.taxonomy[0].name}
                  </button>
                   
                </div>
                <div className='mt-md-4 mt-3'>
                  <h3 className='kyc-fnt fnt-48 text-dark-blue'>
                    {value.title}
                  </h3>
                </div>
                <div className='d-flex news-a'>
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
                <div className='pt-4'>
                  <p className='mb-0 fnt-16 txt-black'>
                    Posted on 9 June 2022 4:14 PM by John Simon
                  </p>
                </div>
              </div>
              <div className='col-md-12 mx-auto mt-4 col-12'>
                <img src={newsbanner} alt='' width='100%' height='auto' />
              </div>
            </div>
            <div className='row justify-content-end mt-md-5 mt-4'>
              <div className='col-md-6 col-12'>
                
                  <div
                    className='fnt-16 txt-black'
                    key={value.id}
                    dangerouslySetInnerHTML={{ __html: value.content }}
                  ></div>

  
                {/* <div className="mb-0 fnt-16 txt-black">
                  <p className="mb-0 fnt-16 txt-black">
                    The word “Remittance” means money sent to an individual in
                    another place. the latin origin of the word means “To let go
                    or to send.” As the human civilization evolved, so did
                    remittances. It was earlier a bill payment done via mail or a
                    cheque sent for an appliance purchase. But, today, remittances
                    are a much more complex phenomenon. It is hard-earned money of
                    the immigrants sent back home to their families. Until the
                    last decade, immigrants were heavily reliant on banks or FOREX
                    brokers to relay their earnings back home. It came associated
                    with a hefty fee and a longer waiting time of a week or more.
                    It involved multiple players, the differences in conversion
                    fees, processing fees, and so on.But, then again, over the
                    years, fintech's intervention has changed the remittance
                    landscape for the better.
                    <br />
                    <p></p> The primary advantage is the time taken to send the
                    funds across the border. What takes weeks to complete, Fintech
                    does it in seconds. They have turned the tables by providing
                    competitive exchange rates, which were almost close to
                    existing market rates. They have enabled multiple ways of
                    currency transfers where the remitter can send money via:
                    <br />
                    <p></p>
                    Enabling customers to see multiple exchanges fees at one place
                    and then make money transfer within the platform —
                    TransferWise (now Wise). Doing remittances in bulk and passing
                    on the savings
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="fnt-24">Internet-enabled smartphones</h3>
                  <p className="pt-md-4 mb-0 fnt-16 txt-black">
                    The advent of account-linked mobile wallets like Google Pay,
                    Apple Pay, Venmo has brought down the transactional fees to a
                    bare minimum or no fees at all. Meaning all the international
                    transfers happen through an app. They have provided the option
                    for the customer to choose their preferred method of payment,
                    right from the comfort of their homes. In fact, India holds
                    first place in the remittance industry. It has averaged US$76
                    billion in 2020, despite the general decline in remittance
                    across the globe as per World Bank. The main reason why India
                    is the leading country in the remittance index is because of
                    its large diaspora of expatriate population. It is closely
                    followed by China and Mexico in the second and third places,
                    respectively.
                  </p>
                  <p className="pt-4 mb-0 fnt-16 txt-black pb-md-0 pb-4">
                    Additionally, Fintech has unlocked vast amounts of user data,
                    helping to better understand user behavior. The data provides
                    utmost detail right down to the kind of phone used, frequency
                    of transfers, locations, etc.
                  </p>
                </div>
                <div className="mt-4 mt-md-4">
                  <h3 className="fnt-24">What are fintechs doing?</h3>
                  <p className=" pt-md-4 mb-0 fnt-16 txt-black">
                    From extending reach of their in-app payment and transfer
                    solutions, Fintechs are evolving how the age-old Exchanges
                    have been working. While tying up with Banks and Exchanges in
                    regions like GCC and executing remittances on their own in
                    regions like the USA & Europe.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="fnt-24">Extending banking to the unbanked:</h3>
                  <p className="pt-md-4 mb-0 fnt-16 txt-black">
                    Thee Fintech catering to low-income-income migrant workers,
                    primarily in the GCC, provides them with solutions like debit
                    cards, bill, payment, and mobile top-up facilities in-app.
                    These fintech players are extending banking to the unbanked,
                    giving them proper accounts, shopping online, and building
                    their credit histories. Such customers’ data will further help
                    them roll out services like Insurance and Credit (loans). —
                    NOW Money
                  </p>
                </div> */}
              </div>
              <div className='col-md-4 col-12'>
                <div className='d-none d-md-block'>
                  <h3 className='fnt-16 txt-orange'>Recent News Articles</h3>
                  <div className='d-flex mt-3'>
                    <img src={newsrecent1} alt='' width='97px' height='auto' />
                    <div className='px-3'>
                      <p className='mb-0 fnt-16 txt-black'>9 June 2022 4:14 PM</p>
                      <p className='mb-0 fnt-16 text-dark-blue'>
                        How issuers can mitigate payment card fraud
                      </p>
                    </div>
                  </div>
                  <hr className='horx-lin' />
                  <div className='d-flex mt-4'>
                    <img src={newsrecent2} alt='' width='97px' height='auto' />
                    <div className='px-3'>
                      <p className='mb-0 fnt-16 txt-black'>9 June 2022 4:14 PM</p>
                      <p className='mb-0 fnt-16 text-dark-blue'>
                        Prepaid cards 101- a definitive guide for growth and
                        profitability
                      </p>
                    </div>
                  </div>
                  <hr className='horx-lin' />
                  <div className='d-flex mt-4'>
                    <img src={newsrecent3} alt='' width='97px' height='auto' />
                    <div className='px-3'>
                      <p className='mb-0 fnt-16 txt-black'>9 June 2022 4:14 PM</p>
                      <p className='mb-0 fnt-16 text-dark-blue'>
                        Know your customer (KYC): the need for authentication
                      </p>
                    </div>
                  </div>
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
              <hr className='mt-5 brder-w offset-md-1 col-md-11 offset-lg-1 col-lg-11 col-12' />
            </div>
            <ul className='row justify-content-end mt-md-5 mt-3'>
              <li className='col-md-5 vl col-12 d-none d-md-block'>
                <div className='d-flex align-items-center'>
                  <div className='px-3'>
                    <a href=''>
                      <img src={arrowL} alt='' />
                    </a>
                  </div>
                  <div>
                    <img src={PrevN} alt='' />
                  </div>
                  <div className='px-3 text-start'>
                    <p className='mb-0 fnt-16 txt-black'>PREVIOUS NEWS</p>
                    <p className='mb-0 fnt-16 text-dark-blue'>
                      Prepaid cards 101- a definitive guide
                      <br /> for growth and profitability
                    </p>
                  </div>
                </div>
              </li>
              {/* <div className="vl"></div> */}
              <li className='col-md-5 vl col-12'>
                <div className='d-flex align-items-center'>
                  <div className='px-md-3 text-md-end'>
                    <p className='mb-0 fnt-16 txt-black'>NEXT NEWS</p>
                    <p className='mb-0 fnt-16 text-dark-blue'>
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
          ))
        }
       
      </section>
    </>
  )
}

export default NewsDetails
