import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ContactUs } from './pages/ContactUs'
import FAQS from './pages/FAQS'
import Error404 from './pages/Error404'
import GlobalSearch from './pages/GlobalSearch'
import CareersMain from './pages/CareersMain'
import CareersDetail from './pages/CareersDetails'
import NewsRoom from './pages/NewsRoom'
import CaseStudyMain from './pages/CaseStudy'
import ScrollToTop from './pages/ScrollToTop'
import NewsRoomDetails from './pages/NewsRoomDetails'
import CaseDetails from './pages/CaseDetails'
import BlogListing from './pages/BlogListing'
import BlogDetails from './pages/BlogDetails'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/company/aboutus' element={<AboutUs />} />
        <Route  path='/solutions/digitallending' element={<Home />} />

        <Route  path='/company/careers' element={<CareersMain />} />
        <Route  path='/company/careers/:id' element={<CareersDetail />} />
        <Route  path='/company/newsRoom' element={<NewsRoom/>} />
        <Route  path='/company/newsRoom/:slug' element={<NewsRoomDetails/>} />
        <Route  path='/contactUs' element={<ContactUs />} />
        <Route  path='/search' element={<GlobalSearch />} />
        <Route  path='/resources/faq' element={<FAQS />} />
        <Route  path='/resources/casestudy' element={<CaseStudyMain />} />
        <Route  path='/resources/casestudy/:slug' element={<CaseDetails />} />
        <Route  path='/resources/blogs' element={<BlogListing />} />
        <Route  path='/resources/blogs/:slug' element={<BlogDetails />} />
        <Route  path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
