import React from "react";
import FAQ from "../components/FAQ/FAQ";
import Help from "../components/FAQ/Help";
import FooterCode from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./../styles/pages/faq.scss";

const FAQS = () => {
  return (
    <section className="bg-gradient-primary position-relative">
    <Header/>
    <div className="container">
      <FAQ />
      <Help/>
    </div>
    <FooterCode/>
  </section>
  )
}

export default FAQS;
