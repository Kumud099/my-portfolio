import React from "react";

function Title(props) {
  return (
    <div className="py-5">
      <p className="text-xl text-designColor">{props.titleUp}</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
        {props.title}
        <span className="text-designColor text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {props.mark}
        </span>
      </h1>
    </div>
  );
}

export default Title;
