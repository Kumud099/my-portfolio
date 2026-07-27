import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { blogPosts } from "../../data/blogPosts";
import BlogCard from "./BlogCard";

/** Distinct from GitHub contributions (#080C18 / #3fb950) — blue accents */
const BG = "#05070a";
const BLUE = "#3B82F6";
const BLUE_SOFT = "#93c5fd";
const MUTED = "#94a3b8";
const PAGE_SIZE = 6;

function BlogPagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
      aria-label="Blog pagination"
    >
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="font-mono text-xs uppercase tracking-[0.14em] px-3 py-2 rounded-md border transition-opacity disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-80"
        style={{
          color: BLUE,
          borderColor: "rgba(59, 130, 246, 0.35)",
          backgroundColor: "rgba(59, 130, 246, 0.06)",
        }}
        aria-label="Previous page"
      >
        ← Prev
      </button>

      {pages.map((n) => {
        const active = n === page;
        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-current={active ? "page" : undefined}
            className="font-mono text-xs min-w-[2.25rem] h-9 px-2 rounded-md border transition-colors"
            style={{
              color: active ? "#05070a" : BLUE_SOFT,
              borderColor: active ? BLUE : "rgba(59, 130, 246, 0.3)",
              backgroundColor: active ? BLUE : "transparent",
            }}
          >
            {n}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className="font-mono text-xs uppercase tracking-[0.14em] px-3 py-2 rounded-md border transition-opacity disabled:opacity-35 disabled:cursor-not-allowed hover:opacity-80"
        style={{
          color: BLUE,
          borderColor: "rgba(59, 130, 246, 0.35)",
          backgroundColor: "rgba(59, 130, 246, 0.06)",
        }}
        aria-label="Next page"
      >
        Next →
      </button>
    </nav>
  );
}

function Blog() {
  const sectionRef = useRef(null);
  const [page, setPage] = useState(1);
  const location = useLocation();

  const totalPages = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const pagePosts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return blogPosts.slice(start, start + PAGE_SIZE);
  }, [currentPage]);

  const multiPage = totalPages > 1;
  const singleScreenLayout = blogPosts.length <= 3 && !multiPage;

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

  useEffect(() => {
    if (location.hash !== "#blog") return;
    const el = document.getElementById("blog");
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.hash, location.pathname]);

  const handlePageChange = (next) => {
    if (next < 1 || next > totalPages) return;
    setPage(next);
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className={`relative w-full flex items-center ${
        singleScreenLayout
          ? "min-h-screen h-screen overflow-hidden"
          : "min-h-screen h-auto overflow-visible py-16 sm:py-20"
      }`}
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
            overflow: visible !important;
            padding-top: 4rem;
            padding-bottom: 4rem;
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
            Notes on engineering work, research, and building software —
            starting with our electricity consumption prediction project.
          </p>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {pagePosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <BlogPagination
          page={currentPage}
          totalPages={totalPages}
          onChange={handlePageChange}
        />
      </motion.div>
    </section>
  );
}

export default Blog;
