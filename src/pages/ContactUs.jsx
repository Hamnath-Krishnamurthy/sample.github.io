import React from "react";
import "../styles/pages/contactus.scss";
import Banner from "../components/ContactUs/Banner";
import Header from "../components/Header/Header";
import Form from "../components/ContactUs/Form";
import FooterCode from "../components/Footer/Footer";
import General from "../components/ContactUs/GeneralCommunication/General";
import LocationDet from "../components/ContactUs/Locations/LocationDet";
import LastBanner from "../components/ContactUs/LastBanner";

export const ContactUs = () => {
  return (
    <section className="bg-gradient-primary contact_us position-relative">
      <Header />

      <Banner />
      <div className="container">
        <Form />
      </div>
      <General />
      <LocationDet />
      <LastBanner />
      <FooterCode />
    </section>
  );
};

export default ContactUs;
