import React, { useState } from "react";
import { Link } from "react-scroll";
import { logok } from "../../assets/index";
import { navLinksdata } from "../../constants/index";
import { X, Menu } from "lucide-react";

const ACCENT = "#ADC6FF";
const MUTED = "#94a3b8";
const BORDER = "rgba(148, 163, 184, 0.14)";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen((open) => !open);
  const closeNavbar = () => setIsOpen(false);

  return (
    <header
      className="w-full h-[80px] relative bg-transparent"
      style={{
        paddingLeft: "var(--nav-inline-start, 1rem)",
        paddingRight: "var(--nav-inline-end, 1rem)",
      }}
    >
      <div className="h-full mx-auto flex items-center justify-between gap-4">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
          onClick={closeNavbar}
        >
          <img
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border"
            style={{ borderColor: BORDER }}
            src={logok}
            alt="Kumud Shrestha"
          />
          <span className="hidden sm:inline font-titleFont text-lg font-bold tracking-tight text-white whitespace-nowrap">
            KS.Portfolio
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1 lg:gap-2">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="nav-link-active"
                  className="nav-link relative inline-flex px-2.5 lg:px-3 py-2 font-mono text-[11px] lg:text-xs uppercase tracking-[0.14em] cursor-pointer transition-colors duration-300"
                  style={{ color: MUTED }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border transition-colors"
          style={{ borderColor: BORDER, color: ACCENT }}
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 w-full md:hidden z-50 bg-transparent"
        >
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="nav-link-active"
                  onClick={closeNavbar}
                  className="nav-link block w-full px-3 py-3 font-mono text-xs uppercase tracking-[0.14em] cursor-pointer transition-colors duration-300"
                  style={{ color: MUTED }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .nav-link:hover {
          color: ${ACCENT} !important;
        }
        .nav-link-active {
          color: ${ACCENT} !important;
        }
        .nav-link-active::after {
          content: "";
          position: absolute;
          left: 0.65rem;
          right: 0.65rem;
          bottom: 0.35rem;
          height: 1px;
          background: ${ACCENT};
          opacity: 0.7;
        }
        @media (max-width: 767px) {
          .nav-link-active::after {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
