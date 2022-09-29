import React from "react";
import { recentDetails } from "./recentBlogs";
import "../../../../styles/pages/blogs.scss";

const Recent = () => {
  return (
    <div className="mt-4 recent-post">
      <h5 className="fnt-16 txt-orange fnt-600">Recent Post</h5>
      {recentDetails.map((item) => (
        <div className="post-hide">
          <div className="d-flex mt-4">
            <img src={item.img} alt="" />
            <div className="px-2">
              <p className="fnt-16 fnt-400 txt-black mb-0">{item.date}</p>
              <h5 className="fnt-16 fnt-600 text-dark-blue pt-1">
                {item.content}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recent;
