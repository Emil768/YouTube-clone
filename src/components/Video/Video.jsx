import React from "react";

import "./Video.scss";

import VideoBcg from "../../img/Video-img.png";

import VideoBcg2 from "../../img/Video-img2.png";

function Video() {
  return (
    <div className="video">
      <div className="video__icon">
        <img
          src="https://image-cdn.essentiallysports.com/wp-content/uploads/20210107205249/flatten.png"
          alt=""
        />
        <span className="video__time">7:36</span>
      </div>
      <h4 className="video__title">Astronomy Or Astrology</h4>
      <div className="video__info">
        <div className="video__info-content">
          <span className="video__info-view">240k views</span>
          <span className="video__info-days">4 months ago</span>
        </div>
        <span>Food & Drink</span>
      </div>
    </div>
  );
}

export default Video;
