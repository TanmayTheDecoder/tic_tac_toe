import React from "react";
import "../css/button.css";

const Button = ({ value, onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}> {value} </button>
    </div>
  );
};

export default Button;
