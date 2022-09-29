import React, { useEffect, useState } from "react";

import { Keybutton, keyListing } from "../../Data/keylisting";

const keywordsbtn = () => {
  // const [keyData, setKeydata] = useState([]);
  // const [selctedTitle, setSelctedTitle] = useState("All");

  // useEffect(() => {
  //   if (selctedTitle === "All") {
  //     setKeydata(keyListing);
  //   } else {
  //     setKeydata([...keyListing.filter((el) => el?.category === selctedTitle)]);
  //   }
  // }, [selctedTitle, keyListing]);

  return (
    <>
      <div>
        <h5 className="fnt-16 fnt-400 text-bl-black mx-2 mx-md-1 mt-2 mt-lg-0">
          Related keywords-search:{" "}
        </h5>
        {Keybutton.map((item) => (
          <button className="btn category-btn mx-2 my-2 mx-md-1 my-md-1 btn-md mt-2 mt-lg-0 fnt-14 fnt-700 rounded-pill txt-white btn-wd">
            {item.btn_name}
          </button>
        ))}
      </div>
    </>
  );
};

export default keywordsbtn;
