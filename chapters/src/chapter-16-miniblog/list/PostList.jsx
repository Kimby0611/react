import React from "react";
import PostListItem from "./PostListItem";
import "./List.css";

const PostList = (props) => {
  const { posts, onClickItem } = props;
  console.log(posts);
  return (
    <div className="postlist">
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => onClickItem(post)}
          />
        );
      })}
    </div>
  );
};

export default PostList;
