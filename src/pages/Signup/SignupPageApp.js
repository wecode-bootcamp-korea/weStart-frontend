import React, { Component } from "react";
import "./SignupPageApp.scss";
import SingupInputContents from "./SingupInputContents"
import LoginContentsBoxSecond from "../Login/LoginContentsBoxSecond/LoginContentsBoxSecond"
import LoginContentsBoxThird from "../Login/LoginContentsBoxThird/LoginContentsBoxThird"
import LoginContentsBoxFour from "../Login/LoginContentsBoxFour/LoginContentsBoxFour"
import LoginFooter from "../Login/LoginFooter/LoginFooter";
class SignupPageApp extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="SignupPageApp">
        <div className="SignupContents">
          <SingupInputContents />
          <LoginContentsBoxSecond />
          <LoginContentsBoxThird />
          <LoginContentsBoxFour />
          
        </div>  
        <LoginFooter />       
      </div>
    )
  }
}

export default SignupPageApp;