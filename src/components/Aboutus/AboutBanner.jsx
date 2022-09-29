import React from "react";
import "./About.scss";
import abt_vec from "../../assets/logos/abt_vec_bnr.svg";
import abt_bnr from "../../assets/Banner/abt-bnr.png";
import abt_bnr_1 from "../../assets/Banner/abt-bnr_1.png";
import abt_bnr_2 from "../../assets/Banner/abt-bnr_2.png";
import abt_img_video from "../../assets/logos/abt_video.svg";

const AboutBanner = () => {
  return (
    <section className="company">
      <div className="position-absolute abt_frst_bnr ">
        <img src={abt_vec} alt="" />
      </div>
      <div className="container">
        <div className="row pt-4 pt-md-4">
          <div className="col-lg-5 col-12">
            <p className="txt-orange fnt-24 fnt-500">Company</p>
            <h5 className="fnt-48 text-white fnt-600">
              We are the world’s first modern card issuing platform
            </h5>
          </div>
          <div className="offset-md-1 offset-lg-1 col-md-5 col-lg-5 bnr-hd">
            <div className="d-flex">
              <a href="" className="position-absolute abt_vid px-2">
                <img src={abt_img_video} alt="" />
              </a>
              <div className="position-relative">
                <img src={abt_bnr_1} alt="" className="img-fluid" />
              </div>
              <div className="bnr_img">
                <img src={abt_bnr} alt="" className="img-fluid mx-3" />
              </div>
            </div>
            <div className="abt-img-bnr">
              <img src={abt_bnr_2} alt="" className="img-fluid mx-3 img-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
