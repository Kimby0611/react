import React from "react";
import CommentListItem from "./CommentListItem";
import "./List.css";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <div className="commentlist">
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
