import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Layout, Database, SlidersHorizontal } from "lucide-react";
import TechBalls from "./TechBalls";

const BG = "#172338";
const INK = "#ffffff";
const MUTED = "rgba(255,255,255,0.55)";
const ACCENT = "#3B82F6";
const CARD = "#1e2a40";

const categories = [
  {
    title: "Backend",
    icon: Server,
    accent: "#7EB6FF",
    track: "rgba(255,255,255,0.1)",
    skills: [
      { name: "Python / Django", level: 95 },
      { name: "FastAPI / DRF", level: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    accent: "#ADC6FF",
    track: "rgba(255,255,255,0.1)",
    skills: [
      { name: "React / Inertia.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    accent: "#86EFAC",
    track: "rgba(255,255,255,0.1)",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    title: "DevOps",
    icon: SlidersHorizontal,
    accent: "#FDBA74",
    track: "rgba(255,255,255,0.1)",
    skills: [
      { name: "Docker / K8s", level: 75 },
      { name: "Git / CI/CD", level: 88 },
    ],
  },
];

function SkillBar({ name, level, accent, track, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <p
          className="text-[0.7rem] sm:text-xs font-mono uppercase tracking-wide"
          style={{ color: MUTED }}
        >
          {name}
        </p>
        <span
          className="text-[0.7rem] sm:text-xs font-mono tabular-nums"
          style={{ color: MUTED }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-[3px] w-full overflow-hidden rounded-full"
        style={{ backgroundColor: track }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: accent }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col gap-8 rounded-2xl border border-white/10 p-5 sm:p-6"
      style={{ backgroundColor: CARD }}
    >
      <div className="flex items-center gap-3">
        <Icon
          className="h-5 w-5 shrink-0"
          strokeWidth={1.75}
          style={{ color: ACCENT }}
        />
        <h3
          className="text-base sm:text-lg font-semibold tracking-tight"
          style={{ color: INK }}
        >
          {category.title}
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            accent={category.accent}
            track={category.track}
            delay={0.15 + index * 0.06 + i * 0.1}
          />
        ))}
      </div>
    </motion.article>
  );
}

function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12"
      style={{ backgroundColor: BG, color: INK }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <h2 className="font-titleFont text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Technical{" "}
            <span style={{ color: ACCENT }}>Skills</span>
          </h2>
          <p
            className="mt-3 text-sm sm:text-base max-w-xl mx-auto sm:mx-0"
            style={{ color: MUTED }}
          >
            Quantified proficiency in core development domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-12 bg-transparent">
        <TechBalls />
      </div>
    </section>
  );
}

export default TechnicalSkills;
