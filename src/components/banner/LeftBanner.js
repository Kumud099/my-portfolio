import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Programming.", "Web development."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });

  return (
    <div className="w-full sm:w-1/2 flex flex-col gap-10 px-6 sm:px-0">
      <div className="flex flex-col gap-6 sm:gap-8">
        <h4 className="pt-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">
          Hello,
        </h4>
        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          My name is
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          KUMUD SHRESTHA,
        </h1>
        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
          a Computer Engineer who is
        </h4>
        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
          passionate in{" "}
          <span className={"font-bold text-designColor uppercase "}>
            {text}
          </span>
          <Cursor cursorBlinking="false" curseStyle="|" cursorColor="#8a3f7b" />
        </h4>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 mt-8">
        {" "}
        {/* Added mt-8 here */}
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase font-titleFont mb-4 text-gray-400">
          Skills on
        </h2>
        <div className="flex gap-4 sm:gap-6">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <RiTailwindCssFill />
          </span>
          <span className="bannerIcon">
            <TbBrandJavascript />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
