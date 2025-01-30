import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function RightBanner() {
  return (
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-center relative px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4 sm:gap-6 pt-8 sm:pt-10 items-center">
        <h2 className="text-sm sm:text-base md:text-lg font-titleFont mb-4 text-gray-400 text-center">
          FIND ME ON
        </h2>
        <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
          <a
            href="https://www.facebook.com/kumud.stha.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/kumud_shrestha/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kumud-shrestha-236333280/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightBanner;
