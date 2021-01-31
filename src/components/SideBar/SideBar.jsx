import React from "react";

import "./SideBar.scss";

import {
  IoMusicalNotesOutline,
  IoGameControllerOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdSubscriptions,
  MdFolderOpen,
  MdFavoriteBorder,
  MdTimer,
} from "react-icons/md";
import { FaScroll } from "react-icons/fa";

import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

import Subcriber from "../../img/Subscriber.png";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";

function SideBar() {
  const dispatch = useDispatch();

  const icons = [
    {
      text: "Home",
      icon: <AiOutlineHome />,
    },
    {
      text: "Trending",
      icon: <AiOutlineFire />,
    },
    {
      text: "Subscriptions",
      icon: <MdSubscriptions />,
    },
    {
      text: "Library",
      icon: <MdFolderOpen />,
    },
    {
      text: "History",
      icon: <FaScroll />,
    },
    {
      text: "Watch later",
      icon: <MdTimer />,
    },
    {
      text: "Favourites",
      icon: <BsStar />,
    },
    {
      text: "Liked videos",
      icon: <MdFavoriteBorder />,
    },
    {
      text: "Music",
      icon: <IoMusicalNotesOutline />,
    },

    {
      text: "Games",
      icon: <IoGameControllerOutline />,
    },
    {
      text: "Show more",
      icon: <IoIosArrowDown />,
    },
  ];

  const subscriptions = [
    {
      name: "Gussie Singleton",
      icon: Subcriber,
    },
    {
      name: "Gussie Singleton",
      icon: Subcriber,
    },
    {
      name: "Gussie Singleton",
      icon: Subcriber,
    },
  ];

  const hanlderLogOut = () => {
    dispatch(log_out());
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__btns">
          {icons.map((item, index) => {
            return (
              <button className="sidebar__btn" key={index}>
                {item.icon}
                <span> {item.text}</span>
              </button>
            );
          })}
        </div>
        <div className="sidebar__subcribers">
          <h3 className="sidebar__subcribers-title">Subscriptions</h3>
          {subscriptions.map((item, index) => {
            return (
              <div className="sidebar__subscriber" key={index}>
                <img
                  className="sidebar__subscriber-icon"
                  src={item.icon}
                  alt=""
                />
                <span className="sidebar__subscriber-name">{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className="sidebar__settings">
          <button className="sidebar__btn" onClick={hanlderLogOut}>
            <IoLogOutOutline className="sidebar__settings-icon" />
            <span className="sidebar__settings-text">Logout</span>
          </button>
          <button className="sidebar__btn">
            <FiSettings className="sidebar__settings-icon" />
            <span className="sidebar__settings-text">Setting</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
