const initialState = {
  accessToken: localStorage.getItem("ytc-access-token")
    ? localStorage.getItem("ytc-access-token")
    : null,
  user: localStorage.getItem("ytc-user")
    ? localStorage.getItem("ytc-user")
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST": {
      return {
        ...prevState,
        loading: true,
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...prevState,
        accessToken: action.payload,
        loading: false,
      };
    }
    case "LOGIN_FAIL": {
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: action.payload,
      };
    }
    case "LOAD_PROFILE": {
      return {
        ...prevState,
        user: action.payload,
      };
    }
    case "LOG_OUT": {
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };
    }
    default: {
      return prevState;
    }
  }
};
