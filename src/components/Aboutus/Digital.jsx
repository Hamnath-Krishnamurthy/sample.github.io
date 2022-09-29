import React from "react";
import { DigitalData, Subscribers } from "./abtData";
import aboutimg from "../../assets/Banner/Abt.svg";
import aboutimg_1 from "../../assets/Banner/Abt_1.svg";
import aboutimg_2 from "../../assets/Banner/Abt_2.svg";
import aboutimg_3 from "../../assets/Banner/Abt_3.svg";
import aboutvec from "../../assets/icons/abt_vec.svg";
import curve from "../../assets/icons/stylecurve.svg";

const Digital = () => {
  return (
    <div className="marign-top-hd">
      <div className="container ">
        <div className="row mt-5">
          <div className="col-6 col-md-6 col-lg-6 pt-4">
            <div className="position-absolute curve-img">
              <img src={curve} alt="" className="img-fluid" />
            </div>
            <div className="d-flex  about_img">
              <div className="about_trans">
                <img src={aboutimg} alt="" className="" />
              </div>
              <div className="mx-0">
                <img src={aboutimg_1} alt="" className="mx-5" />
              </div>
            </div>
            <div className="d-flex mt-3 abt_img">
              <div className="trans_abt">
                <img src={aboutimg_2} alt="" />
              </div>
              <div className="mx-3 abt_img_trans">
                <img src={aboutimg_3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-6">
            {DigitalData.map((item) => (
              <div>
                <p className="mb-0 fnt-24 fnt-500 txt-orange">{item.title}</p>
                <h5 className="fnt-48 fnt-600 text-dark-blue">
                  {item.heading}
                </h5>
                <p className="mb-0 fnt-16 fnt-400 txt-black">{item.content}</p>
              </div>
            ))}
            <div className="row pt-5">
              {Subscribers.map((item) => (
                <div className="col-6 pb-5">
                  <img src={item.img} alt="" />
                  <p className="mb-0 txt-orange fnt-24 fnt-500">
                    {item.number}
                  </p>
                  <p className="mb-0 txt-black fnt-400 fnt-16">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
