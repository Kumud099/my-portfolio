import React, { useState } from "react";
import { Link } from "react-scroll";
import { logok } from "../../assets/index";
import { navLinksdata } from "../../constants/index";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="w-full h-[100px] sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-500 px-4 sm:px-8">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full" src={logok} alt="logok" />
        <span className="ml-2 text-xl text-white">MyPortfolio</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex">
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center">
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-bodyColor flex-col items-center justify-center gap-6 sm:hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-lg font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
