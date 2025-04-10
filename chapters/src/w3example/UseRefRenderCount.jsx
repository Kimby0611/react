import React, { useEffect, useRef, useState } from "react";

const UseRefRenderCount = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <h1>Render Count: {count.current}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export default UseRefRenderCount;
