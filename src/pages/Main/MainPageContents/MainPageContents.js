import React, { Component } from "react";
import "./MainPageContents.scss";
import Feeds from "../Feeds/Feeds";
import Main_right from "../Main_right/Main_right";

class MainPageContents extends Component {
  constructor() {
      super();
  }

  render() {
    return (
      <div className="MainPageContents">
        <Feeds />
        <Main_right />    
      </div>
    )
  }
}

export default MainPageContents;