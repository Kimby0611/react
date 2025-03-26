import React, { useState } from "react";
import PracChild from "./PracChild";

const calPlus = (num1, num2) => {
  const a = parseInt(num1);
  const b = parseInt(num2);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "숫자만 입력할 수 있습니다.";
  }
  return a + b;
};

const CalPrac = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");

  const handleNum1 = (num1) => {
    setNum1(num1);
  };
  const handleNum2 = (num2) => {
    setNum2(num2);
  };

  const plusButton = () => {
    setTotal(calPlus(num1, num2));
    setNum1("");
    setNum2("");
  };

  return (
    <div>
      <PracChild onPlus={handleNum1} value={num1} />
      <PracChild onPlus={handleNum2} value={num2} />
      <button onClick={plusButton}>+</button>
      <p>{total}</p>
    </div>
  );
};

export default CalPrac;
