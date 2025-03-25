import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>click</button>
    </div>
  );
};

export default UseRef;
