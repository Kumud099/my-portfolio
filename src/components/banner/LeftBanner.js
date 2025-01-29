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
    <div className="w-1/2 flex flex-col gap-20 ">
      <div className="flex flex-col gap-8">
        <h4 className=" pt-20 text-3xl font-normal">Hello,</h4>
        <h4 className="text-2xl font-bold">My name is</h4>
        <h1 className="text-4xl font-bold">KUMUD SHRESTHA,</h1>
        <h4 className="text-2xl font-normal"> a Computer Engineer who is</h4>
        <h4 className="text-2xl font-normal">
          passionate in{" "}
          <span className={" font-bold text-designColor uppercase "}>
            {text}
          </span>
          <Cursor cursorBlinking="false" curseStyle="|" cursorColor="#8a3f7b" />
        </h4>
      </div>
      {/* <div className="flex justify-between pt-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
            find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div> */}
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
          Skills on
        </h2>
        <div className="flex gap-4">
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
