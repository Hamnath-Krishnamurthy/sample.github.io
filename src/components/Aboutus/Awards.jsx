import { mapRange } from "gsap";
import { title } from "process";
import React from "react";
import award_lg from "../../assets/logos/award_logo.png";
import { awardsDetails } from "./abtData";

import "./About.scss";
import SwiperData from "./Swiper";

const Awards = () => {
  return (
    <div>
      <div className="container mt-5">
        {awardsDetails.map((item) => (
          <div className="row">
            <div>
              <h5 className="fnt-48 text-center fnt-600 text-dark-blue">
                {item.title}
              </h5>
              <p className="fnt-16 fnt-400 text-center txt-black">
                {item.content}
              </p>
            </div>
            {item.awards.map((el) => (
              <div className="col-lg-4 mt-4">
                <div className="text-center">
                  <img src={el.img} alt="" />
                  <p className="mb-0 pt-3 fnt-16 fnt-600 text-ligt-grey">
                    {el.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <SwiperData className="mt-5"/>
    </div>
  );
};

export default Awards;
