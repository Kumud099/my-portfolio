import React from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants/index";

const BG = "#05070f";
const ACCENT = "#ADC6FF";
const MUTED = "#64748b";
const BORDER = "rgba(148, 163, 184, 0.14)";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/kumud.stha.7/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kumud_shrestha/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kumud-shrestha-236333280/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/Kumud099",
    icon: FaGithub,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full border-t"
      style={{ backgroundColor: BG, borderColor: BORDER }}
    >
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p
              className="font-titleFont text-xl sm:text-2xl font-bold tracking-tight text-white"
            >
              MyPortfolio
              <span style={{ color: ACCENT }}>.</span>
            </p>
            <p
              className="mt-2 font-mono text-[11px] sm:text-xs leading-relaxed"
              style={{ color: MUTED }}
            >
              © {year} Kumud Shrestha — Computer Engineer.
              <br className="hidden sm:block" />
              Built with React &amp; Tailwind.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 lg:gap-16">
            <div>
              <p
                className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: MUTED }}
              >
                Quick Link
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:flex-col sm:gap-2">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li key={_id}>
                    <Link
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="font-mono text-xs sm:text-sm text-slate-300 tracking-wide cursor-pointer transition-colors hover:text-[#ADC6FF]"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: MUTED }}
              >
                Find Me On
              </p>
              <ul className="flex flex-col gap-2">
                {socials.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-300 tracking-wide transition-colors hover:text-[#ADC6FF]"
                    >
                      <Icon className="text-sm" style={{ color: ACCENT }} aria-hidden="true" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t"
          style={{ borderColor: BORDER }}
        >
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>
            Status // Available for work
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {socials.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] transition-colors hover:text-[#ADC6FF]"
                style={{ color: MUTED }}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
