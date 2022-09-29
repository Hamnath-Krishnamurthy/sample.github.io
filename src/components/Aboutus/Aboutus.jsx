import React from "react";
import award_lg from "../../assets/logos/award_logo.png";
import "../Aboutus/About.scss";
import Stepper from "./Stepper";
import AboutBanner from "./AboutBanner";
import { DigitalData } from "./abtData";
import OurStory from "./OurStory";
import Client from "./Client";
import Digital from "./Digital";
import OurLeaders from "./OurLeaders";
import AboutLastBanner from "./AboutLastBanner";
import Awards from "./Awards";

const Aboutus = () => {
  return (
    <>
      <AboutBanner />
      <Digital />
      <OurStory />
      <Stepper />
      <Awards />
      <OurLeaders />
      <AboutLastBanner />
      <Client />
    </>
  );
};

export default Aboutus;
