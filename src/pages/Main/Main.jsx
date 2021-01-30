import React from "react";

import "./Main.scss";

import Content from "../../components/Content/Content";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <Navbar />
        <div className="main__content">
          <SideBar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Main;
