import React from "react";
import { keyListing } from "../../Data/keylisting";
import ArrowDown from "../../../assets/icons/arrow-down.svg";
import KeyWordsBtn from "./KeyWordsBtn";
import "../../../styles/pages/blogs.scss";
import vector from "../../../assets/logos/Cont-vec.svg";
import "../../../styles/pages/blogs.scss";

const Keywords = () => {
  return (
    <>
      <section className="position-relative mt-3">
        <div className="position-absolute key-pos d-none d-md-block">
          <img src={vector} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <h5 className="txt-orange fnt-24-24 fnt-500">
                #Business{" "}
                <span className="txt-grey-grey fnt-24-24 fnt-500">
                  search results (35)
                </span>
              </h5>
              {keyListing.map((item, index) => (
                <>
                  <div className="mt-lg-5 mt-3">
                    <h5 className="fnt-24-24 text-bl-black fnt-500">
                      {item.question}
                    </h5>
                    <p className="fnt-14 text-dark-blue fnt-500">
                      {item.category}
                    </p>
                    <p className="txt-black fnt-16 fnt-400">{item.answer}</p>

                    {keyListing.length === index + 1 ? null : (
                      <hr className="round-blog-border " />
                    )}
                  </div>
                </>
              ))}

              {/**Small screen hide next line */}
              <hr className="round-blog-border d-none d-lg-block" />

              <div className="pt-4 pt-md-0 pb-lg-4 text-center">
                <button
                  className="btn-pri btn text-uppercase fnt-600 mx-auto fnt-14 d-none d-lg-block "
                  //     onClick={() => setVisible((prev) => prev + 2)}
                >
                  load more
                </button>
                <button
                  className="btn-pri btn d-block d-lg-none mx-auto"
                  data-type="rounded"
                  // onClick={() => setVisible((prev) => prev + 2)}
                >
                  <img src={ArrowDown} alt="" />
                </button>

                {/**Large screen hide next line */}
                <hr className="round-blog-border mt-4 d-lg-none d-block" />

              </div>
            </div>
            <div className="col-lg-3 col-12">
              <KeyWordsBtn />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Keywords;
