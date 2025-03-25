import React, { useState } from "react";
import UseMemoChild from "./UseMemoChild";

const UseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleAdd = () => {
    setNumbers((prev) => [...prev, prev.length + 1]);
  };
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>카운트 증가</button>
      <button onClick={handleAdd}>추가</button>
      <UseMemoChild numbers={numbers} />
    </div>
  );
};
export default UseMemo;
