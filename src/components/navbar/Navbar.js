import React from "react";
import { Link } from "react-scroll";
import { logok } from "../../assets/index";
import { navLinksdata } from "../../constants/index";

export default function Navbar() {
  return (
    <div className="w-full h-[100px] sticky top-0  z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-500">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full " src={logok} alt="logok" />
        <span className="ml-2 text-xl ">MyPortfolio</span>
      </div>
      <div>
        <ul className="flex item-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration: 300"
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
    </div>
  );
}
