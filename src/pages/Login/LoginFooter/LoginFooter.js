import React, { Component } from "react";
import "./LoginFooter.scss";

class LoginFooter extends Component {
  constructor() {
      super();
  }

  render() {
    return (
      <div className="LoginFooter">
        <div className="footer-left">
          <a>소개</a><a>도움말</a><a>홍보 센터</a><a>API</a><a>채용 정보</a>
          <a>개인정보처리방침</a><a>약관</a><a>위치</a><a>인기 계정</a><a>해시태그</a><a>언어</a>
        </div>
        <div className="footer-right">
          <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    )
  }
}

export default LoginFooter;