import React from "react";

import "./Login.scss";

import youtube from "../../img/youtube.png";

function Login() {
  return (
    <div className="login">
      <div className="login__content">
        <img src={youtube} alt="" />
        <button className="login__btn">Login with Google</button>
      </div>
    </div>
  );
}

export default Login;
