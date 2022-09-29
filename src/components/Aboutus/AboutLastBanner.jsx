import React from "react";
import our_img from "../../assets/Banner/our_team.png";
import our_img_1 from "../../assets/Banner/our_team_1.png";
import our_img_2 from "../../assets/Banner/our_team_2.png";
import abt_vec from "../../assets/logos/abt_vec_bnr.svg";

const AboutLastBanner = () => {
  return (
    <div>
      <section className="company mt-5">
          <div className="position-absolute abt_lst ">
              <img src={abt_vec} alt="" />
          </div>
        <div className="container-fluid pt-5">
          <div className="row pt-4 pt-md-4">
            <div className="offset-md-1 offset-lg-1 col-lg-5">
              <p className="txt-orange fnt-24 fnt-500">Join our team</p>
              <h5 className="fnt-48 text-white fnt-600">
                Ready to accelerate new possibilities and inspire the world’s
                innovators?
              </h5>
              <button className="btn-white btn mt-3"> let's connect</button>
            </div>
            <div className="offset-lg-1 offset-md-1 col-md-4 col-lg-4 bnr-hd">
              <div className="d-flex">
                <div className="our_lst_img">
                  <img src={our_img} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={our_img_1} alt="" className="img-fluid mx-3" />
                </div>
              </div>
              <div className="our_img">
                <img src={our_img_2} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutLastBanner;
