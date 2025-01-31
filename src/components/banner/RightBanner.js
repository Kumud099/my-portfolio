import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function RightBanner() {
  return (
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-center relative px-6 sm:px-12">
      {/* Hide the section on small screens, display it as a flex container on larger screens */}
      <div className="flex flex-col gap-6 sm:gap-4 pt-10 items-center sm:flex hidden">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-titleFont mb-4 text-gray-400 text-center">
          FIND ME ON
        </h2>
        <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
          <a
            href="https://www.facebook.com/kumud.stha.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/kumud_shrestha/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kumud-shrestha-236333280/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightBanner;
