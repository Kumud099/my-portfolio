import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CARD = "#0c1220";
const BLUE = "#3B82F6";
const BLUE_SOFT = "#93c5fd";
const MUTED = "#94a3b8";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function BlogCard({ post, index = 0, animate = true }) {
  return (
    <motion.article
      custom={index}
      variants={animate ? fadeUp : undefined}
      initial={animate ? "hidden" : false}
      animate={animate ? "show" : false}
      exit={
        animate ? { opacity: 0, y: 12, transition: { duration: 0.2 } } : undefined
      }
      whileHover={{
        y: -4,
        borderColor: "rgba(59, 130, 246, 0.4)",
        boxShadow:
          "0 0 0 1px rgba(59, 130, 246, 0.14), 0 18px 40px rgba(0,0,0,0.35)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="group relative flex flex-col rounded-xl border border-white/[0.07] p-5 sm:p-6 h-full"
      style={{ backgroundColor: CARD }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="absolute inset-0 z-10 rounded-xl"
        aria-label={`Read ${post.title}`}
      />

      <p
        className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider"
        style={{ color: MUTED }}
      >
        {post.date}
        <span className="mx-2 opacity-50">•</span>
        {post.readTime}
      </p>

      <h3 className="mt-3 font-titleFont text-lg sm:text-xl font-bold text-white leading-snug tracking-tight line-clamp-2">
        {post.title}
      </h3>

      <p
        className="mt-2 text-sm leading-relaxed flex-1 line-clamp-3"
        style={{ color: MUTED }}
      >
        {post.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 relative z-0">
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

      <span
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wide"
        style={{ color: BLUE }}
      >
        Read the log
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </span>
    </motion.article>
  );
}

export default BlogCard;
