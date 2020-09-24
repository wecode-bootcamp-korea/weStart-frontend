import React, { Component } from "react";
import "./LoginContents.scss";
import LoginImageChange from "../LoginImageChange/LoginImageChange"
import LoginContentsBoxFirst from "../LoginContentsBoxFirst/LoginContentsBoxFirst"
import LoginContentsBoxSecond from "../LoginContentsBoxSecond/LoginContentsBoxSecond"
import LoginContentsBoxThird from "../LoginContentsBoxThird/LoginContentsBoxThird"
import LoginContentsBoxFour from "../LoginContentsBoxFour/LoginContentsBoxFour"

class LoginContents extends Component {
  constructor() {
    super();    
  }
 
  render() {
    console.log(this.state)
    return (
      <div className="LoginContents">
        <LoginImageChange />
        <div className="LoginContentsBox">       
          <LoginContentsBoxFirst />
          <LoginContentsBoxSecond />
          <LoginContentsBoxThird />
          <LoginContentsBoxFour />
        </div>
      </div>
    )
  }
}

export default LoginContents;