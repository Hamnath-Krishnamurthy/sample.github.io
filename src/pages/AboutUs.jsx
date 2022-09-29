import React from "react";
import Header from "../components/Header/Header";
import FooterCode from "../components/Footer/Footer";
import Aboutus from "../components/Aboutus/Aboutus";

const AboutUs = () => {
  return (
    <section className="bg-graident-primary">
      <Header background={"secondary"} />
      <div className="">
        <Aboutus />
      </div>

      <FooterCode />
    </section>
  );
};

export default AboutUs;
