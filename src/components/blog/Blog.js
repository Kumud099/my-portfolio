import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Distinct from GitHub contributions (#080C18 / #3fb950) — blue accents */
const BG = "#05070a";
const CARD = "#0c1220";
const BLUE = "#3B82F6";
const BLUE_SOFT = "#93c5fd";
const MUTED = "#94a3b8";

const posts = [
  {
    id: 1,
    date: "24 OCT 2023",
    readTime: "12 MIN READ",
    title: "Lorem Ipsum Dolor Sit Amet",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Lorem", "Ipsum"],
    href: "#",
  },
  {
    id: 2,
    date: "12 SEP 2023",
    readTime: "8 MIN READ",
    title: "Consectetur Adipiscing Elit",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Dolor", "Sit"],
    href: "#",
  },
  {
    id: 3,
    date: "28 AUG 2023",
    readTime: "15 MIN READ",
    title: "Sed Do Eiusmod Tempor",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["Amet", "Elit"],
    href: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function BlogCard({ post, index }) {
  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{
        y: -4,
        borderColor: "rgba(59, 130, 246, 0.4)",
        boxShadow:
          "0 0 0 1px rgba(59, 130, 246, 0.14), 0 18px 40px rgba(0,0,0,0.35)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="group relative flex flex-col rounded-xl border border-white/[0.07] p-5 sm:p-6"
      style={{ backgroundColor: CARD }}
    >
      <p
        className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider"
        style={{ color: MUTED }}
      >
        {post.date}
        <span className="mx-2 opacity-50">•</span>
        {post.readTime}
      </p>

      <h3 className="mt-3 font-titleFont text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">
        {post.title}
      </h3>

      <p
        className="mt-2 text-sm leading-relaxed flex-1 line-clamp-3"
        style={{ color: MUTED }}
      >
        {post.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] sm:text-[11px] rounded-full px-2.5 py-1 border"
            style={{
              color: BLUE_SOFT,
              borderColor: "rgba(59, 130, 246, 0.4)",
              backgroundColor: "rgba(59, 130, 246, 0.08)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={post.href}
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wide transition-colors"
        style={{ color: BLUE }}
        onClick={post.href === "#" ? (e) => e.preventDefault() : undefined}
        {...(post.href !== "#"
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        Read the log
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </a>
    </motion.article>
  );
}

function Blog() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [40, 0, 0, -40]
  );

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative w-full min-h-screen h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: BG, color: "#fff" }}
      aria-labelledby="blog-heading"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
        #blog .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        @keyframes blog-dot-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.55); }
          50% { opacity: 0.75; box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
        }
        .blog-live-dot {
          animation: blog-dot-pulse 2s ease-out infinite;
        }
        @media (max-width: 768px) {
          #blog {
            height: auto !important;
            min-height: 100vh;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 0%, rgba(59,130,246,0.08), transparent 50%), radial-gradient(ellipse 50% 45% at 90% 70%, rgba(147,197,253,0.05), transparent 55%)",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[90rem] mx-auto px-3 sm:px-4 lg:px-6 py-10 sm:py-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <header className="mb-8 sm:mb-10 max-w-2xl">
          <p
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] flex items-center gap-2"
            style={{ color: BLUE }}
          >
            <span
              className="blog-live-dot inline-block h-1.5 w-1.5 rounded-full shrink-0"
              style={{ backgroundColor: BLUE }}
              aria-hidden="true"
            />
            Active engineering logs
          </p>

          <h2
            id="blog-heading"
            className="mt-3 font-titleFont text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
            style={{
              backgroundImage: `linear-gradient(90deg, #ffffff 0%, ${BLUE_SOFT} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Blogs
          </h2>

          <p
            className="mt-3 text-sm sm:text-base leading-relaxed max-w-lg"
            style={{ color: MUTED }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <a
            href="https://github.com/Kumud099"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-80"
            style={{ color: BLUE }}
          >
            View more →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Blog;
