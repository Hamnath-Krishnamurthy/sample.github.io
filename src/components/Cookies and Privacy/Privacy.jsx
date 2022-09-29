import React from "react";
import { privacyData } from "./cookie";

const Privacy = () => {
  return (
    <div className="container mt-lg-5 mt-4">
      {privacyData.map((el) => (
        <div className="row mb-90">
          <h5 className="fnt-48 text-dark-blue fnt-600">{el.title}</h5>
          <p className="fnt-16 fnt-400 txt-cookie">{el.date}</p>
          <div className="col-lg-12 col-12">
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para}
            </p>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_1}
            </p>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_2}
            </p>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_3}
            </p>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_4}
            </p>
            <h5 className="fnt-16 fnt-700 txt-black pb-2">
              {el.pri_data.priv_head}
            </h5>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_5}
            </p>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_6}
            </p>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_7}
            </p>
            <h5 className="fnt-16 fnt-700 txt-black pb-2">
              {el.pri_data.priv_head_1}
            </h5>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_8}
            </p>
            <p className="fnt-16 fnt-400 txt-black pb-2">
              {el.pri_data.priv_para_9}
            </p>
            <h5 className="fnt-16 fnt-700 txt-black pb-4 d-none d-lg-block">
              {el.pri_data.priv_head_2}
            </h5>
            <p className="fnt-16 fnt-400 txt-black pb-2 d-none d-lg-block">
              {el.pri_data.priv_para_10}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Privacy;
