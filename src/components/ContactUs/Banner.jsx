import React from "react";
import Banner1 from "../../assets/Banner/Banner_contact.svg";

const Banner = () => {
  return (
    <>
      <div className="bg-primary banner position-relative">
        <p className="fnt-48 txt-white text-center d-flex justify-content-center align-items-center h-100 fnt-600">
          We are the world’s first modern card issuing platform
        </p>
        <img alt="" src={Banner1} className="imgfluid" />
        <img alt="" src={Banner1} className="imgfluid" />
      </div>
    </>
  );
};

export default Banner;
