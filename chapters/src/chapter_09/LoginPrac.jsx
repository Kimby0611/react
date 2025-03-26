import React, { useState } from "react";

const LoginPrac = () => {
  const [login, setLogin] = useState(false);

  const clickLogin = () => {
    setLogin(true);
  };
  const clickLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      {login && <span>성공 환영합니다.</span>}
      {login ? (
        <button onClick={clickLogout}>로그아웃</button>
      ) : (
        <button onClick={clickLogin}>로그인</button>
      )}
      <p>로그인 툴</p>
    </div>
  );
};

export default LoginPrac;
