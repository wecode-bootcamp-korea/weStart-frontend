import React, { Component } from "react";
import "./Main_right.scss";
import Main_right_story from "../Main_right_story/Main_right_story";

class Main_right extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-right">
        <div className="main-right-inner">
          <div className="main-right-profile">
            <img src={require('../../../images/pjs.jpg')} alt="profile"/>
            <div className="main-right-profile-text">
              <span className="userName-span">suwonjspark88</span>
              <span className="description">박종선</span>
            </div>
          </div>
          <Main_right_story />
          <div className="main-right-explore">
            <div className="main-right-explore-title">
              <span className="span-right-secondTitle">회원님을 위한 추천</span>
              <span className="span-right-description">모두 보기</span>
            </div>
            <div className="main-right-explore-content">
              <div className="main-right-explore-content-inner">              
                <img src={require('../../../images/spider.png')} alt="story-content-img"/>
                <div className="main-right-explore-content-text">
                  <span className="userName-span">ok_marvel_no_sony</span>
                  <span className="span-explore-userStatus">회원님을 팔로우합니다</span>
                </div>            
                <span className="span-explore-content-follow">팔로우</span>              
              </div>
              <div className="main-right-explore-content-inner">              
                <img src={require('../../../images/dr.jpg')} alt="story-content-img" className="main-right-story-content-img-inner" />
                <div className="main-right-explore-content-text">
                  <span className="userName-span">time_14,000,605</span>
                  <span className="span-explore-userStatus">회원님을 팔로우합니다</span>
                </div>            
                <span className="span-explore-content-follow">팔로우</span>              
              </div>
              <div className="main-right-explore-content-inner">              
                <img src={require('../../../images/fury.png')} alt="story-content-img" className="main-right-story-content-img-inner" />
                <div className="main-right-explore-content-text">
                  <span className="userName-span">not_one_eye</span>
                  <span className="span-explore-userStatus">회원님을 팔로우합니다</span>
                </div>            
                <span className="span-explore-content-follow">팔로우</span>              
              </div>
            </div> 
          </div>
          <div className="main-right-info">
            <span>소개 · 도움말 · 홍보 센터 · API · 채용 정보</span>
            <span>개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그</span>
            <span>언어</span>
            <br/>
            <span>© 2020 INSTAGRAM FROM FACEBOOK</span>        
          </div>
        </div>
      </div>        
    )
  }
}

export default Main_right;