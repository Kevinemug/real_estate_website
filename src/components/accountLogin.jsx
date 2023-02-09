import React from "react";
import { useState } from "react";
import { AccountSignUp } from "./accountSignUp";

export const AccountLogin = () => {
  const [closePopup, setClosePopup] = useState(false);
  const [loginPopup, setSignInPopup] = useState(false);

  const displaySignUp = () => {
    setSignInPopup(!loginPopup);
  };

  const CloseMe = () => {
    setClosePopup(!closePopup);
  };
  return (
    <div
      className={`login__popup--container ${
        closePopup ? "login__popup--remove" : ""
      }`}
    >
      <div className="login__popup--overlay"></div>
      <div className="login__popup--content">
        <div className="login__popup--button">
          <button onClick={CloseMe} type="button" className="cancel--button">
            X
          </button>
        </div>
        <div className="login__popup--header">
          <h1>Login</h1>
          <p>
            Don't have an account?{" "}
            <span onClick={displaySignUp}>
              <a href="#">Create your account</a>
            </span>
            , it takes less than a minute.
          </p>
        </div>
        <form action="" className="login__popup--form">
          <div className="popup__form--name">
            <label htmlFor="name__input">Username (use: agent)</label>
            <input type="text" id="name__input" />
          </div>
          <div className="popup__form--password">
            <label htmlFor="password__input">Password (use: agent)</label>
            <input type="password" id="password__input" />
          </div>
          <button className="login__submit--btn">Login</button>
          <hr />
          <div className="login__options">
            <button className="facebook__login">
              <p>LOGIN WITH FACEBOOK</p>
            </button>
            <button className="google__login">
              <p>LOGIN WITH GOOGLE</p>
            </button>
            <button className="lostPassword--btn">Lost your password?</button>
          </div>
        </form>
      </div>
      {loginPopup ? <AccountSignUp /> : null}
    </div>
  );
};
