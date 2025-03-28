import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";
import "./Page.css";

const MainPage = () => {
  const navigate = useNavigate();

  const gohome = () => {
    navigate("/post-write");
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* <Button title="글 작성하기" onClick={() => { navigate("/post-write"); }}/> */}
        <Button title="글 작성하기" onClick={gohome} />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </div>
    </div>
  );
};

export default MainPage;
