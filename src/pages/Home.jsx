import React from "react";
import Header from "../components/Header/Header";
import FooterCode from "../components/Footer/Footer";
import UseCase from "../components/Home/UseCase/UseCase";
import LetsConnect from "../components/Let_Connect/LetsConnect";

const Home = () => {
  return (
    <section className="bg-gradient-primary overflow-x-hidden position-relative">
      <Header />
        <UseCase/>
        <LetsConnect/>
      <FooterCode />
    </section>
  );
};

export default Home;
