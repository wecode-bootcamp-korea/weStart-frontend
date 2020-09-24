import React, { Component } from "react";
import "./CommentInput.scss";

class CommentInput extends Component {
  constructor() {
    super();
    
    this.state = {    
      text:"", // 댓글창에 text onChange용 state //
      TextValidateCheck:false // 댓글 input값 없는 것 유효성검사용 state //
    }    
  }

  // input값 저장 핸들러 //
  commentHandler(event) {
    this.setState({text:event.target.value}, () => (this.textValidateFunc(), console.log("text:", this.state.text)))
  }

  // input값이 없으면 댓글 안되게 할 유효성 검사 //
  textValidateFunc() {
    if(this.state.text.length !== 0) {
      this.setState({TextValidateCheck:true}, () => console.log("유효성:", this.state.TextValidateCheck))
    } else {
      this.setState({TextValidateCheck:false}, () => console.log("유효성:", this.state.TextValidateCheck)) 
    }
  }  

  // 버튼 클릭으로 comment작성 실행할 함수 //
  buttonCilck() {
    this.validation()
  }
  
  // 엔터키로 comment작성 실행할 함수 //
  enterAndComment(event) {
    if(event.keyCode === 13) {
      this.validation()
    }
  }

  // 유효성 검사 후 fetch로 넘길 함수 //
  validation() {
    if (this.state.TextValidateCheck === true) { 
      this.commentAddOn(); 
    } else {
      alert("댓글에 아무내용도 입력되지 않았네요");
    }
  }

  // comment작성 실행될 fetch 함수 // 
  commentAddOn() {
    fetch('http://10.58.4.56:8000/comment', {    
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "user":this.props.name,
        "user_comment":this.state.text
      })
    })  
    this.setState({text:"", TextValidateCheck:false}); // state 초기화 코드, 그래야 input, button이벤트가 바로 초기화됨  
  }

  render() {
    return(
      <div className="comment-write-div" onKeyDown={this.enterAndComment.bind(this)}>
        <input type="text" placeholder="댓글 달기..." onChange={this.commentHandler.bind(this)} value={this.state.text}/>
        <button type="submit" className={this.state.TextValidateCheck?"clickbutton":"submitButton"} onClick={this.buttonCilck.bind(this)}>게시</button>
      </div>  
    )
  }
}

export default CommentInput;