import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./SignupContentsBoxSecond.scss"

class SignContentsBoxSecond extends Component {
  constructor() {
    super();    
  }

  // login페이지로 바로 이동 함수 //
  clickGoLogin() {
    this.props.history.push('/loginJS');
  }

  render(){
    return(
      <div className="SignContentsBoxSecond">
        <span>계정이 있으신가요?</span>
        <p onClick={this.clickGoLogin.bind(this)}>로그인</p>
      </div>
    )
  }
}

export default withRouter(SignContentsBoxSecond)