import React, { useEffect } from "react";

import "./Main.scss";

import Content from "../../components/Content/Content";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import { useDispatch } from "react-redux";
import { getPopuplarVideos } from "../../redux/actions/video.action";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopuplarVideos());
  }, [dispatch]);

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
