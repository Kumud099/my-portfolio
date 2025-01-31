import React from "react";

function Card({ title, backgroundColor }) {
  return (
    <div
      className={`w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4 h-auto bg-${backgroundColor}-200 p-4 rounded-lg shadow-md`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default Card;
