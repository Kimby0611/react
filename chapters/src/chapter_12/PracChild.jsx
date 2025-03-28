import React from "react";

const PracChild = ({ input, onOperation, onInputChange, onEqual }) => {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="숫자를 입력하세요."
      />
      <div>
        <button
          onClick={() => {
            onOperation("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            onOperation("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            onOperation("*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            onOperation("/");
          }}
        >
          /
        </button>
      </div>
      <div>
        <button onClick={onEqual}>=</button>
      </div>
    </div>
  );
};

export default PracChild;
