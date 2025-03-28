import React from "react";
import "./List.css";

const CommentListItem = (props) => {
  const { comment } = props;
  return (
    <div className="comment">
      <p className="contenttext">{comment.content}</p>
    </div>
  );
};

export default CommentListItem;
