import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./SingupInputContents.scss";

class SingupInputContents extends Component {
  constructor() {
    super()

    this.state = {
      email:"", // email input창 벨류값 state, pk //
      name:"", // name input창 벨류값 state, 중복가능 //
      password:"", // password input창 벨류값 state //
      emailPasswordCheck:false //email, password 유효성검사 state //
    }
  }

  // email, name, password 공용 input값 저장 핸들러 함수 //
  inputHandle(event) {
    this.setState({[event.target.name]:event.target.value}, 
      () => (this.emailPassCheck(), console.log("ID:", this.state.email, " PassWord:", this.state.password))
    );    
  }

  // email, password 유효성검사 조건용 변수 //
  emailCheckVariable = "@";  
  nameCheckVariable = 1;
  passwordCheckVariable = 5;

  // email, password 유효성검사 및 결과값 state 조작 함수 //  
  emailPassCheck() {
    if (this.state.email.includes(this.emailCheckVariable) === true && 
        this.state.password.length >= this.passwordCheckVariable && 
        this.state.name.length >= this.nameCheckVariable) {
      this.setState({emailPasswordCheck:true}, () => console.log("유효성:", this.state.emailPasswordCheck))
    } else {
      this.setState({emailPasswordCheck:false}, () => console.log("유효성:", this.state.emailPasswordCheck))  
    }
  }

  // 유효성 검사 후 fetch로 넘길 함수 //
  validation() {
    if (this.state.emailPasswordCheck === true) { 
      this.goToLogin(); 
    } else {
      alert("올바른 이메일 형식이 아니거나, 사용자 이름이 없거나, 비밀번호는 5자 이상이어야 합니다.");
    }
  }
  
  // signup에서 login으로 이동시킬 fetch 함수 //
  goToLogin() {
    fetch('http://10.58.4.56:8000/account/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.password,
        "username": this.state.name       
      })
    })    
    .then(res => {
      if (res.status === 200) {
        alert("westagram 회원이 되신 것을 축하드립니다!")
        this.props.history.push('/loginJS'); 
      }
      if (res.status === 401) {
        alert("이미 존재하는 회원입니다.ㅠㅠ")
      }
      if (res.status === 400) {
        alert("알 수 없는 오류가 발생했습니다.")
      }     
    })    
  }

  // 버튼 클릭으로 login 이동 함수 실행 //
  buttonClickAndGo() {
    this.validation()
  }

  // 엔터키로 login 이동 함수 실행 //
  enterkeyAndGo(event) {    
    if (event.keyCode === 13) {
      this.validation()
    }
  }

  // 로고 누를시 바로 "/"로 이동 함수 //
  goToDirect() {
    this.props.history.push('/JS');
  }

  render() {
    return(
      <div className="SingupInputContents">
        <div className="logo-div">
          <img src={require('../../images/instagramtext.png')} onClick={this.goToDirect.bind(this)} alt="logo" />
          <div className="friend">
            <p>친구들의 사진과 동영상을 보려면</p> 
            <p>가입하세요.</p>
          </div>          
          <a href="https://www.facebook.com/login">
            <span><img className="facebookIcon" src={require('../../images/facebookReverse.png')} alt="facebook" /></span>
            <span>Facebook으로 로그인</span>
          </a>          
          <div className="hr-div">
            <div className="hr-div-inner">
              <hr/>
            </div>        
            &nbsp;&nbsp;&nbsp;<span>또는</span>&nbsp;&nbsp;&nbsp;
            <div className="hr-div-inner">
              <hr/>
            </div>
          </div>
        </div>
        <div className="idpass-div" onKeyDown={this.enterkeyAndGo.bind(this)}>      
          <input type="text" name="email" placeholder="  전화번호, 사용자 이름 또는 이메일" onChange={this.inputHandle.bind(this)}/>
          <input type="text" name="name" placeholder="  사용자 이름" onChange={this.inputHandle.bind(this)}/>
          <input type="password" name="password" placeholder="  비밀번호" onChange={this.inputHandle.bind(this)}/>
          <button className={this.state.emailPasswordCheck?"afterbutton":"beforebutton"} onClick={this.buttonClickAndGo.bind(this)}>가입</button>  
        </div>        
        <div className="info-div">     
          <span>
            <span>가입하면 Instagram의 </span><a href="https://help.instagram.com/581066165581870" target="_blank">약관,  </a> 
            <a href="https://help.instagram.com/519522125107875" target="_blank">데이터 정책</a> <span>및</span> 
            <a href="https://help.instagram.com/1896641480634370?ref=ig" target="_blank">쿠키 정책</a><span>에 동의하게 됩니다.</span>
            </span>
        </div>
      </div>
    )
  }
}

export default withRouter(SingupInputContents);