import React from "react";

import "./Navbar.scss";

import Logo from "../../img/Logo.svg";

import UserImg from "../../img/Userpic.png";

import {
  IoNotificationsOutline,
  IoApps,
  IoVideocamOutline,
} from "react-icons/io5";

function Navbar() {
  const icons = [<IoVideocamOutline />, <IoApps />, <IoNotificationsOutline />];

  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content-info">
          <button className="navbar__menu">
            <div className="navbar__menu-line"></div>
            <div className="navbar__menu-line"></div>
            <div className="navbar__menu-line"></div>
          </button>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar__search">
            <input type="text" placeholder="Search" />
            <span></span>
          </div>
        </div>
        <div className="navbar__content-btns">
          {icons.map((icon, index) => {
            return (
              <button className="navbar__content-btn" key={index}>
                {icon}
              </button>
            );
          })}
          <button className="navbar__content-btn">
            <img src={UserImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
