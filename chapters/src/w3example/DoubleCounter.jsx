import React, { useEffect, useState } from "react";

const DoubleCounter = () => {
  const [counter, setCounter] = useState(0);
  const [calcul, setCalcul] = useState(0);

  useEffect(() => {
    setCalcul(() => counter * 2);
  }, [counter]);
  return (
    <div>
      <h2>count: {counter}</h2>
      <button onClick={() => setCounter((c) => c + 1)}>click</button>
      <h2>count is {calcul}</h2>
    </div>
  );
};

export default DoubleCounter;
