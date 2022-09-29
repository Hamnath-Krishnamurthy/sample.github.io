import React, { useEffect, useState } from "react";
import { BannerImage } from "../../Banner/BannerImage";
import BlogCards from "./BlogCards";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import { mockData } from "../../Data/mockdata";
import Details from "./Details";
import Recent from "./RecentBlogs/Recent";
import { blogdata } from "./blogsData";
import { BannerImage_Blogs } from "./BannerImage_Bolgs";
import axios from 'axios'
const Blog = () => {
  const [data, setData] = useState([]);
  const [selctedTitle, setSelctedTitle] = useState("All");
  const [visible, setVisible] = useState(6);


  useEffect(()=>{
    (async () => {
      await axios
        .get(
          "http://projects.lollypop.design//pecto-wp/wp-json/wp/v2/posts/"
        )
        .then((res) => setData(res.data))
        .catch((err)=>console.log(err))
    })();
  },[])

  // useEffect(() => {
  //   if (selctedTitle === "All") {
  //     setData(blogdata);
  //   } else {
  //     setData([...blogdata.filter((el) => el?.btn_content === selctedTitle)]);
  //   }
  // }, [selctedTitle, blogdata]);

  return (
    <>
      <BannerImage_Blogs />
      <div className="tabs">
        <div className="tabs__data mt-md-5 row">
          <div className="col-lg-8 col-12 pt-4 pt-md-0 pb-lg-4 order-2 order-lg-1 mt-md-4 mt-lg-0 mt-0">
            <div className="row">
              {data.slice(0, visible).map((content, index) => (
                <BlogCards index={index} content={content} rowsPerColumn={2} />
              ))}
            </div>
            <div className="pt-4 pt-md-0 pb-lg-4 text-center">
              <button
                className="btn-pri btn text-uppercase fnt-600 mx-auto fnt-14 d-none d-lg-block"
                onClick={() => setVisible((prev) => prev + 2)}
              >
                load more
              </button>
              <button
                className="btn-pri btn d-block d-lg-none mx-auto"
                data-type="rounded"
                onClick={() => setVisible((prev) => prev + 2)}
              >
                <img src={ArrowDown} alt="" />
              </button>
            </div>
          </div>
          <div className="d-block d-lg-none">
            <Details
              setSelctedTitle={setSelctedTitle}
              className="order-xl-2 order-lg-2"
            />
          </div>
          <div className="col-lg-4 col-12 order-2 order-lg-2">
            <div className="d-none d-lg-block">
              <Details
                setSelctedTitle={setSelctedTitle}
                className="order-xl-2 order-lg-2 d-none d-lg-block"
              />
            </div>
            <div>
              <Recent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
