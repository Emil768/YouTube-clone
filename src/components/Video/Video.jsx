import React, { useEffect, useState } from "react";

import "./Video.scss";

import request from "../../api";
import moment from "moment";

import numeral from "numeral";

function Video({ videos }) {
  const {
    id,
    snippet: {
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = videos;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);

  // useEffect(() => {
  //   const getChannelIcon = async () => {
  //     const {
  //       data: { items },
  //     } = await request("/channels", {
  //       params: {
  //         part: "snippet",
  //         id: channelId,
  //       },
  //     });
  //     setChannelIcon(items[0].snippet.thumbnails.default);
  //   };
  //   getChannelIcon();
  // }, [channelId]);

  return (
    <div className="video">
      <div className="video__icon">
        <img src={medium.url} alt="" />
        <span className="video__time">{_duration}</span>
      </div>
      <h4 className="video__title" title={title}>
        {title}
      </h4>
      <div className="video__info">
        <div className="video__info-content">
          <span className="video__info-view">
            {numeral(views).format("0.a")} views
          </span>
          <span className="video__info-days">
            {moment(publishedAt).fromNow()}
          </span>
        </div>
        <span>{channelTitle}</span>
      </div>
    </div>
  );
}

export default Video;
