import React, { useEffect,useState } from "react";
import { NavLink , useParams, useLocation} from "react-router-dom";
import { BreadCrumb } from "../Breadcrumbs/BreadCrumb";
import "../NewsDetails/NewsDetails.scss";
import blogsbnr from "../../assets/Banner/blogs-banner.png";
import twitterN from "../../assets/logos/twitterL.svg";
import facebkN from "../../assets/logos/facebk.svg";
import othimN from "../../assets/logos/othim.svg";
import linkedN from "../../assets/logos/linkedin.svg";
import arrowL from "../../assets/icons/arrow-left.svg";
import arrowR from "../../assets/icons/arrow-right.svg";
import PrevN from "../../assets/Banner/prevN.svg";
import NextN from "../../assets/Banner/nextN.svg";
import shareadd from "../../assets/icons/share-add.svg";
import lndin from "../../assets/icons/linkdin.svg";
import fcb from "../../assets/icons/facbklg.svg";
import twt from "../../assets/icons/twtrrr.svg";
import othri from "../../assets/icons/othimglg.svg";
import "./Blogdetails.scss";
import axios from "axios";

const BlogDetails = () => {
  const { slug } = useParams()
  const { state } = useLocation()
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      await axios
        .get(
          // 'http://projects.lollypop.design//pecto-wp/wp-json/wp-p/v1/newsrooms/industry-experts-in-digital-payments/'
          `http://projects.lollypop.design//pecto-wp/wp-json/wp/v2/posts/${state.id}/`
        )
        .then((res) => setData([res.data]))
        .catch((err) => console.log(err))
    })()
  }, [])

  return (
    <>
      <section className="main-section-1">
        {
          data.map(value => (
            <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto col-12">
              <div className="pt-4 d-none d-md-block">
                <BreadCrumb>
                  <li className="breadcrumb-item">
                    <span >Resource</span>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <NavLink to='/resources/blogs/'>News</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span>
                      {slug}
                    </span>
                  </li>
                </BreadCrumb>
              </div>
              <div className="mt-5 mt-md-0 d-none d-md-block">
                <button className="outline-0 border-0 btn-blog-org fnt-14">
                  Engineering & APIs
                </button>
              </div>
              <div className="mt-5 mt-md-0 d-md-none">
                <button className="outline-0 border-0 btn-orng-brd btn-orange fnt-14">
                  Finance
                </button>
              </div>
              <div className="mt-md-4 mt-3">
                <h3 className="kyc-fnt fnt-48 text-dark-blue">
                 {value.title.rendered}
                </h3>
              </div>
              <div className="d-flex blog-a">
                <a href="" className="fnt-16 fnt-14-14 txt-orange">
                  #Banking serivces
                </a>
                <a href="" className="fnt-16 fnt-14-14 txt-orange mx-2 mx-md-4">
                  #Finance
                </a>
                <a href="" className="fnt-16 fnt-14-14 txt-orange">
                  #Crypto
                </a>
                <a href="" className="fnt-16 fnt-14-14 txt-orange mx-2 mx-md-4">
                  #Business
                </a>
              </div>
              <div className="pt-4">
                <p className="mb-0 fnt-16 txt-black">
                  {
                    `Posted on ${new Date(value.date)} by John Simon`
                  }
                </p>
              </div>
            </div>
            <div className="col-md-12 mx-auto mt-4 col-12">
              <img src={blogsbnr} alt="" width="100%" height="auto" />
            </div>
          </div>
          <div className="row mt-md-5 mt-4">
            <div className="offset-md-1 col-md-8 col-12">
              <div className="mb-0 fnt-16 txt-black"  dangerouslySetInnerHTML={{ __html: value.content.rendered }} />
                
            </div>
            <div className="col-md-3 col-12">
              <div className="content d-md-none">
                <input type="checkbox" id="click" />
                <label for="click" className="share-btn">
                  <span className="fas fa-share-alt">
                    <img src={shareadd} alt="" />
                  </span>
                  <a href="/">
                    <img src={twt} alt="" />
                  </a>
                  <a href="/">
                    <img src={fcb} alt="" />
                  </a>
                  <a href="/">
                    <img src={lndin} alt="" />
                  </a>
                  <a href="/">
                    <img src={othri} alt="" />
                  </a>
                </label>
              </div>
              <div className="sec-tiwter d-none d-md-block">
                <div className="d-none d-md-block">
                  <div>
                    <p className="mb-3 fnt-16 text-black text-end fnt-barlow-600 px-2">
                      Share
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="">
                      <div>
                        <a href="">
                          <img src={twitterN} alt="" />
                        </a>
                      </div>
                      <div className="mt-3">
                        <a href="">
                          <img src={linkedN} alt="" />
                        </a>
                      </div>
                      <div className="mt-3">
                        <a href="">
                          <img src={facebkN} alt="" />
                        </a>
                      </div>
                      <div className="mt-3">
                        <a href="">
                          <img src={othimN} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-5 brder-w offset-md-1 col-md-11 offset-lg-1 col-lg-11 col-12" />
          </div>
          <ul className="row mt-md-5 mt-3">
            <li className="offset-md-1 col-md-5 vl col-12 d-none d-md-block">
              <div className="d-flex align-items-center">
                <div className="px-md-1 px-lg-4 px-3">
                  <a href="">
                    <img src={arrowL} alt="" />
                  </a>
                </div>
                <div>
                  <img src={PrevN} alt="" />
                </div>
                <div className="px-md-2 px-3  text-start">
                  <p className="mb-0 fnt-16 txt-black">PREVIOUS NEWS</p>
                  <p className="mb-0 fnt-16 text-dark-blue">
                    Prepaid cards 101- a definitive guide
                    <br className="d-none d-md-none d-lg-block" /> for growth
                    and profitability
                  </p>
                </div>
              </div>
            </li>
            {/* <div className="vl"></div> */}
            <li className="col-md-6 vl col-12">
              <div className="d-flex align-items-center">
                <div className="px-3  text-end">
                  <p className="mb-0 fnt-16 txt-black">NEXT NEWS</p>
                  <p className="mb-0 fnt-16 text-dark-blue">
                    Know your customer (KYC)
                    <br className="d-none d-md-none d-lg-block" /> the need for
                    authentication
                  </p>
                </div>
                <div>
                  <img src={NextN} alt="" />
                </div>
                <div className="px-md-1 px-lg-4 px-3">
                  <a href="">
                    <img src={arrowR} alt="" />
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
  );
};

export default BlogDetails;
