import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ACCENT = "#3B82F6";

const timeline = [
  {
    date: "2019",
    title: "Started Bachelor of Computer Engineering",
    org: "Kathmandu Engineering College (Tribhuvan University)",
    description:
      "Began my journey in computer engineering, building a strong foundation in programming, data structures, algorithms, database systems, and software development while exploring various areas of technology.",
  },
  {
    date: "February 2024 – May 2024",
    title: "Web Development Intern",
    org: "Monal Tech Pvt. Ltd.",
    description:
      "Worked alongside experienced developers to build responsive web applications using React, HTML, CSS, and JavaScript. Gained practical experience with Git, collaborative development workflows, and modern frontend practices.",
  },
  {
    date: "June 2024",
    title: "Bachelor of Computer Engineering",
    org: "Kathmandu Engineering College",
    description:
      "Successfully graduated with a Bachelor's degree in Computer Engineering. During my studies, I completed academic projects in Image Steganography and Electricity Consumption Analysis & Prediction, and co-authored a research paper selected for publication.",
  },
  {
    date: "2024 – Present",
    title: "Backend Developer",
    org: "Hinomaru Technology",
    description:
      "Developing and maintaining enterprise ERP solutions using Django, Django REST Framework, React with Inertia.js, PostgreSQL, Redis, and Docker. Focused on designing scalable backend systems, REST APIs, database optimization, and building features for real-world business applications.",
  },
  {
    date: "Today",
    title: "Continuous Learning & Professional Growth",
    org: null,
    description:
      "Continuously expanding my expertise in AI, DevOps, Cloud Computing, System Design, and modern software architecture while building personal projects, exploring emerging technologies, and striving to become a well-rounded software engineer.",
  },
];

function DescriptionBox({ children, boxRef }) {
  return (
    <div
      ref={boxRef}
      className="relative rounded-xl border border-[#3B82F6]/30 bg-[#1a2438]/90 p-4 sm:p-5"
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3B82F6] bg-[#131b2e]"
        style={{ boxShadow: `0 0 8px ${ACCENT}` }}
      />
      {children}
    </div>
  );
}

function TitleBlock({ title, org, titleRef }) {
  return (
    <div ref={titleRef} className="relative max-w-[17rem] lg:max-w-[20rem]">
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3B82F6] bg-[#131b2e]"
        style={{ boxShadow: `0 0 8px ${ACCENT}` }}
      />
      <h3 className="text-right text-lg lg:text-xl font-semibold text-white leading-snug pt-1">
        {title}
      </h3>
      {org && (
        <p
          className="mt-1 text-right text-sm lg:text-base font-medium"
          style={{ color: ACCENT }}
        >
          {org}
        </p>
      )}
    </div>
  );
}

function TimelineItem({ item }) {
  const itemRef = useRef(null);
  const titleRef = useRef(null);
  const nodeRef = useRef(null);
  const boxRef = useRef(null);
  const [paths, setPaths] = useState({ left: "", right: "", ready: false });

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.9", "start 0.45"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const boxOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.55, 1]);
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const branchProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
  });

  useLayoutEffect(() => {
    const el = itemRef.current;
    const titleEl = titleRef.current;
    const nodeEl = nodeRef.current;
    const boxEl = boxRef.current;
    if (!el || !titleEl || !nodeEl || !boxEl) return;

    const measure = () => {
      const root = el.getBoundingClientRect();
      const title = titleEl.getBoundingClientRect();
      const node = nodeEl.getBoundingClientRect();
      const box = boxEl.getBoundingClientRect();

      const nx = node.left + node.width / 2 - root.left;
      const ny = node.top + node.height / 2 - root.top;

      // Left: same as description — horizontal to title center, then down onto top-center
      const titleTopCenterX = title.left + title.width / 2 - root.left;
      const titleTopY = title.top - root.top;
      const leftPath = `M ${nx} ${ny} H ${titleTopCenterX} V ${titleTopY}`;

      // Right: from node to box center, then down onto the top-center contact
      const boxTopCenterX = box.left + box.width / 2 - root.left;
      const boxTopY = box.top - root.top;
      const rightPath = `M ${nx} ${ny} H ${boxTopCenterX} V ${boxTopY}`;

      setPaths({ left: leftPath, right: rightPath, ready: true });
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    ro.observe(titleEl);
    ro.observe(boxEl);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <motion.li ref={itemRef} style={{ opacity, y }} className="relative">
      {/* Measured circuit branches (desktop) */}
      {paths.ready && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block overflow-visible"
          fill="none"
        >
          <motion.path
            d={paths.left}
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            style={{ pathLength: branchProgress }}
            opacity={0.95}
          />
          <motion.path
            d={paths.left}
            stroke={ACCENT}
            strokeWidth="4"
            strokeLinecap="square"
            style={{ pathLength: branchProgress }}
            opacity={0.2}
          />
          <motion.path
            d={paths.right}
            stroke={ACCENT}
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            style={{ pathLength: branchProgress }}
            opacity={0.95}
          />
          <motion.path
            d={paths.right}
            stroke={ACCENT}
            strokeWidth="4"
            strokeLinecap="square"
            style={{ pathLength: branchProgress }}
            opacity={0.2}
          />
        </svg>
      )}

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-x-8 lg:gap-x-12">
        {/* Title — pushed below the node so the wire drops onto top-center */}
        <div className="min-w-0 flex justify-end">
          <div className="mt-8">
            <TitleBlock
              title={item.title}
              org={item.org}
              titleRef={titleRef}
            />
          </div>
        </div>

        {/* Node + date */}
        <div className="relative flex flex-col items-center w-[5.5rem] lg:w-24">
          <span
            ref={nodeRef}
            className="relative z-20 flex h-5 w-5 items-center justify-center rounded-full border border-[#3B82F6] bg-[#131b2e]"
          >
            <motion.span
              className="block h-2 w-2 rounded-full"
              style={{
                scale: dotScale,
                backgroundColor: ACCENT,
                boxShadow: `0 0 10px ${ACCENT}`,
              }}
            />
          </span>
          <span
            className="mt-3 text-[0.65rem] lg:text-xs font-mono tracking-wide text-center leading-tight"
            style={{ color: ACCENT }}
          >
            {item.date}
          </span>
        </div>

        {/* Description box — pushed below the node so the wire can drop onto top-center */}
        <div className="min-w-0 flex justify-start">
          <motion.div
            style={{ opacity: boxOpacity }}
            className="w-full max-w-[17rem] lg:max-w-[20rem] mt-8"
          >
            <DescriptionBox boxRef={boxRef}>
              <p className="text-sm lg:text-base text-white/75 leading-relaxed">
                {item.description}
              </p>
            </DescriptionBox>
          </motion.div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden pl-12">
        <span className="absolute left-3 top-3 z-20 -translate-x-1/2">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#3B82F6] bg-[#131b2e]">
            <motion.span
              className="block h-1.5 w-1.5 rounded-full"
              style={{
                scale: dotScale,
                backgroundColor: ACCENT,
                boxShadow: `0 0 8px ${ACCENT}`,
              }}
            />
          </span>
        </span>
        <motion.div
          aria-hidden="true"
          className="absolute left-3 top-[0.95rem] h-px w-6 origin-left"
          style={{
            scaleX: branchProgress,
            background: ACCENT,
            boxShadow: `0 0 6px ${ACCENT}`,
          }}
        />
        <p
          className="text-xs font-mono tracking-wide mb-2"
          style={{ color: ACCENT }}
        >
          {item.date}
        </p>
        <h3 className="text-base font-semibold text-white leading-snug">
          {item.title}
        </h3>
        {item.org && (
          <p className="mt-1 text-sm font-medium" style={{ color: ACCENT }}>
            {item.org}
          </p>
        )}
        <motion.div style={{ opacity: boxOpacity }} className="mt-3">
          <div className="relative rounded-xl border border-[#3B82F6]/30 bg-[#1a2438]/90 p-4">
            <p className="text-sm text-white/75 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.li>
  );
}

function PowerConduit({ progress, className, style }) {
  return (
    <div aria-hidden="true" className={className} style={style}>
      <div className="absolute inset-0 bg-white/10" />
      <motion.div
        className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 origin-top"
        style={{
          scaleY: progress,
          background: `linear-gradient(to bottom, transparent, ${ACCENT}33 4%, ${ACCENT}44 96%, transparent)`,
          filter: "blur(2px)",
        }}
      />
      <motion.div
        className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top"
        style={{
          scaleY: progress,
          background: `linear-gradient(to bottom, ${ACCENT}88, ${ACCENT}, ${ACCENT}88)`,
          boxShadow: `0 0 8px ${ACCENT}aa, 0 0 16px ${ACCENT}55`,
        }}
      />
      <motion.div
        className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top overflow-hidden"
        style={{ scaleY: progress }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              to bottom,
              ${ACCENT} 0px,
              ${ACCENT} 10px,
              transparent 10px,
              transparent 18px
            )`,
            opacity: 0.85,
          }}
        />
      </motion.div>
    </div>
  );
}

function Career() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.35"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section
      id="career"
      className="relative w-full bg-[#131b2e] text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-titleFont text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-14 sm:mb-20">
          My career &{" "}
          <span style={{ color: ACCENT }}>experience</span>
        </h2>

        <div ref={containerRef} className="relative">
          <PowerConduit
            progress={smoothProgress}
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 md:block"
          />
          <PowerConduit
            progress={smoothProgress}
            className="pointer-events-none absolute left-3 top-0 bottom-0 w-px md:hidden"
            style={{ transform: "none" }}
          />

          <ol className="relative flex flex-col gap-14 sm:gap-16 md:gap-24">
            {timeline.map((item) => (
              <TimelineItem key={item.date} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Career;
