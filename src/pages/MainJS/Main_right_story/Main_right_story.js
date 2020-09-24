import React, { Component } from "react";
import "./Main_right_story.scss";
import Main_right_story_content from "../Main_right_story_content/Main_right_story_content";

class Main_right_story extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-right-story">
        <div className="main-right-story-title">
          <span className="span-right-secondTitle">스토리</span>
          <span className="span-right-description">모두 보기</span>
        </div>
        <Main_right_story_content />
        <Main_right_story_content />
        <Main_right_story_content />
      </div>
    )
  }
}

export default Main_right_story;