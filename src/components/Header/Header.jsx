import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import Hamburger from '../../assets/icons/Hamburger.svg'
import Hamburger_White from '../../assets/icons/Hamburger_White.svg'
import Profile from '../../assets/icons/Profile.svg'
import white_profile from '../../assets/icons/profile_white.svg'
import Logo from '../../assets/logos/Logo.svg'
import WhiteLogo from '../../assets/logos/Pecto_White.svg'
import Mobile from '../../assets/logos/Mobile.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import HoverMenu from './HeaderHover/HoverMenu'
import digiImage from '../../assets/logos/digit-logo.svg'
import bank from '../../assets/icons/bank_line.svg'
import cellphone from '../../assets/icons/cellphone_line.svg'
import shopping from '../../assets/icons/shopping_cart_1_line.svg'
import store from '../../assets/icons/store_line.svg'
import user from '../../assets/icons/user_2_line.svg'
import wallet from '../../assets/icons/wallet_2_line.svg'
import './Header.scss'
import SearchIcon from '../SearchIcon/SearchIcon'

const menuItems = [
  {
    id: 1,
    item: "Solutions",
    styless: "w-100 sol-left",
    title: "By Industry",
    menuData: [
      {
        img: digiImage,
        img_text: 'Digital lending',
        link: '/solutions/digitallending',
      },
      {
        img: store,
        img_text: 'Online Aggregators (marketplaces) ',
        link: '/',
      },

      {
        img: bank,
        img_text: 'Buy now pay later',
        link: '/',
      },

      {
        img: user,
        img_text: 'Digital Insurance',
        link: '/',
      },
      {
        img: cellphone,
        img_text: 'Digital only banks (Neo banks)',
        link: '/',
      },
      {
        img: wallet,
        img_text: 'Gig economy',
        link: '/',
      },

      {
        img: shopping,
        img_text: 'Online Delivery',
        link: '/',
      },
    ],
  },
  {
    id: 2,
    item: "Developer",
    styless: "dev-width dev-left",
    title: "Developer",
    menuData: [
      {
        img: digiImage,
        img_text: 'Documentation',
        link: '/',
      },
      {
        img: store,
        img_text: 'API Status',
        link: '/',
      },
      {
        img: bank,
        img_text: 'API Reference',
        link: '/',
      },

      {
        img: user,
        img_text: 'Developer Newsletter',
        link: '/',
      },
    ],
  },
  {
    id: 3,
    item: "Company",
    styless: "comp-width comp-left",
    title: "Company",
    menuData: [
      {
        img: user,
        img_text: 'About Us',
        link: '/company/aboutus',
      },
      {
        img: bank,
        img_text: 'Careers',
        link: '/company/careers',
      },
      {
        img: cellphone,
        img_text: 'Newsroom',
        link: '/company/newsRoom',
      },
    ],
  },
  {
    id: 4,
    item: "Resources",
    styless: "res-width res-left",
    title: "Resources",
    menuData: [
      {
        img: user,
        img_text: 'Customer case studies',
        link: '/resources/casestudy',
      },
      {
        img: bank,
        img_text: 'Blogs',
        link: '/resources/blogs',
      },
      {
        img: cellphone,
        img_text: 'FAQs',
        link: '/resources/faq',
      },
    ],
  },
];

const Header = ({ background }) => {
  const [hoverMenu, setHoverMenu] = useState();
  const [active, setIsActive] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const data = [
    'Guides and reports',
    'Country Guides',
    'Payment method Guide',
    'Subscription method Guide',
  ]
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/search')
  }

  const SearchResult = useMemo(() => {
    return data
      .filter((item) => item.toLowerCase().includes(searchItem.toLowerCase()))
      .map((mapItem) =>
        mapItem.replace(
          new RegExp(searchItem, 'gi'),
          (match) => `<mark>${match}</mark>`
        )
      )
  }, [searchItem])

  const createMarkup = (html) => {
    return { __html: html }
  }

  return (
    <header data-type={background} className="d-flex align-items-center h-100">
      <div className="container my-4">
        <nav className="d-flex justify-content-between  fnt-600 fnt-16 ">
          <img
            alt=""
            className="img-fluid d-block d-lg-none"
            src={background === "primary" ? Hamburger : Hamburger_White}
          />
          <NavLink to="/">
            <img
              alt=""
              className="img-fluid ms-3 ms-md-0 logo"
              src={background === "primary" ? Logo : WhiteLogo}
            />
          </NavLink>
          <ul className="d-lg-flex position-relative justify-content-evenly w-60 ms-5 list-unstyled my-auto d-none">
            {menuItems.map(({ id, item, styless, menuData }) => (
              <li
                key={id}
                className={`txt-mild-black`}
                onMouseOver={() => setHoverMenu(id)}
                onMouseLeave={() => setHoverMenu()}
              >
                <NavLink
                  className={`txt-mild-black py-3 ${
                    id === hoverMenu && 'active'
                  }`}
                  to='/solutions'
                >
                  {item}
                </NavLink>
                {id === hoverMenu && (
                  <HoverMenu
                    className="pt-5"
                    menuData={menuData}
                    // title={title}
                    styless={styless}
                    id={id}
                  />
                )}
              </li>
            ))}
            <li>
              <NavLink className="txt-mild-black py-3" to="/contactUs">
                Contact us
              </NavLink>
            </li>
            {/* <li className="txt-mild-black" onMouseOver={()=> }>
                <NavLink className="txt-mild-black" to="/solutions">
                  Solutions
                </NavLink>

              </li>
              <li>
                <NavLink className="txt-mild-black" to="/developers">
                  Developer
                </NavLink>
              </li>
              <li>
                <NavLink className="txt-mild-black" to="/company">
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink className="txt-mild-black" to="/resources">
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink className="txt-mild-black" to="/contactus">
                  Contact us
                </NavLink>
              </li> */}
          </ul>
          <div className="d-flex">
            <button
              className="bg-transparent border-0 h-full me-4 me-lg-0"
              onClick={() => setIsActive(!active)}
            >
              {/* <img
                alt=''
                src={background === 'primary' ? search : white_search}
              /> */}
              <SearchIcon active={active} background={background} />
            </button>
            <button className="btn btn-md fnt-600 fnt-14  border signIn bg-white ms-4 text-uppercase d-none d-lg-block">
              sign in
            </button>
            <button className="bg-transparent border-0 h-full d-block d-lg-none">
              <img
                src={background === "primary" ? Profile : white_profile}
                alt=""
              />
            </button>
          </div>
        </nav>
        {/* <div className="cards d-lg-none">head</div> */}
      </div>
      <section
        className={`searchContainer bg-primary w-100 z-index ${
          active && "active"
        }`}
      >
        <div className="container">
          <div className="mx-auto content">
            <p className="fnt-600 fnt-48 text-white text-center mb-5">
              Search Pecto.com
            </p>

            <div className="searchField">
              {/* <img alt='' src={searchGrey} className='img-fluid'/> */}
              <SearchIcon
                active={false}
                background={background}
                insideInputTag={true}
              />
              <form onSubmit={handleSearch}>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Type your search here....'
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <button className='btn-pri btn text-uppercase fnt-600 fnt-16'>
                  search
                </button>
              </form>
            </div>

            <ul className='mt-3'>
              {searchItem &&
                SearchResult.map((data, index) => (
                  <li className='px-4' key={index}>
                    <div className='d-flex'>
                      <SearchIcon
                        insideInputTag={false}
                        background={'secondary'}
                      />
                      <p
                        className='fnt-16 fnt-300  ps-3 mb-3 dangerous'
                        dangerouslySetInnerHTML={createMarkup(data)}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {
  background: PropTypes.string.isRequired,
};

Header.defaultProps = {
  background: "primary",
};

export default Header;
