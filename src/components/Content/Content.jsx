import React from "react";
import Video from "../Video/Video";

import "./Content.scss";

function Content() {
  let foo = [
    1,
    2,
    3,
    34,
    4,
    324,
    23,
    34,
    3,
    42,
    432,
    4,
    24,
    14,
    14,
    1,
    41,
    4,
    14,
  ];

  console.log(foo);
  return (
    <div className="video-content">
      {foo.map((item, index) => {
        return <Video key={index} />;
      })}
    </div>
  );
}

export default Content;
