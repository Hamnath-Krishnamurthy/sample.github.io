import React from "react";
import { generalDetails } from "./generaldetails";

const General = () => {
  return (
    <div className="bg-sky-200 mt-5">
      <div className="container">
        <div className="row px-5 py-5">
          {generalDetails.map((item) => (
            <div className="col-md-4 pt-3 pt-md-0">
              <div className="fnt-24 text-dark-blue fnt-700">
                {item.title}
              </div>
              <div
                className="fnt-16 txt-black pt-3 fnt-400"
                dangerouslySetInnerHTML={{ __html: item.text_general }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default General;
