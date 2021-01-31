import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";

import "./Login.scss";

import youtube from "../../img/youtube.png";
import { useHistory } from "react-router";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const accessToken = useSelector(state => state.auth.accessToken);

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__content">
        <img src={youtube} alt="" />
        <button className="login__btn" onClick={handleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
