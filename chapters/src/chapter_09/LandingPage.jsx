import React, { useState } from "react";
import LoginToolbar from "./LoginToolbar";

const LandingPage = (props) => {
  const [IsLoggedIn, setIsLoggedin] = useState(false);

  const onClickLogin = () => {
    setIsLoggedin(true);
  };
  const onClickLogout = () => {
    setIsLoggedin(false);
  };
  return (
    <div>
      <LoginToolbar
        IsLoggedIn={IsLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>소플과 함게하는 리액트 공부!</div>
    </div>
  );
};

export default LandingPage;
