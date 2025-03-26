import React from "react";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

const TemperatureInput = (props) => {
  //input의 value를 부모 component로 보냄
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해 주세요(댠위: {scaleNames[props.scale]})</legend>
      <input
        value={props.temperature}
        onChange={handleChange}
        readOnly={props.scale === "f"}
      />
    </fieldset>
  );
};

export default TemperatureInput;
