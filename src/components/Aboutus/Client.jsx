import React from "react";
import "./About.scss";
import pizza from "../../assets/Banner/pizza.png";
import quotes from "../../assets/logos/quotes.svg";
import swiggy_1 from "../../assets/Banner/swig.svg";
import uber from "../../assets/Banner/uber.png";
import shopify from "../../assets/Banner/shopify.png";
import uber_1 from "../../assets/Banner/uber.svg";
import shopi from "../../assets/Banner/shopify_1.svg";

const Client = () => {
  // const clientData = [
  //   {
  //     img: pizza,
  //     title: "Helped us improve productivity",
  //     content:
  //       "Swiggy’s mission is to deliver ordered products that people love, and MCIP’s unique technology provides us the platform and services to help make that possible.",
  //     name: "Santosh ",
  //     designation: "Product manager",
  //     values: [
  //       {
  //         earnings: "Weekly Earning details",
  //         date: "Today, May 16",
  //         price: "INR 97",
  //         kitchen: "Om Sweet & Snacks",
  //         rupees: "INR 32",
  //         delivery: "Delivered | 2:45pm",
  //         center: "Briyani Centre",
  //         center_price: "INR 32",
  //         center_delivery: "Delivered | 2:45pm",
  //         last_kitchen: "Kerala Kitchen",
  //         last_price: "INR 32",
  //         last_delivery: "Delivered | 2:45pm",
  //         button_txt: "Yesterday, May 17",
  //         button_price: "INR 97",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="marign-top-hd">
      <div className="container mt-5">
        <div className="row">
          <h5 className="fnt-48 fnt-600 text-dark-blue mb-5">
            What our clients say
          </h5>
          <div className="offset-md-1 col-md-5">
            <div>
              <div className="position-absolute cli-box-shd">
                <div className="">
                  <h5 className=" pt-3 text-center fnt-12 fnt-600 txt-orange">
                    Weekly Earning details
                  </h5>
                  <div className="bg-f2f3ff brd-radius mx-4 px-3 pt-3 pb-3">
                    <p className="mb-0 brd-p">Today, May 16</p>
                    <p className="mb-0 brd-p">INR 97</p>
                    <p className="mb-0 brd-1-p">Om Sweet & Snacks</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                    <p className="mb-0 brd-1-p">Briyani Centre</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                    <p className="mb-0 brd-1-p">Kerala Kitchen</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                  </div>
                  <div className="bg-00000 bg-btn mx-4 mt-2 px-3">
                    <p className=" fnt-600 txt-white mb-0 ">
                      Yesterday, May 17
                    </p>
                    <p className=" fnt-600 txt-white mb-0"> INR 97</p>
                  </div>
                </div>
              </div>
              <div className=" position-absolute box-shd">
                <img src={swiggy_1} alt="" />
              </div>
              <div className="position-relative ">
                <img src={pizza} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className=" offset-md-1 col-md-5">
            <img src={quotes} alt="" />
            <h5 className="fnt-24 fnt-500 text-bl-black mt-5">
              Helped us improve productivity
            </h5>
            <p className="fnt-16 fnt-400 txt-black mb-5">
              Swiggy’s mission is to deliver ordered products that people love,
              and MCIP’s unique technology provides us the platform and services
              to help make that possible.
            </p>
            <div className="mt-5">
              <h4 className="fnt-16 fnt-700 txt-black">Santosh</h4>
              <p className="fnt-16 fnt-400 txt-black mb-0"> Product manager</p>
              <button className="case-study-btn mt-5">view Case study</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="offset-md-1 col-md-5">
            <div>
              <div className="position-absolute cli-box-shd_1">
                <div className="">
                  <h5 className=" pt-3 text-center fnt-12 fnt-600 txt-orange">
                    Weekly Earning details
                  </h5>
                  <div className="bg-f2f3ff brd-radius mx-4 px-3 pt-3 pb-3">
                    <p className="mb-0 brd-p">Today, May 16</p>
                    <p className="mb-0 brd-p">INR 97</p>
                    <p className="mb-0 brd-1-p">Om Sweet & Snacks</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                    <p className="mb-0 brd-1-p">Briyani Centre</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                    <p className="mb-0 brd-1-p">Kerala Kitchen</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                  </div>
                  <div className="bg-00000 bg-btn mx-4 mt-2 px-3">
                    <p className=" fnt-600 txt-white mb-0 ">
                      Yesterday, May 17
                    </p>
                    <p className=" fnt-600 txt-white mb-0"> INR 97</p>
                  </div>
                </div>
              </div>
              <div className=" position-absolute box-shd_1">
                <img src={uber_1} alt="" />
              </div>
              <div className="position-relative ">
                <img src={uber} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className=" offset-md-1 col-md-5">
            <img src={quotes} alt="" />
            <h5 className="fnt-24 fnt-500 text-bl-black mt-5">
              Helped us improve productivity
            </h5>
            <p className="fnt-16 fnt-400 txt-black mb-5">
              Swiggy’s mission is to deliver ordered products that people love,
              and MCIP’s unique technology provides us the platform and services
              to help make that possible.
            </p>
            <div className="mt-5">
              <h4 className="fnt-16 fnt-700 txt-black">Santosh</h4>
              <p className="fnt-16 fnt-400 txt-black mb-0"> Product manager</p>
              <button className="case-study-btn mt-5">view Case study</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="offset-md-1 col-md-5">
            <div>
              <div className="position-absolute cli-box-shd_2">
                <div className="">
                  <h5 className=" pt-3 text-center fnt-12 fnt-600 txt-orange">
                    Weekly Earning details
                  </h5>
                  <div className="bg-f2f3ff brd-radius mx-4 px-3 pt-3 pb-3">
                    <p className="mb-0 brd-p">Today, May 16</p>
                    <p className="mb-0 brd-p">INR 97</p>
                    <p className="mb-0 brd-1-p">Om Sweet & Snacks</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                    <p className="mb-0 brd-1-p">Briyani Centre</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                    <p className="mb-0 brd-1-p">Kerala Kitchen</p>
                    <p className="mb-0 brd-1-p">INR 32</p>
                    <p className="mb-0 del-p">Delivered | 2:45pm</p>
                  </div>
                  <div className="bg-00000 bg-btn mx-4 mt-2 px-3">
                    <p className=" fnt-600 txt-white mb-0 ">
                      Yesterday, May 17
                    </p>
                    <p className=" fnt-600 txt-white mb-0"> INR 97</p>
                  </div>
                </div>
              </div>
              <div className=" position-absolute box-shd_2">
                <img src={shopi} alt="" />
              </div>
              <div className="position-relative ">
                <img src={shopify} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className=" offset-md-1 col-md-5">
            <img src={quotes} alt="" />
            <h5 className="fnt-24 fnt-500 text-bl-black mt-5">
              Helped us improve productivity
            </h5>
            <p className="fnt-16 fnt-400 txt-black mb-5">
              Swiggy’s mission is to deliver ordered products that people love,
              and MCIP’s unique technology provides us the platform and services
              to help make that possible.
            </p>
            <div className="mt-5">
              <h4 className="fnt-16 fnt-700 txt-black">Santosh</h4>
              <p className="fnt-16 fnt-400 txt-black mb-0"> Product manager</p>
              <button className="case-study-btn mt-5">view Case study</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
