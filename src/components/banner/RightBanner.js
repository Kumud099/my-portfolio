import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function RightBanner() {
  return (
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-center relative px-6 sm:px-12">
      <div className="flex flex-col gap-6 sm:gap-4 pt-10 items-center sm:flex hidden">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-titleFont mb-4 text-gray-400 text-center">
          FIND ME ON
        </h2>
        <div className="flex gap-4 sm:gap-5 justify-center flex-wrap">
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
}

export default RightBanner;
