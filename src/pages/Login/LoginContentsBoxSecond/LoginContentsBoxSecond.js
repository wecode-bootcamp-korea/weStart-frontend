import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./LoginContentsBoxSecond.scss"

class LoginContentsBoxSecond extends Component {
  constructor() {
    super();    
  }

  // 회원가입 페이지 이동 함수 //
  clickGoAccount() {
    this.props.history.push('/signup');
  }

  render(){
    return(
      <div className="LoginContentsBoxSecond">
        <span>계정이 없으신가요?</span>
        <p onClick={this.clickGoAccount.bind(this)}>가입하기</p>
      </div>
    )
  }
}

export default withRouter(LoginContentsBoxSecond)