import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
};

//계산식
const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

//아래에서 처리한 값을 받아 temperature와 tocelsius/tofahrenheit를 변수로 추가
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  //input이 NaN이면 true, NaN이 아니면 false
  if (Number.isNaN(input)) {
    return "";
  }
  //위의 convert에 받은 값으로 위의 함수 처리
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const Calculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  //삼항연산자로 celsius와 fahrenheit를 처리하여 tryconvert로 보내거나 temperature반환
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      {/* 자식의 value를 받아서 처리 */}
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

export default Calculator;
