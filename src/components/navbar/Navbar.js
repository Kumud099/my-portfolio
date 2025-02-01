import React, { useState } from "react";
import { Link } from "react-scroll";
import { logok } from "../../assets/index";
import { navLinksdata } from "../../constants/index";
import Hamburger from "hamburger-react"; // Import Hamburger component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu toggle

  return (
    <div className="w-full h-[80px] sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-500 px-4 sm:px-8">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img className="h-12 w-12 rounded-full" src={logok} alt="logok" />
        <span className="text-xl text-white whitespace-nowrap sm:block hidden">
          MyPortfolio
        </span>
      </div>

      {/* Desktop Menu (visible only on larger screens) */}
      <div className="hidden sm:flex">
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration-300"
            >
              <Link
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

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden flex items-center">
        {/* Hamburger icon */}
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          size={30}
          color="#fff"
        />
      </div>

      {/* Mobile Menu (visible only on smaller screens) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden w-full absolute top-[80px] left-0 bg-bodyColor flex flex-col items-center gap-6 pt-6`}
      >
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            key={_id}
            className="text-lg font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration-300"
          >
            <Link
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMenuOpen(false)} // Close menu after selection
            >
              {title}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
