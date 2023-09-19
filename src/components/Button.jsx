import React from "react";
import "../css/button.css";

const Button = ({ value, onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick} className="btn"> {value} </button>
    </div>
  );
};

export default Button;
