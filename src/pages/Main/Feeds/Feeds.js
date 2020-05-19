import React, { Component } from "react";
import "./Feeds.scss";
import Article from "../Article/Article";


class Feeds extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="feeds">
        <Article />
        <Article />     
      </div> 
    )
  }
}

export default Feeds;