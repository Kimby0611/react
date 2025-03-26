import React from "react";

const PracChild = (props) => {
  const plusNum = (event) => {
    props.onPlus(event.target.value);
  };
  return (
    <div>
      <input type="text" value={props.value} onChange={plusNum} />
    </div>
  );
};

export default PracChild;
