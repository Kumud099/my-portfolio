import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  electricity,
  pig_game,
  weatherapp,
  researchPaperCertificate,
} from "../../assets/index";

const ACCENT = "#3B82F6";
const BG = "#080C18";
const LINE = "rgb(54, 54, 54)";

const projects = [
  {
    title: "Electricity Consumption Analysis",
    category: "ML / Data",
    tools: "Python, NumPy, scikit-learn, XGBoost, Streamlit",
    src: electricity,
    github: "https://github.com/kumud099/electricity-consumption-analysis",
    link: "https://electricity-consumption-analysis-and-forecast.streamlit.app/",
    paperNote:
      "Research paper published in KEC Journal of Science and Engineering (May 2025)",
    doi: "https://www.nepjol.info/index.php/kjse/article/view/78360",
    certificate: researchPaperCertificate,
  },
  {
    title: "Pig Game",
    category: "Web Game",
    tools: "HTML, CSS, JavaScript",
    src: pig_game,
    github: "https://github.com/kumud099/pig-game",
    link: "https://kumud099.github.io/pig-game/",
  },
  {
    title: "WeatherApp",
    category: "Full Stack",
    tools: "TypeScript, Next.js",
    src: weatherapp,
    github: "https://github.com/Kumud099/weather-app",
    link: "https://weather-app1-murex.vercel.app/",
  },
];

/**
 * Same horizontal-travel formula as redoyanulhaque.me:
 * boxWidth * boxCount - (containerLeft + flexVisibleWidth) + padding/2
 */
function getWorkScrollDistance(containerEl, flexEl) {
  const boxes = flexEl.getElementsByClassName("work-box");
  if (!boxes.length) return 0;

  const containerLeft = containerEl.getBoundingClientRect().left;
  const boxWidth = boxes[0].getBoundingClientRect().width;
  const flexVisibleWidth = flexEl.getBoundingClientRect().width;
  const pad = parseInt(window.getComputedStyle(boxes[0]).padding, 10) / 2 || 0;

  return Math.max(
    0,
    boxWidth * boxes.length - (containerLeft + flexVisibleWidth) + pad
  );
}

function Project() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const distanceRef = useRef(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDistance = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile || !trackRef.current || !containerRef.current) {
        distanceRef.current = 0;
        setScrollDistance(0);
        if (trackRef.current) trackRef.current.style.transform = "";
        return;
      }
      const distance = getWorkScrollDistance(
        containerRef.current,
        trackRef.current
      );
      distanceRef.current = distance;
      setScrollDistance(distance);
    };

    updateDistance();
    const raf = requestAnimationFrame(updateDistance);
    const ro = new ResizeObserver(updateDistance);
    if (trackRef.current) ro.observe(trackRef.current);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateDistance);
    const imgs = trackRef.current?.querySelectorAll("img") || [];
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", updateDistance, { once: true });
      }
    });
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", updateDistance);
    };
  }, []);

  // Pin the section (sticky + tall height). Convert vertical scroll into
  // horizontal movement. Page only continues downward after progress === 1.
  useEffect(() => {
    if (isMobile) return undefined;

    const onScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        track.style.transform = "translate3d(0,0,0)";
        return;
      }

      // 0 while approaching, 0→1 while pinned, 1 after section ends
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const x = -progress * distanceRef.current;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile, scrollDistance]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="work-section"
      style={{
        backgroundColor: BG,
        // Stay pinned for exactly the horizontal travel, then release downward
        height: isMobile ? "auto" : `calc(100vh + ${scrollDistance}px)`,
      }}
      aria-labelledby="work-heading"
    >
      <style>{`
        .work-section {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          color: #fff;
        }
        .work-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }
        .work-container {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
        }
        .work-section h2 {
          margin: 100px 0 30px;
          padding: 0 1.5rem;
          font-size: 70px;
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
          flex-shrink: 0;
        }
        .work-section h2 > span {
          color: ${ACCENT};
        }
        .work-flex {
          display: flex;
          flex: 1;
          min-height: 0;
          width: 100%;
          margin-left: 0;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          position: relative;
          will-change: transform;
          box-sizing: border-box;
        }
        .work-flex::before,
        .work-flex::after {
          content: "";
          width: 50000vw;
          height: 1px;
          background-color: ${LINE};
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 1;
        }
        .work-flex::after {
          top: 100%;
        }
        .work-box {
          padding: 80px;
          display: flex;
          flex-direction: column;
          width: 600px;
          box-sizing: border-box;
          border-right: 1px solid ${LINE};
          flex-shrink: 0;
          gap: 50px;
          justify-content: space-between;
          height: 100%;
        }
        .work-flex .work-box:nth-child(even) {
          flex-direction: column-reverse;
        }
        .work-title {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 20px;
          gap: 1rem;
        }
        .work-title > div {
          text-align: right;
        }
        .work-title h3 {
          font-size: 50px;
          line-height: 50px;
          margin: 0;
          font-weight: 600;
        }
        .work-info h4 {
          font-size: 26px;
          font-weight: 500;
          margin: 0;
        }
        .work-info p {
          font-weight: 200;
          color: rgb(173, 172, 172);
          margin: 3px 0 0;
        }
        .work-info > p {
          width: 90%;
        }
        .work-actions {
          display: flex;
          gap: 0.65rem;
          margin-top: 1.25rem;
        }
        .work-actions a {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.75);
          font-size: 1.1rem;
          transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .work-actions a:hover {
          color: ${ACCENT};
          border-color: ${ACCENT};
          background: rgba(59, 130, 246, 0.12);
        }
        .work-paper {
          margin-top: 1rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .work-paper p {
          width: 100%;
          font-size: 0.85rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }
        .work-paper-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 0.75rem;
        }
        .work-paper-links a {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: ${ACCENT};
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .work-paper-links a:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .work-image {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          flex: 1;
          min-height: 0;
        }
        .work-image-in {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          max-height: 100%;
        }
        .work-image img {
          max-width: 100%;
          max-height: min(350px, 100%);
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .work-box-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: none;
        }
        .see-all-works {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
        .see-all-works h3 {
          font-size: 32px;
          font-weight: 500;
          color: #fff;
          margin: 0;
        }
        .see-all-works p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          max-width: 250px;
          margin: 0;
        }
        .see-all-btn {
          display: inline-block;
          padding: 15px 35px;
          font-size: 16px;
          font-weight: 500;
          color: #0b080c;
          background: ${ACCENT};
          border-radius: 30px;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-top: 10px;
        }
        .see-all-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
        @media (max-height: 900px) {
          .work-image img { max-height: 250px; }
          .work-box { padding: 40px; gap: 30px; }
          .work-section h2 { margin-top: 70px; margin-bottom: 30px; font-size: 60px; }
        }
        @media (max-width: 1400px) {
          .work-title h3 { font-size: 35px; line-height: 35px; }
          .work-info p { font-size: 13px; }
          .work-info h4 { font-size: 15px; }
          .work-box { width: 450px; padding: 50px; }
          .work-flex { padding-left: 1.5rem; padding-right: 1.5rem; }
          .work-section h2 { font-size: 50px; }
        }
        @media (max-width: 1025px) {
          .work-box { width: 350px; padding: 30px; }
          .work-flex { padding-left: 1rem; padding-right: 1rem; }
        }
        @media (max-height: 650px) {
          .work-image img { max-height: 200px; }
          .work-section h2 { font-size: 40px; margin-bottom: 20px; }
          .work-box { gap: 20px; }
        }
        @media (max-width: 768px) {
          .work-section { height: auto !important; }
          .work-sticky {
            position: relative;
            height: auto;
            overflow: visible;
          }
          .work-container { height: auto; }
          .work-flex {
            flex-direction: column;
            width: 100%;
            height: auto;
            margin-left: 0;
            padding-left: 0;
            padding-right: 0;
            transform: none !important;
          }
          .work-flex::before,
          .work-flex::after { display: none; }
          .work-box {
            width: 100%;
            max-width: 100%;
            height: auto;
            padding: 30px 15px;
            border-right: none;
            border-bottom: 1px solid ${LINE};
            gap: 20px;
          }
          .work-flex .work-box:nth-child(even) {
            flex-direction: column;
          }
          .work-section h2 {
            font-size: 36px;
            margin-top: 50px;
            margin-bottom: 20px;
          }
          .work-title h3 { font-size: 30px; line-height: 30px; }
          .work-info h4 { font-size: 18px; }
          .work-image img { max-height: 200px; }
          .work-box-cta {
            padding: 40px 20px;
            border-bottom: none;
          }
          .see-all-works h3 { font-size: 24px; }
          .see-all-works p { font-size: 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .work-section { height: auto !important; }
          .work-sticky { position: relative; height: auto; }
          .work-flex { transform: none !important; flex-wrap: wrap; width: 100%; margin-left: 0; }
        }
      `}</style>

      <div className="work-sticky">
        <div className="work-container" ref={containerRef}>
          <h2 id="work-heading" className="font-titleFont">
            My <span>Work</span>
          </h2>

          <div ref={trackRef} className="work-flex">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}

            <div className="work-box work-box-cta">
              <div className="see-all-works">
                <h3>Want to see more?</h3>
                <p>Explore more of my projects and creations</p>
                <a
                  className="see-all-btn"
                  href="https://github.com/kumud099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See All Works →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
