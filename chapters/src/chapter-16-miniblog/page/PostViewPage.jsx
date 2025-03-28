import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import data from "../../data.json";
import "./Page.css";

const PostViewPage = (props) => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });
  const [comment, setComment] = useState("");
  return (
    <div className="postview">
      <div className="viewcontent">
        <Button title="뒤로 가기" onClick={() => navigate("/mini-home")} />
        <div className="viewcontainer">
          <p className="titletext">{post.title}</p>
          <p className="contenttext">{post.content}</p>
        </div>
        <p className="commentlabel">댓글</p>
        <CommentList comments={post.comments} />
        <TextInput
          height={40}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button
          title="댓글 달기"
          onClick={() => {
            navigate("/mini-home");
          }}
        />
      </div>
    </div>
  );
};

export default PostViewPage;
