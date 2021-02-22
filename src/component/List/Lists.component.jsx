import React from "react";
import "../css/bootstrap.min.css";
import "../js/bootstrap.min.js";
import "../js/jquery.min.js";
import "../js/popper.min.js";

const Nlist = (props) => {
  return (
    <div>
      <li
        className="list-group-item"
        onMouseEnter={props.show}
        onMouseLeave={props.hide}
      >
        <button
          className=" btn-primary btn-xs pull-l"
          onClick={props.click}
          id={props.id}
        >
          X
        </button>
        {props.content}
      </li>
    </div>
  );
};

export default Nlist;
