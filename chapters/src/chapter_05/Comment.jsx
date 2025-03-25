import React from "react";

const Comment = (props) => {
  return (
    <div className="commentwrap">
      <div>
        <img
          className="commentImage"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt=""
        />
      </div>
      <div className="commentContent">
        <span className="commentName">{props.name}</span>
        <span className="commentText">{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
