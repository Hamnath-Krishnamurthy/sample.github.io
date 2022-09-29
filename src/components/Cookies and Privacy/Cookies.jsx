import React from "react";
import { cookieData } from "./cookie";
import "./CookiesStyles.scss";

const Cookies = () => {
  return (
    <div>
      <div className="container mt-lg-5 mt-4">
        {cookieData.map((el) => (
          <div className="row mb-100">
            <h5 className="fnt-48 text-dark-blue fnt-600">{el.title}</h5>
            <p className="fnt-16 fnt-400 txt-cookie">{el.date}</p>
            <div className="col-lg-12 col-12">
              <p className="fnt-16 fnt-400 txt-black pb-2">
                {el.data.paragraph_1}
              </p>
              <p className="fnt-16 fnt-400 txt-black pb-2">
                {el.data.paragraph_2}
              </p>
              <p className="fnt-16 fnt-400 txt-black pb-2">
                {el.data.paragraph_3}
              </p>
              <p className="fnt-16 fnt-400 txt-black pb-2">
                {el.data.paragraph_4}
              </p>
              <p className="fnt-16 fnt-400 txt-black pb-2">
                {el.data.paragraph_5}
              </p>
              <p className="fnt-16 fnt-400 txt-black pb-2">
                {el.data.paragraph_6}
              </p>
              <div className="cookie-ul mx-lg-5 mx-4 pb-2">
                <ul>
                  <li className="fnt-16 fnt-400 txt-black">
                    {el.data.details}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.social}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.dob}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.emp}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.sal}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.email}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.account}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.debit}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.login}
                  </li>
                </ul>
              </div>
              <p className="fnt-16 fnt-400 txt-black pt-3 pb-2">
                {el.data.paragraph_7}
              </p>
              <div className="cookie-ul mx-lg-5 mx-4">
                <ul>
                  <li className="fnt-16 fnt-400 txt-black">
                    {el.data.service}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.produts}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.notify}
                  </li>
                  <li className="pt-3 fnt-16 fnt-400 txt-black">
                    {el.data.improve}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cookies;
