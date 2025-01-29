import React from "react";

function Title(props) {
  return (
    <div className="py-5">
      <p className="text-xl text-designColor">{props.titleUp}</p>
      <h1
        className="text-5xl 
  font-bold uppercase"
      >
        {props.title}
        <span
          className="text-designColor
    text-6xl "
        >
          {props.mark}
        </span>
      </h1>
    </div>
  );
}

export default Title;
