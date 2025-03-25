import React, { useCallback, useState } from "react";
import UseCallback from "./UseCallback";

const CallbackParent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <p>카운트: {count}</p>
      <UseCallback onClick={handleClick} />
    </div>
  );
};

export default CallbackParent;
