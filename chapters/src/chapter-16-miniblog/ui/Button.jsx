import React from "react";
import "./UiStyle.css";

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <div>
      <button className="stylebutton" onClick={onClick}>
        {title || "button"}
      </button>
    </div>
  );
};

export default Button;
