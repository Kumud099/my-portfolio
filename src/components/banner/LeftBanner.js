import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
<div className="flex flex-col gap-4 sm:gap-6 mt-2">
  <h2 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase font-titleFont mb-4 text-gray-400">
    FIND ME ON
  </h2>
  <div className="flex gap-4 sm:gap-6">
    <a
      href="https://www.facebook.com/kumud.stha.7/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon text-xs sm:text-sm md:text-base lg:text-xl"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.instagram.com/kumud_shrestha/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon text-xs sm:text-sm md:text-base lg:text-xl"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/kumud-shrestha-236333280/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon text-xs sm:text-sm md:text-base lg:text-xl"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>
    </div>
  );
};

export default LeftBanner;
