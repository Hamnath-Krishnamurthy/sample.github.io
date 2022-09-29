import React from "react";
import { OurStoryDetails } from "./abtData";
import purimg from "../../assets/Banner/purpose_img.svg";

const OurStory = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {OurStoryDetails.map((item) => (
            <div className="col-5 col-md-5 col-lg-5">
              <p className="mb-0 txt-orange fnt-24 fnt-500">{item.title}</p>
              <h5 className="fnt-48 fnt-600 text-blue-drk">{item.heading}</h5>
              <p className="fnt-16 fnt-400 txt-black">{item.content}</p>
            </div>
          ))}
          <div className="offset-md-1 offset-lg-1 col-5 col-md-5 col-lg-5">
            {OurStoryDetails.map((el) => (
              <div>
                <img src={el.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
