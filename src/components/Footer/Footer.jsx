import React from "react";
import "./Footer.scss";
import Accordion from "react-bootstrap/Accordion";
import footerlogo from "../../assets/logos/FooterLogo.png";
import facebook from "../../assets/logos/FaceBook.png";
import linkedin from "../../assets/logos/LinkedIn.png";
import twitter from "../../assets/logos/Twitter.png";
import youtube from "../../assets/logos/Youtube.png";
import vector from "../../assets/logos/Vector.png";
import veclogo from "../../assets/logos/VecLogo.png";
import { NavLink } from "react-router-dom";

const FooterCode = () => {
  return (
    <>
      {/* 01 */}
      <footer className="footer-sec position-relative">
        <div className="position-absolute top-0 bottom-0 d-flex align-items-end">
          <img src={veclogo} alt="" width="100px" height="auto" />
        </div>
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-3 col-12">
              <div className="pt-md-0 mb-4 pt-4">
                <a href="">
                  <img src={footerlogo} alt="" width="145px" height="auto" />
                </a>
              </div>
              <div className="d-none d-md-block">
                <div className="d-flex">
                  <a href="/">
                    <img src={facebook} alt="" width="32px" height="auto" />
                  </a>
                  <a href="/" className="px-2">
                    <img src={twitter} alt="" width="32px" height="auto" />
                  </a>
                  <a href="/">
                    <img src={linkedin} alt="" width="32px" height="auto" />
                  </a>
                  <a href="/" className="px-2">
                    <img src={youtube} alt="" width="32px" height="auto" />
                  </a>
                </div>
                <div className="mt-2 px-3 px-md-2 fnt-16 pect-2022">
                  © 2022 Pecto, Inc.
                </div>
              </div>
            </div>
            <div className="offset-md-1 col-md-8">
              <div className="bg-shd bg-f2f3ff">
                <div className="d-md-flex">
                  <div className="w-75">
                    <h3 className="fnt-24 fnt-500 text-black mb-0">
                      Want to stay up to date?
                    </h3>
                    <p className="fnt-16">Subscribe with us</p>
                  </div>
                  <div className="w-100 position-relative m-auto">
                    <input
                      className="email-brd-bx w-100 m-0 border-0 "
                      type="text"
                      placeholder="Email id"
                    />
                    <button className="position-absolute fnt-14 sub-btn end-0 bg-white text-uppercase txt-primary fnt-600">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-md-5 mt-3">
            <div className="offset-md-4 col-md-8">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-none d-md-block">
                  <div>
                    <ul>
                      <h1 className="li-hd">Solutions</h1>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <NavLink to='/'>
                          <li className="lit-sty">Digital Lending</li>
                        </NavLink>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">Buy now, Pay later</li>
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">Neo Banks</li>
                        </a>
                      </div>
                      <div className="d-flex align-items-center ">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">Online Delivery</li>
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">Digital Insurance</li>
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">Gig Economy</li>
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-none d-md-block">
                  <div>
                    <ul className="">
                      <h1 className="li-hd">Developers</h1>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">Documentation</li>
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">API Reference</li>
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">API Status</li>
                        </a>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <a href="">
                          <li className="lit-sty">Developer Newsletter</li>
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-none d-md-block">
                  <div>
                    <ul className="">
                      <h1 className="li-hd">Resources</h1>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <NavLink to='/resources/casestudy'>
                          <li className="lit-sty">Case Studie's</li>
                        </NavLink>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <NavLink to="/resources/blogs">
                          <li className="lit-sty">Blog</li>
                        </NavLink>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <NavLink to="/resources/faq">
                          <li className="lit-sty">FAQ’s</li>
                        </NavLink>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-none d-md-block">
                  <div>
                    <ul className="">
                      <h1 className="li-hd">Company</h1>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <NavLink to="/company/aboutus">
                          <li className="lit-sty">About</li>
                        </NavLink>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <NavLink to="/company/careers">
                          <li className="lit-sty">Careers</li>
                        </NavLink>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={vector}
                          alt=""
                          width="6.78px"
                          height="7.53px"
                        />
                        <NavLink to="/company/newsRoom">
                          <li className="lit-sty">Newsroom</li>
                        </NavLink>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row d-md-none d-block mb-md-5 mb-2">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h1 className="li-hd">Solutions</h1>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="col-md-3">
                        <div>
                          <ul>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <NavLink to="/">
                                <li className="lit-sty">Digital Lending</li>
                              </NavLink>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">Buy now, Pay later</li>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">Neo Banks</li>
                              </a>
                            </div>
                            <div className="d-flex align-items-center ">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">Online Delivery</li>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">Digital Insurance</li>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">Gig Economy</li>
                              </a>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h1 className="li-hd">Developers</h1>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="col-md-3">
                        <div>
                          <ul className="">
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">Documentation</li>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">API Reference</li>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">API Status</li>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <a href="">
                                <li className="lit-sty">
                                  Developer Newsletter
                                </li>
                              </a>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h1 className="li-hd">Resources</h1>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="col-md-3">
                        <div>
                          <ul className="">
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <NavLink to="/resources/casestudy">
                                <li className="lit-sty">Case Studie's</li>
                              </NavLink>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <NavLink to="/resources/blogs">
                                <li className="lit-sty">Blog</li>
                              </NavLink>
                            </div>
                            <div className="d-flex align-items-center">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              <NavLink to="/resources/faq">
                                <li className="lit-sty">FAQ’s</li>
                              </NavLink>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h1 className="li-hd">Company</h1>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="col-md-3">
                        <div>
                          <ul className="">
                            <li className="d-flex align-items-center">
                            <NavLink to="/company/aboutus">

                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                                <span className="lit-sty">About</span>
                              </NavLink>
                            </li>
                            <li className="d-flex align-items-center">
                            <NavLink to="/company/careers">

                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                                <span className="lit-sty">Careers</span>
                              </NavLink>
                            </li>
                            <li className="d-flex align-items-center">
                            <NavLink to="/company/newsRoom">
                              <img
                                src={vector}
                                alt=""
                                width="6.78px"
                                height="7.53px"
                              />
                              
                                <span className="lit-sty">Newsroom</span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row pb-5 pb-md-2">
            <div className="col-md-3 col-lg-3 col-xl-3 d-md-none ">
              <div className="d-flex justify-content-end">
                <a href="/">
                  <img src={facebook} alt="" width="32px" height="auto" />
                </a>
                <a href="/" className="px-2">
                  <img src={twitter} alt="" width="32px" height="auto" />
                </a>
                <a href="/">
                  <img src={linkedin} alt="" width="32px" height="auto" />
                </a>
                <a href="/" className="px-2">
                  <img src={youtube} alt="" width="32px" height="auto" />
                </a>
              </div>
              <div className="mt-2 px-3 px-md-3 text-end fnt-16 pect-2022">
                © 2022 Pecto, Inc.
              </div>
            </div>
            <div className="offset-md-1  offset-lg-2 col-lg-7 col-md-8 pt-md-4 pt-0 pb-3 pb-md-0">
              <div className="row">
                <div className="offset-lg-6 offset-md-4 col-md-12 col-lg-10">
                  <div className="d-block d-md-flex justify-content-end ">
                    <div>
                      <a href="" className="px-0 px-md-3 fnt-16 pect-clr">
                        Cookie Policy
                      </a>
                    </div>
                    <div className="">
                      <a
                        href=""
                        className="px-0 px-md-3 py-3 py-md-0 fnt-16 pect-clr"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div>
                      <a href="" className="px-0 px-md-3 fnt-16 pect-clr">
                        Terms and Conditions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCode;
