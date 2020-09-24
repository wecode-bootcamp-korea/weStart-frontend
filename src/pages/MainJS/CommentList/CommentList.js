import React, { Component } from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";

class CommentList extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="comment-view-div">
        {
          this.props.commentListProps.map((item, inx) => {
            return (
              <Comment key={inx} name={item.user_id} text={item.user_comment} />
            )
          })
        }
      </div>     
    )
  }
}

export default CommentList;