import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./LoginContentsBoxFirst.scss";

class LoginContentsBoxFirst extends Component {
  constructor() {
    super()

    this.state = {
      id:"", // id input창 벨류값 state //
      pass:"", // password input창 벨류값 state //
      idPassCheck:false //id,password유효성검사 state //
    }
  }
  // id, password 공용 input값 저장 핸들러 함수//
  inputHandle(event) {
    this.setState({[event.target.name]:event.target.value}, 
      () => (this.idPassCheck(), console.log("ID:", this.state.id, " PassWord:", this.state.pass))
    );    
  }
  // id, pass 유효성검사 조건용 변수 //
  idCheckVariable = "@";
  passCheckVariable = 5;
  // id, pass 유효성검사 및 결과값state 조작 함수 //  
  idPassCheck() {
    if (this.state.id.includes(this.idCheckVariable) === true && this.state.pass.length >= this.passCheckVariable) {
      this.setState({idPassCheck:true}, () => console.log("유효성:", this.state.idPassCheck))
    } else {
      this.setState({idPassCheck:false}, () => console.log("유효성:", this.state.idPassCheck))  
    }
  }  
  // login에서 main으로 이동시킬 함수 //
  goToMain() {
    if (this.state.idPassCheck === true) {
      alert("WESTAGRAM GOGO");
      this.props.history.push('/main');
    } else {
      alert("아이디는 @를 포함하고, 비밀번호는 5자 이상이어야 합니다.");
    } 
  }
  // 버튼 클릭시 main 이동 함수 실행 //
  buttonClickAndGo() {    
    this.goToMain();
  }
  // 엔터키 누를시 main 이동 함수 실행 //
  enterkeyAndGo(event) {    
    if (event.keyCode === 13) {
      this.goToMain();
    }
  }

  // 로고 누를시 바로 main 이동 함수 //
  // 리다이렉트 하고 싶었으나 실패 //
  goToReflesh() {
    this.props.history.push('/main');
  }

  render() {
    return(
      <div className="LoginContentsBoxFirst">
        <div className="logo-div">
          <img src={require('../../../images/instagramtext.png')} onClick={this.goToReflesh.bind(this)} alt="logo" />
        </div>          
        <div className="idpass-div" onKeyDown={this.enterkeyAndGo.bind(this)}>      
          <input type="text" name="id" placeholder="  전화번호, 사용자 이름 또는 이메일" onChange={this.inputHandle.bind(this)}/>
          <input type="password" name="pass" placeholder="  비밀번호" onChange={this.inputHandle.bind(this)}/>
          <button className={this.state.idPassCheck?"afterbutton":"beforebutton"} onClick={this.buttonClickAndGo.bind(this)}>로그인</button>  
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