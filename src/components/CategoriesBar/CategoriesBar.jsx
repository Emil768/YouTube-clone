import React, { memo, useState } from "react";

import "./CategoriesBar.scss";

import { getVideosByCategory } from "../../redux/actions/video.action";
import { useDispatch } from "react-redux";

function CategoriesBar() {
  const dispatch = useDispatch();
  const categoriesList = [
    "All",
    "React js",
    "VUE",
    "Angular",
    "Comedy",
    "Gaming",
    "Sports",
  ];

  const [activeItem, setActiveItem] = useState(0);

  const handlerActiveItem = (index, title) => {
    setActiveItem(index);
    dispatch(getVideosByCategory(title));
  };

  return (
    <div className="categories-bar">
      <ul className="categories-bar__list categories-list">
        {categoriesList.map((item, index) => {
          return (
            <li
              className={
                activeItem === index
                  ? "categories-list__item active"
                  : "categories-list__item"
              }
              key={index}
              onClick={() => handlerActiveItem(index, item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(CategoriesBar);
