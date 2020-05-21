import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <p className="commentText">
        <b>{this.props.name}</b>
        <span>{this.props.text}</span>
      </p>
    )    
  }
}

export default Comment;