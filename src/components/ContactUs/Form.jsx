import React from "react";
import veclog from "../../assets/logos/Cont-vec.svg";

const Form = () => {
  return (
    <section>
      <div className="position-absolute d-none d-md-block back-img-con">
        <img src={veclog} alt="" height="150rem"/>
      </div>
      <div className="container">
        <p className="txt-black fnt-16 text-center py-5">
          Innovate, launch and scale card programs that suit your business
          needs. Let’s talk about your use case and how we can help.
        </p>

        <div className="form">
          <form className="row py-2 py-md-4 px-3 px-md-0">
            <div className="col-md-5 mb-3">
              <label htmlFor="fullname" className="form-label">
                Full name
                <span className="txt-red ms-1">*</span>
              </label>
              <input type="text" className="form-control" id="fullname" />
            </div>
            <div className="col-md-5 mb-4">
              <label htmlFor="email" className="form-label">
                Email ID
                <span className="txt-red ms-1">*</span>
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-5 mb-4">
              <label htmlFor="country" className="form-label">
                Country
                <span className="txt-red ms-1">*</span>
              </label>
              <select className="form-select select" id="country">
                <option selected>India</option>
                <option value="1">Australia</option>
                <option value="2">Russia</option>
                <option value="3">Dubai</option>
              </select>
            </div>
            <div className="col-md-5 mb-4">
              <label className="form-label">Mobile Number</label>
              <div className="row">
                <div className="col-4 col-md-3 col-lg-3">
                  <select className="form-select text-center">
                    <option selected>91</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-8 col-md-9 col-lg-9">
                  <input type={"tel"} className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <label htmlFor="fullname" className="form-label">
                Message
                {/* <span className="txt-red ms-1">*</span> */}
              </label>
              <textarea className="form-control" id="fullname" />
            </div>
            <div className="col-12 col-sm-10 condition">
              <div className="form-check py-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="conditions"
                  required
                />
                <label
                  className="form-check-label text-clr-cont"
                  for="conditions"
                >
                  I have read and accept the
                  <a
                    href="#"
                    className="text-decoration-underline txt-primary px-1"
                  >
                    terms & conditions
                  </a>
                  of the
                  <a
                    href="#"
                    className="text-decoration-underline txt-primary px-1"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <div className="col-12 text-center">
              <button className="btn-pri btn text-uppercase fnt-600 fnt-14">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
