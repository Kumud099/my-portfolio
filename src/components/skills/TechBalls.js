import React from "react";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiReact,
  SiInertia,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
} from "react-icons/si";

const techs = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "DRF", Icon: null, color: "#FF6B6B", label: "DRF" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Inertia.js", Icon: SiInertia, color: "#9553E9" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Postgres", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

function LogoItem({ name, Icon, color, label }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2 px-6 sm:px-8 bg-transparent">
      {Icon ? (
        <Icon
          className="h-10 w-10 sm:h-12 sm:w-12"
          style={{ color }}
          aria-hidden
        />
      ) : (
        <span
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center text-sm sm:text-base font-bold bg-transparent"
          style={{ color }}
        >
          {label}
        </span>
      )}
      <span className="text-xs sm:text-sm font-mono tracking-wide text-white/70 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function TechBalls() {
  const track = [...techs, ...techs];

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent py-4 sm:py-5"
      aria-label="Technology stack"
    >
      <style>{`
        @keyframes tech-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech-logo-track {
          animation: tech-logo-marquee 32s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-logo-track { animation: none; }
        }
      `}</style>

      <div className="tech-logo-track flex items-center bg-transparent">
        {track.map((tech, i) => (
          <LogoItem key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}

export default TechBalls;
