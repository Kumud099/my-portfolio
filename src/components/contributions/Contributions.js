import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import HeroLogicGrid, { DEFAULT_ORBS } from "../banner/HeroLogicGrid";

const BG = "#080C18";
const GITHUB_USER = "Kumud099";
const START_YEAR = 2025;

/** Same orbs as hero, with the right sphere pushed farther right and down. */
const CONTRIBUTIONS_ORBS = DEFAULT_ORBS.map((orb, i) =>
  i === 1 ? { ...orb, x: 5.4, y: -2.55 } : orb
);

// GitHub contribution greens (dark theme) — empty cell matches section, not black box
const LEVEL_COLORS = [
  "rgba(255,255,255,0.06)",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function availableYears() {
  const end = Math.max(START_YEAR, new Date().getFullYear());
  const years = [];
  for (let y = end; y >= START_YEAR; y -= 1) years.push(y);
  return years;
}

function buildWeeks(contributions) {
  if (!contributions?.length) return [];

  const weeks = [];
  let week = [];

  const first = new Date(contributions[0].date + "T00:00:00");
  const firstDow = first.getDay();
  for (let i = 0; i < firstDow; i += 1) week.push(null);

  contributions.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return weeks;
}

function monthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const day = week.find((d) => d);
    if (!day) return;
    const month = new Date(day.date + "T00:00:00").getMonth();
    if (month !== lastMonth) {
      labels.push({ weekIndex, label: MONTHS[month] });
      lastMonth = month;
    }
  });

  return labels;
}

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function toIsoLocal(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Fixed calendar grid for a year (used as loading skeleton). */
function buildYearPlaceholder(year) {
  const contributions = [];
  const cursor = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  while (cursor <= end) {
    contributions.push({
      date: toIsoLocal(cursor),
      count: 0,
      level: 0,
    });
    cursor.setDate(cursor.getDate() + 1);
  }
  return contributions;
}

function ContributionGraph({
  weeks,
  labels,
  cell,
  gap,
  loading,
  onCellEnter,
  onCellLeave,
}) {
  const weekCount = Math.max(weeks.length, 1);

  /** Most cells get a green level; a few stay empty so it still looks like a graph. */
  function skeletonLevel(wi, di) {
    const n = (wi * 11 + di * 5 + wi * di) % 11;
    if (n < 2) return 0;
    return 1 + (n % 4);
  }

  return (
    <div className="overflow-x-auto" aria-busy={loading || undefined}>
      <div style={{ minWidth: weeks.length * (cell + gap) + 40 }}>
        <div
          className="relative mb-2 h-4 text-[10px] sm:text-xs text-white/40"
          style={{ marginLeft: 34 }}
        >
          {labels.map(({ weekIndex, label }) => (
            <span
              key={`${label}-${weekIndex}`}
              className="absolute"
              style={{ left: weekIndex * (cell + gap) }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex" style={{ gap }}>
          <div
            className="flex flex-col justify-between text-[9px] text-white/35 pr-2"
            style={{ height: 7 * cell + 6 * gap }}
          >
            <span />
            <span>Mon</span>
            <span />
            <span>Wed</span>
            <span />
            <span>Fri</span>
            <span />
          </div>

          <div className="relative flex" style={{ gap }}>
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap }}>
                {week.map((day, di) => {
                  if (!day) {
                    return (
                      <div
                        key={`empty-${wi}-${di}`}
                        style={{ width: cell, height: cell }}
                      />
                    );
                  }

                  if (loading) {
                    const level = skeletonLevel(wi, di);
                    const isGreen = level > 0;
                    return (
                      <div
                        key={day.date}
                        className={
                          isGreen
                            ? "contrib-skel-cell rounded-[3px]"
                            : "rounded-[3px]"
                        }
                        style={{
                          width: cell,
                          height: cell,
                          backgroundColor:
                            LEVEL_COLORS[level] ?? LEVEL_COLORS[0],
                          ...(isGreen
                            ? {
                                animationDelay: `${(wi / weekCount) * 1.05}s`,
                              }
                            : {}),
                        }}
                      />
                    );
                  }

                  return (
                    <button
                      type="button"
                      key={day.date}
                      aria-label={`${formatDate(day.date)}: ${day.count} contributions`}
                      className="rounded-[3px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3fb950] transition-colors duration-300"
                      style={{
                        width: cell,
                        height: cell,
                        backgroundColor:
                          LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0],
                      }}
                      onMouseEnter={(e) => onCellEnter?.(day, e)}
                      onMouseLeave={onCellLeave}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] sm:text-xs text-white/40">
          <span>Less</span>
          {LEVEL_COLORS.map((color) => (
            <span
              key={color}
              className="rounded-[2px]"
              style={{
                width: 13,
                height: 13,
                backgroundColor: color,
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      <style>{`
        @keyframes contrib-skel-blink {
          0%, 100% { filter: brightness(0.55); opacity: 0.65; }
          50% { filter: brightness(1.35); opacity: 1; }
        }
        .contrib-skel-cell {
          animation: contrib-skel-blink 1.05s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

const LEVEL_FROM_GRAPHQL = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

/**
 * Full calendar (incl. private) via GitHub GraphQL when REACT_APP_GITHUB_TOKEN is set.
 * Token must belong to the profile owner and needs `read:user`.
 */
async function fetchViaGitHubGraphQL(year, token) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query ($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `,
      variables: { login: GITHUB_USER, from, to },
    }),
  });

  if (!res.ok) throw new Error(`GitHub GraphQL HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(json.errors[0].message || "GitHub GraphQL error");
  }

  const calendar =
    json.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) throw new Error("No contribution calendar returned");

  const contributions = calendar.weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: LEVEL_FROM_GRAPHQL[day.contributionLevel] ?? 0,
    }))
  );

  return {
    contributions,
    total: calendar.totalContributions,
    source: "graphql",
  };
}

/** Public-only fallback (excludes private contributions). */
async function fetchViaPublicApi(year) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=${year}`
  );
  if (!res.ok) throw new Error("Failed to load public contributions");
  const data = await res.json();
  return {
    contributions: data.contributions || [],
    total: data.total?.[String(year)] ?? 0,
    source: "public",
  };
}

async function fetchContributions(year) {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  if (token) {
    try {
      return await fetchViaGitHubGraphQL(year, token);
    } catch (err) {
      console.warn("GitHub GraphQL failed, falling back to public API:", err);
    }
  }
  return fetchViaPublicApi(year);
}

function Contributions() {
  const sectionRef = useRef(null);
  const years = useMemo(() => availableYears(), []);
  const defaultYear = years.includes(new Date().getFullYear())
    ? new Date().getFullYear()
    : years[0];

  const [year, setYear] = useState(defaultYear);
  const [contributions, setContributions] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("loading");
  const [source, setSource] = useState("public");
  const [tooltip, setTooltip] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [56, 0, 0, -56]
  );

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus("loading");
      setTooltip(null);
      try {
        const data = await fetchContributions(year);
        if (cancelled) return;
        setContributions(data.contributions);
        setTotal(data.total);
        setSource(data.source);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [year]);

  const placeholderWeeks = useMemo(
    () => buildWeeks(buildYearPlaceholder(year)),
    [year]
  );
  const liveWeeks = useMemo(
    () => buildWeeks(contributions),
    [contributions]
  );
  const loading = status === "loading";
  const weeks = loading || status === "error" ? placeholderWeeks : liveWeeks;
  const labels = useMemo(() => monthLabels(weeks), [weeks]);
  const cell = 17;
  const gap = 5;
  const hasToken = Boolean(process.env.REACT_APP_GITHUB_TOKEN);

  return (
    <section
      id="contributions"
      ref={sectionRef}
      className="relative w-full min-h-screen h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: BG, color: "#fff" }}
      aria-labelledby="contributions-heading"
    >
      <HeroLogicGrid orbs={CONTRIBUTIONS_ORBS} />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <h2
            id="contributions-heading"
            className="font-titleFont text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            GitHub{" "}
            <span style={{ color: "#3fb950" }}>Contributions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/55 max-w-xl mx-auto sm:mx-0">
            Contribution activity from{" "}
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
              style={{ color: "#3fb950" }}
            >
              @{GITHUB_USER}
            </a>
            .
            {!hasToken && status === "ready" && source === "public" && (
              <span className="block mt-2 text-xs text-white/40">
                Showing public contributions only. Add{" "}
                <code className="text-white/60">REACT_APP_GITHUB_TOKEN</code> in{" "}
                <code className="text-white/60">.env</code> (read:user) to include
                private activity.
              </span>
            )}
          </p>
        </div>

        <div
          className="overflow-hidden"
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Graph panel */}
            <div className="flex-1 min-w-0 p-6 sm:p-10">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base sm:text-lg font-normal text-white/90">
                  {status === "ready" ? (
                    <>
                      <span className="font-semibold text-white">
                        {total.toLocaleString()}
                      </span>{" "}
                      contributions in {year}
                    </>
                  ) : status === "loading" ? (
                    <span className="text-white/50">Loading {year}…</span>
                  ) : (
                    <span className="text-white/50">Unavailable</span>
                  )}
                </h3>
                <a
                  href={`https://github.com/${GITHUB_USER}?tab=overview&from=${year}-01-01&to=${year}-12-31`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/45 hover:text-[#3fb950] transition-colors"
                >
                  @{GITHUB_USER}
                </a>
              </div>

              {status === "error" ? (
                <p className="text-sm text-white/50 py-14 text-center">
                  Couldn’t load contributions.{" "}
                  <a
                    href={`https://github.com/${GITHUB_USER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                    style={{ color: "#3fb950" }}
                  >
                    Open GitHub
                  </a>
                </p>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${year}-${loading ? "skel" : "live"}`}
                    initial={{ opacity: 0.55 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.55 }}
                    transition={{ duration: 0.28 }}
                  >
                    <ContributionGraph
                      weeks={weeks}
                      labels={labels}
                      cell={cell}
                      gap={gap}
                      loading={loading}
                      onCellEnter={(day, e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({
                          day,
                          x: rect.left + rect.width / 2,
                          y: rect.top,
                        });
                      }}
                      onCellLeave={() => setTooltip(null)}
                    />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* GitHub-style year list */}
            <nav
              aria-label="Contribution year"
              className="md:w-[128px] shrink-0 border-t md:border-t-0 md:border-l p-3 sm:p-4 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              {years.map((y) => {
                const active = y === year;
                return (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    className="px-3 py-2.5 text-left text-sm rounded-md whitespace-nowrap transition-colors"
                    style={
                      active
                        ? {
                            backgroundColor: "#238636",
                            color: "#ffffff",
                            fontWeight: 600,
                          }
                        : {
                            backgroundColor: "transparent",
                            color: "rgba(255,255,255,0.55)",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.backgroundColor =
                          "rgba(255,255,255,0.06)";
                        e.currentTarget.style.color = "#e6edf3";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                      }
                    }}
                  >
                    {y}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full px-3 py-2 rounded-md border border-white/15 text-xs shadow-xl"
            style={{
              left: tooltip.x,
              top: tooltip.y - 8,
              backgroundColor: "#0f1a2e",
              color: "#e6edf3",
            }}
          >
            <span className="font-semibold">
              {tooltip.day.count} contribution
              {tooltip.day.count === 1 ? "" : "s"}
            </span>
            <span className="text-white/45"> on {formatDate(tooltip.day.date)}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contributions;
