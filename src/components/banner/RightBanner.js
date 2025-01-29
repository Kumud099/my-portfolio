import React from "react";
import { profileImg } from "../../assets/index";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function RightBanner() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center relative">
      <img
        className="w-[250px] h-[250px] z-10 rounded-full object-cover mt-10"
        src={profileImg}
        alt="profileImg"
      />
      <div className="flex flex-col gap-4 pt-10 items-center">
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
          find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/kumud.stha.7/" // Replace with your actual Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/kumud_shrestha/" // Replace with your actual Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kumud-shrestha-236333280/" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightBanner;
