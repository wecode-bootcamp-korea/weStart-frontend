import React, { Component } from "react";
import "./Main_right_story_content.scss";

class Main_right_story_content extends Component {
  constructor() {
      super();
  }

  render() {
    return (
      <div className="main-right-story-content">
        <div className="main-right-story-content-inner">
          <div className="main-right-story-content-img storyOn-border">
            <img src={require('../../../images/ant.png')} alt="story-content-img"/>
          </div>
          <div className="main-right-story-content-text">
            <span className="userName-span">Ant_man</span>
            <span className="span-story-time">20분 전</span>
          </div>
        </div>             
      </div>
    )
  }
}

export default Main_right_story_content;