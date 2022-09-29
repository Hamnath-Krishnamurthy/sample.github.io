import React from "react";
import contactbnr from "../../assets/Banner/contact-join.svg";
import contactbner from "../../assets/Banner/contact-join-1.svg";
import "./Contactus.scss";
import vecLogoCon from "../../assets/logos/contact-vec.svg";

const LastBanner = () => {
  return (
    <section className="sec-ct-us">
      <div className="desk-vec">
        <img src={vecLogoCon} alt="" className="img-hgh" />
      </div>
      <div className="container-fluid">
        <div className="row pt-5 pt-md-5">
          <div className="offset-md-1  offset-lg-2 col-lg-5 col-12">
            <p className="txt-orange fnt-24 fnt-500 pt-3 mb-0 px-xxl-1">
              Join our team
            </p>
            <h3 className="fnt-48 fnt-600 txt-white pt-3 px-xxl-1 ">
              Ready to accelerate new possibilities and inspire the world's
              innovators?
            </h3>
            <button className="btn-pri-loc btn text-uppercase fnt-600 fnt-14 mt-2 mb-lg-5 mb-0">
              View open positions
            </button>
          </div>
          <div className="col-lg-5 col-12">
            <div className="row d-flex  lastbanr align-items-end">
              <div className="col-xxl-4 col-md-5 lastbanr__loc col-5 contct-img ">
                <img
                  src={contactbnr}
                  className=""
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-xxl-4 col-md-5 lastbanr__loc col-5 contct-img-1">
                <img src={contactbner} alt="" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastBanner;
