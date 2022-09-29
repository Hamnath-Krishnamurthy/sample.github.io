import React from "react";
import { blogDetails } from "../../Data/blogData";
import { useEffect, useState, useCallback } from "react";
import { blogdata } from "./blogsData";

const Details = ({ setSelctedTitle }) => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="">
      <h5 className="fnt-16 txt-orange fnt-600 d-none d-md-block d-lg-block">
        Category
      </h5>
      <div className="d-none d-md-block">
        <ul>
          {blogDetails.map((item, index) => (
            <div>
              <li className="fnt-16 mt-md-4 fnt-400 txt-black  d-flex justify-content-between li-brd">
                <button
                  className="outline-0 border-0 bg-white txt-black"
                  onClick={() => setSelctedTitle(item?.title)}
                >
                  {item.title}
                </button>
                <span className="fnt-16 fnt-400 txt-grey ">63</span>
              </li>
              {blogDetails.length === index + 1 ? null : (
                <hr className="round-blog-border " />
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="d-block d-lg-none d-md-none">
        <h5 className="fnt-16 txt-orange fnt-600">Category</h5>
        <select
          className={`fnt-16 txt-black form-select form-select-faq select  ${
            blogDetails.length < 0 && "mb-5 mb-lg-0"
          }`}
        >
          {blogDetails.map((data, index) => (
            <option
              key={data.id}
              value={data.title}
              selected={activeId === data.id && true}
            >
              {data.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Details;
