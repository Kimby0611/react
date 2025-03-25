import React, { useEffect, useState } from "react";

const UseEffect = (props) => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  });

  useEffect(() => {
    setTimeout(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  });
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <p>I have rendered {timer} times!</p>
    </div>
  );
};

export default UseEffect;
