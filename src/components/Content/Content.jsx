import React from "react";
import { useSelector } from "react-redux";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import Video from "../Video/Video";

import "./Content.scss";

function Content() {
  const { videos } = useSelector(state => state.homeVideos);
  console.log(videos);
  return (
    <div className="content">
      <CategoriesBar />
      <div className="content__videos">
        {videos.map((item, index) => {
          return <Video videos={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Content;
