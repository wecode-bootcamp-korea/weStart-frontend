import React, { Component } from "react";
import "./LoginPageApp.scss";
import LoginContents from "./LoginContents/LoginContents";
import LoginFooter from "./LoginFooter/LoginFooter";

class LoginPageApp extends Component {
  constructor() {
      super();
  }

  render() {
      return (
        <div className="LoginPage">
          <LoginContents />
          <LoginFooter /> 
        </div>
      )
  }
}

export default LoginPageApp;