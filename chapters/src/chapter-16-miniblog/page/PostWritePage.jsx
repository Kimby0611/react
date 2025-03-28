import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import "./Page.css";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  :not(:last-child) {
    margin-bottom: 16px;
`;

const PostWritePage = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextInput
          height={480}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default PostWritePage;
