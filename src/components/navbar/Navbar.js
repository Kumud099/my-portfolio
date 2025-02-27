import React, { useState } from "react";
import { Link } from "react-scroll";
import { logok } from "../../assets/index";
import { navLinksdata } from "../../constants/index";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[80px] sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-500 px-4 sm:px-8 flex-wrap">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img className="h-12 w-12 rounded-full" src={logok} alt="logok" />
        <span className="text-xl san-serif text-white whitespace-nowrap sm:block hidden">
          MyPortfolio
        </span>
      </div>

      {/* Navigation Links */}
      <section>
        {/* Hide on small screens, show on medium (768px) and larger */}
        <ul className="hidden md:flex items-center gap-20">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id} className="text-base font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration-300">
              <Link to={link} spy={true} smooth={true} offset={-70} duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
{isOpen && (
  <div className="absolute top-20 left-0 w-full bg-bodyColor p-4 md:hidden">
    <ul className="flex flex-col items-center gap-4">
      {navLinksdata.map(({ _id, title, link }) => (
        <li key={_id} className="text-base text-gray-400 cursor-pointer hover:text-designColor transition duration-300">
          <Link to={link} spy={true} smooth={true} offset={-70} duration={500} onClick={toggleNavbar}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

      </section>
    </div>
  );
}
