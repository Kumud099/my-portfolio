import React, { useEffect, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFilePdf, FaGithubAlt } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineArrowLeft } from "react-icons/hi";
import { blogPosts, getPostBySlug } from "../../data/blogPosts";
import { logok } from "../../assets/index";
import BlogCard from "./BlogCard";

const MORE_POSTS_COUNT = 3;

const BG = "#05070a";
const CARD = "#0c1220";
const BLUE = "#3B82F6";
const BLUE_SOFT = "#93c5fd";
const MUTED = "#94a3b8";

/** Renders light markdown: **bold** and *italic* */
function RichText({ text, className = "", style }) {
  const parts = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(
        <strong key={key++} className="font-semibold text-white/90">
          {token.slice(2, -2)}
        </strong>
      );
    } else {
      parts.push(
        <em key={key++} className="italic text-white/85">
          {token.slice(1, -1)}
        </em>
      );
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <span className={className} style={style}>
      {parts}
    </span>
  );
}

function ResourceIcon({ kind }) {
  if (kind === "certificate") return <FaFilePdf aria-hidden="true" />;
  if (kind === "code") return <FaGithubAlt aria-hidden="true" />;
  return <HiOutlineExternalLink aria-hidden="true" />;
}

function ContentBlock({ block }) {
  if (block.type === "p") {
    return (
      <p className="text-sm sm:text-base leading-relaxed" style={{ color: MUTED }}>
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="font-titleFont text-base sm:text-lg font-semibold text-white tracking-tight pt-1">
        {block.text}
      </h3>
    );
  }

  if (block.type === "ul" || block.type === "ol") {
    const ListTag = block.type === "ol" ? "ol" : "ul";
    return (
      <ListTag
        className={`space-y-2.5 text-sm sm:text-base leading-relaxed pl-5 ${
          block.type === "ol" ? "list-decimal" : "list-disc"
        }`}
        style={{ color: MUTED }}
      >
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            <RichText text={item} />
          </li>
        ))}
      </ListTag>
    );
  }

  if (block.type === "code") {
    return (
      <pre
        className="overflow-x-auto rounded-xl border border-white/[0.07] p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed"
        style={{ backgroundColor: CARD, color: BLUE_SOFT }}
      >
        <code>{block.text}</code>
      </pre>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
        <table className="w-full min-w-[280px] text-left text-sm">
          <thead style={{ backgroundColor: CARD }}>
            <tr>
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-medium border-b border-white/[0.08]"
                  style={{ color: BLUE }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr
                key={row.join("-")}
                className="border-b border-white/[0.05] last:border-0"
              >
                {row.map((cell, i) => (
                  <td
                    key={`${cell}-${i}`}
                    className={`px-4 py-2.5 ${
                      i === 0 ? "font-mono font-medium text-white/90" : ""
                    }`}
                    style={{ color: i === 0 ? undefined : MUTED }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "resources") {
    return (
      <div
        className="rounded-xl border border-white/[0.07] p-4 sm:p-5"
        style={{ backgroundColor: CARD }}
      >
        {block.label && (
          <p
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] mb-3"
            style={{ color: BLUE }}
          >
            {block.label}
          </p>
        )}
        <ul className="flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: BLUE_SOFT }}
              >
                <ResourceIcon kind={item.kind} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

/**
 * Reusable blog detail layout. Pass a `post` object, or omit it to resolve
 * from the `:slug` route param.
 */
function BlogDetail({ post: postProp }) {
  const { slug } = useParams();
  const post = postProp || getPostBySlug(slug);

  const morePosts = useMemo(() => {
    if (!post) return [];
    return blogPosts.filter((p) => p.slug !== post.slug).slice(0, MORE_POSTS_COUNT);
  }, [post]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post?.slug]);

  if (!post) {
    return <Navigate to="/#blog" replace />;
  }

  return (
    <div
      className="relative min-h-screen w-full"
      style={{ backgroundColor: BG, color: "#fff" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
        .blog-detail .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        @keyframes blog-dot-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.55); }
          50% { opacity: 0.75; box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
        }
        .blog-live-dot {
          animation: blog-dot-pulse 2s ease-out infinite;
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

      <header className="relative z-20 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              className="h-9 w-9 rounded-full border border-white/10"
              src={logok}
              alt="Kumud Shrestha"
            />
            <span className="hidden sm:inline font-titleFont text-base font-bold tracking-tight text-white group-hover:opacity-80 transition-opacity">
              KS.Portfolio
            </span>
          </Link>
          <Link
            to="/#blog"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] transition-opacity hover:opacity-80"
            style={{ color: BLUE }}
          >
            <HiOutlineArrowLeft className="text-sm" aria-hidden="true" />
            Back to blogs
          </Link>
        </div>
      </header>

      <motion.article
        className="blog-detail relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] flex items-center gap-2"
          style={{ color: BLUE }}
        >
          <span
            className="blog-live-dot inline-block h-1.5 w-1.5 rounded-full shrink-0"
            style={{ backgroundColor: BLUE }}
            aria-hidden="true"
          />
          Engineering log
        </p>

        <p
          className="mt-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider"
          style={{ color: MUTED }}
        >
          {post.date}
          <span className="mx-2 opacity-50">•</span>
          {post.readTime}
          {post.category && (
            <>
              <span className="mx-2 opacity-50">•</span>
              {post.category}
            </>
          )}
        </p>

        <h1
          className="mt-3 font-titleFont text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15]"
          style={{
            backgroundImage: `linear-gradient(90deg, #ffffff 0%, ${BLUE_SOFT} 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {post.title}
        </h1>

        <p
          className="mt-5 text-base sm:text-lg leading-relaxed"
          style={{ color: MUTED }}
        >
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
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

        <div className="mt-10 sm:mt-12 space-y-10">
          {post.content?.map((section) => (
            <section key={section.heading}>
              <h2 className="font-titleFont text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.blocks?.map((block, index) => (
                  <ContentBlock
                    key={`${section.heading}-${block.type}-${index}`}
                    block={block}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.08]">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-80"
            style={{ color: BLUE }}
          >
            <HiOutlineArrowLeft aria-hidden="true" />
            Back to all logs
          </Link>
        </div>
      </motion.article>

      {morePosts.length > 0 && (
        <section
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20"
          aria-labelledby="more-blogs-heading"
        >
          <div className="border-t border-white/[0.08] pt-12 sm:pt-14">
            <div className="mb-6 sm:mb-8">
              <p
                className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em]"
                style={{ color: BLUE }}
              >
                Keep reading
              </p>
              <h2
                id="more-blogs-heading"
                className="mt-2 font-titleFont text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                More blogs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {morePosts.map((related, index) => (
                <BlogCard key={related.id} post={related} index={index} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] px-5 py-3 rounded-md border transition-opacity hover:opacity-80"
                style={{
                  color: BLUE,
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                }}
              >
                View more blogs →
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogDetail;
