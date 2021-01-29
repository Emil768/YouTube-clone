import React from "react";

import "./Navbar.scss";

import Logo from "../../img/Logo.svg";
import AppsImg from "../../img/Apps.svg";
import NtcImg from "../../img/Notification.svg";
import VideoImg from "../../img/Video.svg";
import UserImg from "../../img/Userpic.png";

function Navbar() {
  const icons = [VideoImg, AppsImg, NtcImg, UserImg];

  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content-left">
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
        <div className="navbar__content-right">
          {icons.map((img, index) => {
            return (
              <button className="navbar__icon" key={index}>
                <img src={img} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
