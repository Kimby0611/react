import React, { useEffect, useState } from "react";

const Clock = () => {
  //useState >> 컴포넌트의 상태 관리 >> 상태란 컴포넌트가 렌더링에 사용할 수 있는 동적인 데이터
  //const [변수명, 변수를 동적으로 처리할 함수명 (set변수명)] = useState(처음 렌더링 될때의 값)
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //useEffect는 컴포넌트의 생명 주기를 관리하기 위해서 사용
  //마운트, 업데이트, 언마운트의 생명 주기가 있음
  //마운트 >> 컴포넌트가 DOM에 처음 추가될 때
  //업데이트 >> 상태나 속성이 변경되어 컴포넌트가 다시 렌더링 될때
  //언마운트 >> 컴포넌트가 DOM에서 제거될 때
  useEffect(() => {
    const thisTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(thisTime);
  }, []);
  //   const thisTime = () => {
  //     return new Date().toLocaleTimeString();
  //   };
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      {/* <h2>현재 시간: {new Date().toLocaleTimeString()}</h2> */}
      <h2>현재 시간: {time}</h2>
    </div>
  );
};

export default Clock;
