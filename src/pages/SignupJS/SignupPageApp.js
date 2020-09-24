import React, { Component } from "react";
import "./SignupPageApp.scss";
import SingupInputContents from "./SingupInputContents"
import SignupContentsBoxSecond from "./SignupContentsBoxSecond"
import LoginContentsBoxThird from "../LoginJS/LoginContentsBoxThird/LoginContentsBoxThird"
import LoginContentsBoxFour from "../LoginJS/LoginContentsBoxFour/LoginContentsBoxFour"
import LoginFooter from "../LoginJS/LoginFooter/LoginFooter";
class SignupPageApp extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="SignupPageApp">
        <div className="SignupContents">
          <SingupInputContents />
          <SignupContentsBoxSecond />
          <LoginContentsBoxThird />
          <LoginContentsBoxFour />          
        </div>  
        <LoginFooter />       
      </div>
    )
  }
}

export default SignupPageApp;