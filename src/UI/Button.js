import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-end" onClick={props.onClick}>
        <button className="Sales_btn px-3">
          <b>{props.title}</b>
        </button>
      </div>
    </div>
  );
};

export default Button;
