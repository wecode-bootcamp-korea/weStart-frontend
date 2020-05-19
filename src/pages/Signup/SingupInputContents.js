import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./SingupInputContents.scss";

class SingupInputContents extends Component {
  constructor() {
    super()

    this.state = {
      id:"", // id input창 벨류값 state //
      name:"", // name input창 벨류값 state //
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
  nameCheckVariable = 1;
  // id, pass 유효성검사 및 결과값state 조작 함수 //  
  idPassCheck() {
    if (this.state.id.includes(this.idCheckVariable) === true && this.state.pass.length >= this.passCheckVariable && this.state.name.length >= this.nameCheckVariable) {
      this.setState({idPassCheck:true}, () => console.log("유효성:", this.state.idPassCheck))
    } else {
      this.setState({idPassCheck:false}, () => console.log("유효성:", this.state.idPassCheck))  
    }
  }  
  // login에서 main으로 이동시킬 함수 //
  goToMain() {
    if (this.state.idPassCheck === true) {
      alert("WESTAGRAM 회원이 되신 것을 축하드립니다.");
      this.props.history.push('/');
    } else {
      alert("올바른 이메일 형식이 아니거나, 이름칸이 비어있거나, 비밀번호는 5자 이상이어야 합니다.");
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
    this.props.history.push('/');
  }

  render() {
    return(
      <div className="SingupInputContents">
        <div className="logo-div">
          <img src={require('../../images/instagramtext.png')} onClick={this.goToReflesh.bind(this)} alt="logo" />
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
          <input type="text" name="id" placeholder="  전화번호, 사용자 이름 또는 이메일" onChange={this.inputHandle.bind(this)}/>
          <input type="text" name="name" placeholder="  사용자 이름" onChange={this.inputHandle.bind(this)}/>
          <input type="password" name="pass" placeholder="  비밀번호" onChange={this.inputHandle.bind(this)}/>
          <button className={this.state.idPassCheck?"afterbutton":"beforebutton"} onClick={this.buttonClickAndGo.bind(this)}>가입</button>  
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