import React from "react";
import "../css/bootstrap.min.css";
import "../js/bootstrap.min.js";
import "../js/jquery.min.js";
import "../js/popper.min.js";

const FormInput = (props) => {
  return (
    <input
      className="form-control mb-3"
      type={props.typeText}
      placeholder={props.placeholderText}
      onKeyDown={props.keyDownHandler}
    />
  );
};

export default FormInput;
