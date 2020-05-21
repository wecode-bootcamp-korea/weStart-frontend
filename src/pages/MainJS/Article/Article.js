import React, { Component } from "react";
import "./Article.scss";
import CommentList from "../CommentList/CommentList";
import CommentInput from "../CommentInput/CommentInput";

class Article extends Component {
  constructor() {
    super();

    this.state = {
      name:"parksunl",
      commentList: {
        "data":[]
      }
    }
  }  
  
  // 기존 댓글 내용 가져와서 보여줄 get fetch //
  componentDidMount() {
    fetch("http://10.58.4.56:8000/comment")
    .then((response) => response.json()) 
    .then((res) => this.setState({commentList:res}, () => console.log(this.state)))       
  }  

  // commentInput 컴포넌트에서 온 댓글값을 하나의 commentList state 변경하기 위한 함수 //
  commentConcat = (event) => {
    this.setState({commentList:this.state.commentList.concat(event)})
  }

  render() {
    return (
      <article>     
        <div className="article-title">
          <img src={require('../../../images/pjs.jpg')} alt="artcile_title_profile"/>
          <div className="article-title-center">
            <span className="userName-span">{this.state.name}</span>
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
          <CommentList commentListProps={this.state.commentList.data} />         
          <CommentInput commentInputProps={this.commentConcat} name={this.state.name} />     
        </div>
      </article>
    )
  }
}

export default Article;