import React from "react";

function CvCard(props) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 group flex flex-col sm:flex-row gap-8">
      <div className="w-10 h-[6px] bg-black bg-opacity-20 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 ">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full sm:w-[75%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold group-hover:text-white duration-300">
              {props.title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300 ">
              {props.subTitle}
            </p>
          </div>
          <div>
            <p className="w-[100%] sm:w-[150%] h-auto bg-black bg-opacity-60 text-designColor text-center rounded-lg justify-center flex flex-col shadow-shadowOne text-sm font-medium py-2">
              {props.result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvCard;
