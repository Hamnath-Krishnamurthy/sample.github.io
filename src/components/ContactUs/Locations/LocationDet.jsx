import React from "react";
import { locationDetails } from "./mockloc";

const LocationDet = () => {
  return (
    <div className="container">
      <h1 className="fnt-32 mt-5 fnt-600 px-4 text-bl-black">Our Location</h1>
      {locationDetails.map((item) => (
        <div className="row mt-md-4 mt-5 px-4">
          <div className="col-md-3">
            <div className="fnt-24-24 text-dark-blue fnt-600">{item.name}</div>
          </div>
          <div className="col-md-9">
            <div className="row ">
              {item.value.map((office) => (
                <div className="col-md-6 mb-md-4 mb-2 mt-3 mt-md-0">
                  <h5 className="fnt-16 txt-orange fnt-700">
                    {office.new_office}
                  </h5>
                  <p className="fnt-16 txt-black fnt-400 mb-2">
                    {office.address}
                  </p>
                  <div className="fnt-500 text-dark-blue fnt-16">
                    Email:
                    <span className="fnt-700 text-dark-blue ml-1">
                      {office.email}
                    </span>
                  </div>
                  <div className="fnt-500 text-dark-blue fnt-16">
                    Tel:
                    <span className="fnt-700 text-dark-blue ml-1">
                      {office.tel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationDet;
