import React from "react";
import Header from "../components/Header/Header";
import "../styles/pages/company.scss";
import FooterCode from "../components/Footer/Footer";
import CareersDetailsIndex from '../components/Company/CareersDetails/CareersDetailIndex'

const Company = () => {
  return (
    <section className="bg-gradient-primary">
      <Header background={"primary"} />

        <CareersDetailsIndex/>

      <FooterCode />
    </section>
  );
};

export default Company;
