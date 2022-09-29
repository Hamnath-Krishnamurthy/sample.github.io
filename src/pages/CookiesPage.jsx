import React from "react";
import Header from "../components/Header/Header";
import FooterCode from "../components/Footer/Footer";
import Cookies from "../components/Cookies and Privacy/Cookies";

const CookiesPage = () => {
  return (
    <div>
      <section className="bg-graident-primary">
        <Header background={"primary"} />
        <div className="">
          <Cookies />
        </div>
        <FooterCode />
      </section>
    </div>
  );
};

export default CookiesPage;
