import React from "react";

import "./Main.scss";

import Content from "../../components/Content/Content";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";

function Main() {
  return (
    <div className="main">
      <Navbar />
      {/* <div className="main__content">
        <SideBar />
        <Content />
      </div> */}
    </div>
  );
}

export default Main;
