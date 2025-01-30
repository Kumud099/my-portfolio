import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {["Home", "About", "Projects", "Cv", "Contact"].map((item, index) => (
            <li key={index}>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                {item}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-full flex flex-col gap-8">
        <h2 className="text-xl uppercase font-titleFont mb-4 text-designColor">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/kumud.stha.7/" // Replace with your actual Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/kumud_shrestha/" // Replace with your actual Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kumud-shrestha-236333280/" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
