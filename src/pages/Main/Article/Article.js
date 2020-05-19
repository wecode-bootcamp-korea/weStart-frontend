import React, { Component } from "react";
import "./Article.scss";

class Article extends Component {
  constructor() {
    super();

    this.state = {      
      text:"", // 댓글 input창 벨류값 state //
      commentAll:[], // 댓글 보여줄 때 map 메소드를 쓸 array로 선언 //
      inputTextCheck:false // 댓글 없는거 유효성검사용 state //
    }
  }
  //input값 저장 핸들러
  commentHandler(event) {
    this.setState({text:event.target.value}, () => (this.textLengthCheck(), console.log("text:", this.state.text)))
  }
  //input값 없으면 댓글 안되게 할 유효성 검사
  textLengthCheck() {
    if(this.state.text.length !== 0) {
      this.setState({inputTextCheck:true}, () => console.log("유효성:", this.state.inputTextCheck))
    } else {
      this.setState({inputTextCheck:false}, () => console.log("유효성:", this.state.inputTextCheck)) 
    }
  }
  //input값을 출력하는 곳에서 하나의 배열로 쓸수있게 새로운 state값에서 모아줌
  //실행 후 input값은 다시 빈값으로 초기화
  commentAddOn() {
    // commentIndex:this.state.commentIndex+1,
    this.setState({commentAll:this.state.commentAll.concat(this.state.text)}, () => (this.setState({inputTextCheck:false, text:""}), console.log(this.state)))
  }
  //엔터키로 댓글 보여주기 함수 실행
  enterAndComment(event) {
    if(event.keyCode === 13 && this.state.inputTextCheck === true) {
      // this.setState({commentIndex:this.state.commentIndex+1})
      this.commentAddOn()      
    } else if(event.keyCode === 13 && this.state.inputTextCheck === false) {
      alert("댓글에 아무내용도 입력되지 않았네요")
    }
  }
  //버튼 클릭으로 댓글 보여주기 함수 실행
  buttonCilck() {
    if(this.state.inputTextCheck === true) {
      this.commentAddOn()
    } else {
      alert("댓글에 아무내용도 입력되지 않았네요")
    }   
  } 

  render() {
    // index부분은 현재 임시용 이다 //
    const commentList = this.state.commentAll.map((item, index) => <p key={index}>{item}</p>)   

    return (
      <article>     
        <div className="article-title">
          <img src={require('../../../images/pjs.jpg')} alt="artcile_title_profile"/>
          <div className="article-title-center">
            <span className="userName-span">suwonjspark88</span>
            <span className="location">평창</span>
          </div>
          <div className="article-title-more">
            <img src={require('../../../images/more.png')} alt="artcile_title_more"/>
          </div>    
        </div> 
        <div className="article-center-image">
          <img src={require('../../../images/snow.jpg')} alt="artcile_img"/> 
        </div>
        <div className="article-content">
          <div className="article-content-title">
            <div className="article-content-title-left">
              <img src={require('../../../images/heart.png')} alt="like"/>
              <img src={require('../../../images/comment.png')} alt="comment"/>
              <img src={require('../../../images/DM.png')} alt="DM"/>
            </div>
            <div className="article-content-title-center">      
            </div>
            <div className="article-content-title-right">
              <img src={require('../../../images/bookmark.png')} alt="bookmark"/>
            </div>
          </div>            
          <div className="article-like-user">
            <img src={require('../../../images/black.png')} alt="article-like-user" />
            <span className="span-like-user">WaKanDa_forever</span>
            <span className="span-like-user-common">님</span>
            <span className="span-like-user">외 302명</span>
            <span className="span-like-user-common">이 좋아합니다</span>
          </div>
          <div className="comment-view-div">            
            {commentList}
          </div>            
          <div className="comment-write-div" onKeyDown={this.enterAndComment.bind(this)}>
            <input type="text" placeholder="댓글 달기..." onChange={this.commentHandler.bind(this)} value={this.state.text}/>
            <button type="submit" className={this.state.inputTextCheck?"clickbutton":"submitButton"} onClick={this.buttonCilck.bind(this)}>게시</button>
          </div>        
        </div>
      </article>
    )
  }
}

export default Article;