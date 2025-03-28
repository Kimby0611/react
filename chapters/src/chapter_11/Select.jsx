import React, { useState } from "react";

const fruits = [
  { id: 1, name: "apple", ko: "사과" },
  { id: 2, name: "banana", ko: "바나나" },
  { id: 3, name: "grape", ko: "포도" },
  { id: 4, name: "watermelon", ko: "수박" },
];

const Select = () => {
  const [value, setValue] = useState("grape");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    alert("선택한 과일은: " + value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요
        <select value={value} onChange={handleChange}>
          {fruits.map((fruits) => {
            return (
              <option key={fruits.id} value={fruits.name}>
                {fruits.ko}
              </option>
            );
          })}
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default Select;
