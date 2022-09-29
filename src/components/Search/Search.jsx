import React, { useEffect, useState } from 'react'
import search from '../../assets/icons/search_grey.svg'
import { GlobalSearch } from '../Data/mockdata'
import Error404 from '../../assets/404/404.svg'
import logo from "../../assets/FAQ/v.svg";
import SearchIcon from '../SearchIcon/SearchIcon';
import ArrowDown from "../../assets/icons/arrow-down.svg";
const Search = () => {
  const [searchCount, setSearchCount] = useState(0)
  const [data, setData] = useState([])
  const [moreData,setMoreData] = useState(6)
  const [searchData, setSearchData] = useState('Fintech')

  useEffect(() => {
    setData(GlobalSearch)
  }, [searchData])

  const handleSearch = (e) => {
    setSearchData(e.target.value)
  }
  return (
    <>
    <div className='container my-4 globalSearch'>
      <div className='searchInputContainer mb-3'>
        <input
          type='search'
          placeholder='search'
          className='form-control form-control-lg searchInput'
          value={searchData}
          onChange={handleSearch}
        />
        {/* <img
          alt=''
          src={search}
          className='img-fluid'
      
        /> */}
        <SearchIcon insideInputTag={true} />
      </div>
      {
        data.length > 0 && (
          <>
            <p className='fnt-500 fnt-24 txt-primary text-center mt-5 mb-4'>No Results for <span className='fnt-400'>'Finteched'</span></p>
            <div className='d-flex justify-content-center mb-4'>
              <img className='img-fluid img_404' alt='' src={Error404} />
            </div>
            <p className='text-center fnt-400 fnt-16 txt-mild-grey'>We couldn't find a match for 'Finteched', but results for <span className='txt-primary'>'fintech'</span> are shown below </p>
          </>
        )
      }
      <p className='fnt-400 fnt-16 txt-orange mt-5 mt-md-0'>
        Search results ({searchCount}) for {searchData}
      </p>
      <div className='resultContainer'>
        <ul className='mb-5'>
          {data.slice(0, moreData).map((item) => (
            <li className='mb-3'>
              <div className='px-2'>
                <p className='text-black fnt-500 fnt-24 mb-1'>
                 {item.question}
                </p>
                <p className='fnt-500 fnt-14 txt-primary'>{item.category}</p>
                <p className='txt-black fnt-400 fnt-16'>
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-pri d-none d-lg-block mx-auto fnt-600 fnt-16 text-uppercase text-white' onClick={() => setMoreData((prev) => prev + 2)}>
            load more
          </button>
          <button
                className="btn-pri btn d-block d-lg-none mx-auto"
                data-type="rounded"
                onClick={() => setMoreData((prev) => prev + 2)}
              >
                <img src={ArrowDown} alt="" />
              </button>
        </div>
      </div>
    </div>
    <img src={logo} alt="" className="img-fluid faq_img d-lg-block d-none" />
    </>
  )
}

export default Search
