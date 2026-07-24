import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { ArrowUpRight, Download } from "lucide-react";
import herosSecImg from "../../assets/images/herosSecImg.svg";
import HeroLogicGrid from "./HeroLogicGrid";

const Banner = () => {
  const watermarkRef = useRef(null);

  useEffect(() => {
    const syncNavAlign = () => {
      const el = watermarkRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--nav-inline-start",
        `${Math.max(rect.left, 16)}px`
      );
      document.documentElement.style.setProperty(
        "--nav-inline-end",
        `${Math.max(window.innerWidth - rect.right, 16)}px`
      );
    };

    syncNavAlign();
    window.addEventListener("resize", syncNavAlign);
    // Fonts can shift text width after first paint
    document.fonts?.ready?.then(syncNavAlign);

    return () => {
      window.removeEventListener("resize", syncNavAlign);
    };
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/cv.pdf";
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const outlineBtn =
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#ADC6FF] text-sm font-mono tracking-wide text-[#ADC6FF] bg-transparent hover:bg-[#ADC6FF]/10 transition-colors duration-300 cursor-pointer";
  const primaryBtn =
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono tracking-wide bg-[#ADC6FF] text-[#0F172A] hover:bg-[#c2d4ff] transition-colors duration-300 cursor-pointer";

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#080C18] text-white"
    >
      {/* Spheres sit at the very back of the hero stack */}
      <HeroLogicGrid />

      {/* Background watermark — sized to always fit the viewport width */}
      <span
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[58%] z-[1] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-extrabold uppercase tracking-[0.06em] text-white/[0.07] text-[clamp(1.5rem,7.5vw,8rem)] origin-center"
      >
        BACKEND DEVELOPER
      </span>

      <div className="relative z-10 flex flex-col items-center text-center w-full h-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-10">
        {/* Top copy — always above the image */}
        <div className="shrink-0 relative z-20 flex flex-col items-center gap-1.5 sm:gap-2 pb-0">
          <p className="text-sm sm:text-base md:text-lg text-white/90">
            <span aria-hidden="true">👋</span> Hello, I&apos;m
          </p>

          <h1 className="font-titleFont text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#ADC6FF]">
            Kumud Shrestha
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl leading-snug">
            a computer engineer who is passionate in programming
          </p>
        </div>

        {/* Image — pulled closer under the intro text */}
        <div className="relative flex-[1.6] min-h-0 w-full overflow-hidden flex justify-center -mt-3 sm:-mt-4">
          <img
            src={herosSecImg}
            alt="Kumud Shrestha"
            className="h-[108%] w-auto max-w-full object-contain object-top translate-y-1 sm:translate-y-2"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-[#080C18] to-transparent"
          />
        </div>

        {/* Bottom copy + CTAs */}
        <div className="shrink-0 flex flex-col items-center gap-4 mt-2 relative z-30">
          <p className="text-xs sm:text-sm text-white/70 leading-snug max-w-lg">
            I build scalable backend systems, REST APIs, ERP solutions, and modern
            web applications with a focus on performance, maintainability, and
            clean architecture.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={primaryBtn}
            >
              View Projects
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <button type="button" onClick={downloadResume} className={outlineBtn}>
              Download Resume
              <Download className="w-4 h-4" strokeWidth={2} />
            </button>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={outlineBtn}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
