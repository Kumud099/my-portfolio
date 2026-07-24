import React from "react";
import { motion } from "framer-motion";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const BG = "#070b14";
const ACCENT = "#5eead4";
const MUTED = "#94a3b8";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-white/[0.06]"
      style={{ backgroundColor: BG }}
    >
      <style>{`
        .contact-grid-bg {
          background-image:
            linear-gradient(rgba(94, 234, 212, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(94, 234, 212, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 75% 70% at 50% 40%, #000 20%, transparent 75%);
        }
        .contact-live-dot {
          box-shadow: 0 0 0 0 rgba(94, 234, 212, 0.55);
          animation: contact-dot-pulse 2s ease-out infinite;
        }
        @keyframes contact-dot-pulse {
          0% { box-shadow: 0 0 0 0 rgba(94, 234, 212, 0.55); }
          70% { box-shadow: 0 0 0 8px rgba(94, 234, 212, 0); }
          100% { box-shadow: 0 0 0 0 rgba(94, 234, 212, 0); }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="contact-grid-bg pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 15% 10%, rgba(94,234,212,0.07), transparent 55%), radial-gradient(ellipse 45% 50% at 90% 80%, rgba(59,130,246,0.06), transparent 55%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <motion.header
          className="mb-10 sm:mb-12 max-w-2xl"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] flex items-center gap-2"
            style={{ color: ACCENT }}
          >
            <span
              className="contact-live-dot inline-block h-1.5 w-1.5 rounded-full shrink-0"
              style={{ backgroundColor: ACCENT }}
              aria-hidden="true"
            />
            Contact
          </p>

          <h2
            id="contact-heading"
            className="mt-3 font-titleFont text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Contact With Me
          </h2>

          <p
            className="mt-3 text-sm sm:text-base leading-relaxed max-w-lg"
            style={{ color: MUTED }}
          >
            Have a project, collaboration, or just want to say hello? Drop a
            message — I&apos;ll get back to you as soon as I can.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            className="lg:col-span-7"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ContactRight />
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ContactLeft />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
