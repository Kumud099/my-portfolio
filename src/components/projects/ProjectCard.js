import React from "react";
import { FaGithubAlt, FaFilePdf } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({
  index,
  title,
  category,
  tools,
  src,
  github,
  link,
  paperNote,
  doi,
  certificate,
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="work-box">
      <div className="work-info">
        <div className="work-title">
          <h3>{number}</h3>
          <div>
            <h4>{title}</h4>
            <p>{category}</p>
          </div>
        </div>
        <h4>Tools and features</h4>
        <p>{tools}</p>
        {(github || link) && (
          <div className="work-actions">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
              >
                <FaGithubAlt />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title}`}
              >
                <CiGlobe />
              </a>
            )}
          </div>
        )}
        {(paperNote || doi || certificate) && (
          <div className="work-paper">
            {paperNote && <p>{paperNote}</p>}
            {(doi || certificate) && (
              <div className="work-paper-links">
                {doi && (
                  <a
                    href={doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} research paper`}
                  >
                    <HiOutlineExternalLink aria-hidden="true" />
                    View paper
                  </a>
                )}
                {certificate && (
                  <a
                    href={certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} research certificate`}
                  >
                    <FaFilePdf aria-hidden="true" />
                    Certificate
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="work-image">
        <a
          className="work-image-in"
          href={link || github || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={src} alt={title} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
