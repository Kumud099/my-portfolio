import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { logok } from "../../assets/index";
import { navLinksdata } from "../../constants/index";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".menu-container") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full h-[80px] sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-500 px-4 sm:px-8">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img className="h-12 w-12 rounded-full" src={logok} alt="logok" />
        <span className="text-xl text-white whitespace-nowrap">
          MyPortfolio
        </span>
      </div>

      {/* Desktop Menu */}
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

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center menu-container">
        <button
          className="text-white text-2xl"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-bodyColor flex flex-col items-center justify-center gap-6 sm:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
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
