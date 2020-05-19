import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./SignupContentsBoxSecond.scss"

class SignContentsBoxSecond extends Component {
  constructor() {
    super();    
  }

  // 회원가입 페이지 이동 함수 //
  clickGoAccount() {
    this.props.history.push('/login');
  }

  render(){
    return(
      <div className="SignContentsBoxSecond">
        <span>계정이 있으신가요?</span>
        <p onClick={this.clickGoAccount.bind(this)}>로그인</p>
      </div>
    )
  }
}

export default withRouter(SignContentsBoxSecond)