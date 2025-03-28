import React, { useState } from "react";
import PracChild from "./PracChild";

const CalPrac = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (value) => {
    setInput(value);
  };

  const handleOperation = (op) => {
    const num = parseFloat(input);

    if (Number.isNaN(num)) {
      setHistory("숫자만 입력할 수 있습니다.");
      setInput("");
      return;
    }

    if (history === "") {
      setHistory(num.toString());
      setResult(num);
    } else {
      const lastOp = history.slice(-1); // 마지막 연산 기호
      const prevResult = calculator(result, num, lastOp);
      setResult(prevResult);
      setHistory(`${history} ${op} ${num}`);
    }
    setInput(""); // 연산 후 입력 초기화
  };

  const handleEqual = () => {
    const num = parseFloat(input);

    if (Number.isNaN(num)) {
      setHistory("숫자만 입력할 수 있습니다.");
      setInput("");
      return;
    }

    // 마지막 입력값을 history에 추가
    if (input !== "") {
      const lastOp = history.slice(-1);
      setHistory(`${history} ${num}`);
      setInput("");
    }

    // 전체 계산식 평가
    const finalResult = evaluateHistory(history);
    setResult(finalResult);
  };

  const calculator = (prev, current, op) => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return current !== 0 ? prev / current : "0으로 나눌 수 없습니다";
      default:
        return current;
    }
  };

  const evaluateHistory = (historyString) => {
    // 계산식을 공백으로 분리하여 숫자와 연산자로 나눔
    const tokens = historyString.split(" ").filter((token) => token !== "");
    if (tokens.length === 0) return 0;

    let tempResult = parseFloat(tokens[0]);

    // 순차적으로 계산 (연산 우선순위는 고려하지 않음)
    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const nextNum = parseFloat(tokens[i + 1]);
      tempResult = calculator(tempResult, nextNum, op);
    }

    return tempResult;
  };

  const clear = () => {
    setInput("");
    setHistory("");
    setResult(0);
  };

  return (
    <div>
      <PracChild
        input={input}
        onInputChange={handleInput}
        onOperation={handleOperation}
        onEqual={handleEqual}
      />
      <p>계산식: {history || "계산식 없음"}</p>
      <p>결과: {result}</p>
      <button onClick={clear}>초기화</button>
    </div>
  );
};

export default CalPrac;
