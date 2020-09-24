import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./LoginContentsBoxFirst.scss";

class LoginContentsBoxFirst extends Component {
  constructor() {
    super()

    this.state = {
      email:"", // email input창 벨류값 state, pk //
      password:"", // password input창 벨류값 state //
      emailPasswordCheck:false //email, password유효성검사 state //
    }
  }

  // email, password 공용 input값 저장 핸들러 함수//
  inputHandle(event) {
    this.setState({[event.target.name]:event.target.value}, 
      () => (this.emailPasswordCheck(), console.log("Email:", this.state.email, " PassWord:", this.state.password))
    );    
  }

  // email, password 유효성검사 조건용 변수 //
  emailCheckVariable = "@";
  passwordCheckVariable = 5;

  // email, password 유효성검사 및 결과값 state 조작 함수 //  
  emailPasswordCheck() {
    if (this.state.email.includes(this.emailCheckVariable) === true && 
        this.state.password.length >= this.passwordCheckVariable) {
      this.setState({emailPasswordCheck:true}, () => console.log("유효성:", this.state.emailPasswordCheck))
    } else {
      this.setState({emailPasswordCheck:false}, () => console.log("유효성:", this.state.emailPasswordCheck))  
    }
  }  
  
  // 버튼 클릭으로 main 이동 함수 실행 //
  buttonClickAndGo() {    
    this.validation();
  }
  
  // 엔터키로 main 이동 함수 실행 //
  enterkeyAndGo(event) {    
    if (event.keyCode === 13) {
      this.validation()
    }
  }

  // 유효성 검사 후 fetch로 넘길 함수 //
  validation() {
    if (this.state.emailPasswordCheck === true) { 
      this.goToMain(); 
    } else {
      alert("올바른 이메일 형식이 아니거나, 사용자 이름이 없거나, 비밀번호는 5자 이상이어야 합니다.");
    }
  }
  
  // login에서 main으로 이동시킬 fetch 함수 //
  goToMain() {    
    const token = localStorage.getItem('token');
    fetch("http://10.58.4.56:8000/account/signin", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.password      
      }),
    })   
    .then(res => {
      if (res.token) {
        localStorage.setItem(token, res.token);
      }
      if (res.status === 200) {
        alert(`${this.state.email}님 환영합니다.`)
        this.props.history.push('/mainJS'); 
      }
      if (res.status === 401) {
        alert("회원 정보를 다시 확인해주세요ㅠㅠ")
      }
      if (res.status === 400) {
        alert("먼저 회원가입을 해주세요")
      }     
    })   
  }

  // 로고 누를시 바로 "/"로 이동 함수 //
  goToDirect() {
    this.props.history.push('/JS');
  }

  render() {
    return(
      <div className="LoginContentsBoxFirst">
        <div className="logo-div">
          <img src={require('../../../images/instagramtext.png')} onClick={this.goToDirect.bind(this)} alt="logo" />
        </div>          
        <div className="idpass-div" onKeyDown={this.enterkeyAndGo.bind(this)}>      
          <input type="text" name="email" placeholder="  전화번호, 사용자 이름 또는 이메일" onChange={this.inputHandle.bind(this)}/>
          <input type="password" name="password" placeholder="  비밀번호" onChange={this.inputHandle.bind(this)}/>
          <button className={this.state.emailPasswordCheck?"afterbutton":"beforebutton"} onClick={this.buttonClickAndGo.bind(this)}>로그인</button>  
        </div>
        <div className="hr-div">
          <div className="hr-div-inner">
            <hr/>
          </div>        
          &nbsp;&nbsp;&nbsp;<span>또는</span>&nbsp;&nbsp;&nbsp;
          <div className="hr-div-inner">
            <hr/>
          </div>
        </div>
        <div className="info-div">      
          <a href="https://www.facebook.com/login">
            <span><img src={require('../../../images/facebook.png')} alt="facebook" /></span>
            <span>Facebook으로 로그인</span>
          </a>
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginContentsBoxFirst);