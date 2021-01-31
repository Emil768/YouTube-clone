import request from "../../api";

export const getPopuplarVideos = () => async dispatch => {
  try {
    dispatch({
      type: "HOME_VIDEOS_REQUEST",
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "RU",
        maxResults: 20,
        pageToken: "",
      },
    });

    dispatch({
      type: "HOME_VIDEOS_SUCCESS",
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: "HOME_VIDEOS_FAIL",
      payload: err.message,
    });
  }
};
