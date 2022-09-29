import React from "react";
import Header from "../components/Header/Header";
import FooterCode from "../components/Footer/Footer";
import Privacy from "../components/Cookies and Privacy/Privacy";

const PrivacyPage = () => {
  return (
    <div>
      <section className="bg-graident-primary">
        <Header background={"primary"} />
        <div className="">
          <Privacy />
        </div>
        <FooterCode />
      </section>
    </div>
  );
};

export default PrivacyPage;
