import React from "react";
import "./List.css";

const PostListItem = (props) => {
  const { post, onClick } = props;
  return (
    <button className="wrapbtn" onClick={onClick}>
      <p className="titletext">{post.title}</p>
    </button>
  );
};

export default PostListItem;
