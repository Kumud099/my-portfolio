import React from "react";

function Card({ title, backgroundColor }) {
  return (
    <div
      className={`w-full h-auto bg-${backgroundColor}-200 p-4 rounded-lg shadow-md`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default Card;
