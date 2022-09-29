import React from "react";
import { NavLink } from "react-router-dom";
//import { headerData } from "../../Data/headerdata";
import "../Header.scss";

const HoverMenu = ({ title, menuData, id, styless }) => {
  return (
    <div className="z-index">
      <div
        className={`h-auto bg-white-white triangle-up mt-2  d-none d-md-block hover-class ${
          styless && styless
        }`}
      >
        <h3 className="fnt-20 text-bl-black opacity-25">{title}</h3>
        <div className={`d-flex flex-wrap`}>
          {menuData.map((el) => (
            <div
              key={el.img_text}
              className={` ${id === 3 || id === 4 ? "col-8" : "col-6"} pt-4 `}
            >
              <div className="d-flex">
                <img src={el.img} alt="" />
                <NavLink to={el.link} className="fnt-16 px-1 text-dark-blue a_a">
                  {el.img_text}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
