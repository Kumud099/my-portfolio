import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const ACCENT = "#5eead4";
const MUTED = "#94a3b8";
const BORDER = "rgba(148, 163, 184, 0.18)";
const PANEL = "rgba(8, 12, 22, 0.85)";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/kumud.stha.7/",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kumud-shrestha-236333280/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kumud_shrestha/",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/Kumud099",
    icon: FaGithub,
  },
];

const ContactLeft = () => {
  return (
    <aside className="w-full flex flex-col gap-8 lg:gap-10">
      <div>
        <p
          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-4"
          style={{ color: MUTED }}
        >
          Direct Access
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span
              className="shrink-0 w-10 h-10 inline-flex items-center justify-center"
              style={{
                backgroundColor: "rgba(94, 234, 212, 0.1)",
                color: ACCENT,
              }}
            >
              <HiOutlineMail className="text-lg" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: MUTED }}
              >
                Primary Email
              </p>
              <a
                href="mailto:shresthakumud5@gmail.com"
                className="block mt-0.5 text-sm sm:text-base font-semibold text-white break-all hover:opacity-80 transition-opacity"
              >
                shresthakumud5@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              className="shrink-0 w-10 h-10 inline-flex items-center justify-center"
              style={{
                backgroundColor: "rgba(94, 234, 212, 0.1)",
                color: ACCENT,
              }}
            >
              <HiOutlinePhone className="text-lg" aria-hidden="true" />
            </span>
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: MUTED }}
              >
                Phone
              </p>
              <a
                href="tel:9861488588"
                className="block mt-0.5 text-sm sm:text-base font-semibold text-white hover:opacity-80 transition-opacity"
              >
                9861488588
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p
          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-4"
          style={{ color: MUTED }}
        >
          System Nodes
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 rounded-sm border px-3 py-3 transition-[border-color,background-color] hover:border-[#5eead4]/40"
              style={{ backgroundColor: PANEL, borderColor: BORDER }}
              aria-label={name}
            >
              <Icon
                className="text-sm shrink-0"
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] sm:text-xs text-slate-200 tracking-wide">
                {name}
              </span>
              <FiArrowUpRight
                className="absolute top-2 right-2 text-xs opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ color: ACCENT }}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>

      <div
        className="rounded-sm border border-l-[3px] p-4 sm:p-5"
        style={{
          backgroundColor: PANEL,
          borderColor: BORDER,
          borderLeftColor: ACCENT,
        }}
      >
        <p
          className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] flex items-center gap-2 font-semibold"
          style={{ color: ACCENT }}
        >
          <FiCheckCircle className="text-base shrink-0" aria-hidden="true" />
          Status: Operational
        </p>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: MUTED }}
        >
          <span className="text-white font-medium">Kumud Shrestha</span>
          {" — "}
          Computer Engineer. Open to collaborations, freelance work, and
          interesting engineering challenges.
        </p>
      </div>
    </aside>
  );
};

export default ContactLeft;
