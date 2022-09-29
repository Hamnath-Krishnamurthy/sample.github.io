import React, { useState, useEffect } from "react";
import company_Abt from "../../assets/Banner/company_1.png";
import company_2_abt from "../../assets/Banner/company_2.png";
import "./About.scss";
import curve from "../../assets/icons/stylecurve_2.svg";

const Stepper = () => {
  const [showStep, setshowStep] = useState(1);

  // useEffect(() => {
  //   showAutoStepper();
  // });
  // var i = 0;
  // const showAutoStepper = (i) => {
  //   // setTimeout(handleStepperActive(showStep => showStep < 6 ? showStep + 1 : 0 ),10000)
  //   for (i = showStep; i < 6; i++) {
  //     setTimeout(() => setshowStep(i), 1000);
  //   }
  // };

  const handleStepperActive = (id) => {
    setshowStep(id);
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    if (windowSize.innerWidth >1023){
      setTimeout(() => {
       setshowStep((prevState) => (prevState < 6 ? prevState + 1 : 1))
      }, 5000)
    }
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearTimeout()
    };
  }, [showStep,windowSize.innerWidth]);

  console.log("ID bolte", showStep);
  return (
    <>
      <div className="bg-primary pt-5 pb-5">
        <div className="container-fluid">
          <div className="row mx-5">
            <div className="col-md-5">
              <h5 className="fnt-48 fnt-600 text-white">Company milestones</h5>
              <div class="stepper d-flex flex-column mt-5 ml-2">
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div
                      class="rounded-circle px-2 bg-white text-primary mb-1"
                      onClick={() => handleStepperActive(1)}
                    >
                      1
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <h5 class="text-white fnt-24 fnt-500">Our First step</h5>
                    {showStep === 1 && (
                      <p class="fnt-16 fnt-400 text-white pb-5">
                        Comviva a telecommunications company was
                        <br /> founded in Gurgaon, Haryana
                      </p>
                    )}
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div
                      class="rounded-circle px-2 bg-white text-primary mb-1"
                      onClick={() => handleStepperActive(2)}
                    >
                      2
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <h5 class="text-white fnt-24 fnt-500">Our journey </h5>
                    {showStep === 2 && (
                      <p class="fnt-16 fnt-400 text-white pb-5">
                        Comviva a telecommunications company was
                        <br /> founded in Gurgaon, Haryana
                      </p>
                    )}
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div
                      class="rounded-circle px-2 bg-white text-white mb-1"
                      onClick={() => handleStepperActive(3)}
                    >
                      3
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <h5 class="text-white fnt-24 fnt-500">Our journey </h5>
                    {showStep === 3 && (
                      <p class="fnt-16 fnt-400 text-white pb-5">
                        Comviva a telecommunications company was
                        <br /> founded in Gurgaon, Haryana
                      </p>
                    )}
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div
                      class="rounded-circle px-2 bg-white text-white mb-1"
                      onClick={() => handleStepperActive(4)}
                    >
                      4
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <h5 class="text-white fnt-24 fnt-500">Our journey </h5>
                    {showStep === 4 && (
                      <p class="fnt-16 fnt-400 text-white pb-5">
                        Comviva a telecommunications company was
                        <br /> founded in Gurgaon, Haryana
                      </p>
                    )}
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div
                      class="rounded-circle px-2 bg-white text-white mb-1"
                      onClick={() => handleStepperActive(5)}
                    >
                      5
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div>
                    <h5 class="text-white fnt-24 fnt-500">Our journey </h5>
                    {showStep === 5 && (
                      <p class="fnt-16 fnt-400 text-white pb-5">
                        Comviva a telecommunications company was
                        <br /> founded in Gurgaon, Haryana
                      </p>
                    )}
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div
                      class="rounded-circle px-2 bg-white text-white mb-1"
                      onClick={() => handleStepperActive(5)}
                    >
                      6
                    </div>
                    <div class="line h-100 d-none"></div>
                  </div>
                  <div>
                    <h5 class="text-white fnt-24 fnt-500">Our journey </h5>
                    {showStep === 6 && (
                      <p class="fnt-16 fnt-400 text-white pb-5">
                        Comviva a telecommunications company was
                        <br /> founded in Gurgaon, Haryana
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 mt-5 position-relative">
              <div className="position-absolute curve-img_1">
                <img src={curve} alt="" className="img-fluid" />
              </div>
              <div className="d-flex company_sec">
                <div className="comp_img">
                  <img src={company_Abt} alt="" className="img-fluid" />
                </div>
                <div className="mx-3">
                  <img src={company_2_abt} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
