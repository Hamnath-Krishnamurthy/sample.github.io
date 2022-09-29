import React from "react";
import Header from "../components/Header/Header";
import "../styles/pages/company.scss";
import FooterCode from "../components/Footer/Footer";
import CarrersInner from "../components/Company/Careers/Carrers_Index";
const CarrersMain = () => {
  return (
    <section className="bg-gradient-primary">
      <Header background={"primary"} />

       <CarrersInner/>
       {/* <CarrersDetails/> */}

      <FooterCode />
    </section>
  );
};

export default CarrersMain;
