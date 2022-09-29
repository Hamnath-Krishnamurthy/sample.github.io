import React, { useEffect, useState } from "react";
import { BannerImage } from "../../Banner/BannerImage";
import Cards from "../../Cards/Cards";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import { mockData } from "../../Data/mockdata";
import axios from "axios";
function News() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(0);
  const [tab1, setTab1] = useState("active");
  const [tab2, setTab2] = useState("not-active");
  const [tab3, setTab3] = useState("not-active");

  useEffect(() => {
    // setData(mockData);
    setVisible(6);
    (async () => {
      await axios
        .get(
          "http://projects.lollypop.design/pecto-wp/wp-json/wp-p/v1/newsrooms/"
        )
        .then((res) => setData(res.data))
        .catch((err)=>console.log(err))
    })();
  }, []);

  // const filterContent = (item, i) => {
  //   if (i === 1) {
  //     setTab1("active");
  //     setTab2("not-active");
  //     setTab3("not-active");

  //     setData(data);
  //   }
  //   if (i === 2) {
  //     setTab1("not-active");
  //     setTab2("active");
  //     setTab3("not-active");
  //     setData(data.slice(0, 3));
  //   }
  //   if (i === 3) {
  //     setTab1("");
  //     setTab2("");
  //     setTab3("active");
  //     setData(data.slice(0, 2));
  //   }
  // };

  return (
    <>
      <BannerImage />
      <div className="tabs">
        <div className="bg-white w-100 tabs__content h-75 mt-md-4 mb-4">
          <ul className="d-flex justify-content-between align-items-center py-3 ms-0 ms-lg-4 px-md-3 px-lg-0">
            <li>
              <a
                className={`${tab1} text-uppercase pointer`}
                // onClick={() => filterContent("business", 1)}
              >
                All
              </a>
            </li>
            <li>
              <a
                to=""
                className={`${tab2} pointer`}
                // onClick={() => filterContent("business", 2)}
              >
                Recent News
              </a>
            </li>
            <li>
              <a
                to=""
                className={`${tab3} pointer`}
                // onClick={() => filterContent("business", 3)}
              >
                Popular News
              </a>
            </li>
          </ul>
        </div>
        <div className="tabs__data">
          <div className="row">
            {data.slice(0, visible).map((content, index) => (
              <Cards index={index} key={index} content={content} rowsPerColumn={3} />
            ))}

            <div className="col-12 pt-4 pt-md-0 pb-lg-4 text-center">
              <button
                className="btn-pri btn text-uppercase fnt-600 mx-auto fnt-14 d-none d-lg-block"
                onClick={() => setVisible((prev) => prev + 3)}
              >
                load more
              </button>
              <button
                className="btn-pri btn d-block d-lg-none mx-auto"
                data-type="rounded"
                onClick={() => setVisible((prev) => prev + 3)}
              >
                <img src={ArrowDown} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
