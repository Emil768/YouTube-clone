const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};

export const homeVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME_VIDEOS_REQUEST": {
      return {
        ...state,
        loading: true,
      };
    }
    case "HOME_VIDEOS_SUCCESS": {
      return {
        ...state,
        videos: action.payload.videos,
        loading: false,
        nextPageToken: action.payload.nextPageToken,
        activeCategory: action.payload.category,
      };
    }

    case "HOME_VIDEOS_FAIL": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
