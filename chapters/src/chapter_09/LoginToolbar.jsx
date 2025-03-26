import React from "react";

const style = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDiredtion: "raw",
    borderBottom: "1px solid black",
  },
  greeting: {
    marginRight: 8,
  },
};

const LoginToolbar = (props) => {
  const { IsLoggedIn, onClickLogin, onClickLogout } = props;
  return (
    <div style={style.wrapper}>
      {IsLoggedIn && <span style={style.greeting}>환영합니다.</span>}
      {IsLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
};

export default LoginToolbar;
