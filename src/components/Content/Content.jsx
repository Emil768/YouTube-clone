import React from "react";
import { useSelector } from "react-redux";
import Video from "../Video/Video";

import "./Content.scss";

function Content() {
  const { videos } = useSelector(state => state.homeVideos);
  console.log(videos);
  return (
    <div className="video-content">
      {videos.map((item, index) => {
        return <Video videos={item} key={index} />;
      })}
    </div>
  );
}

export default Content;
