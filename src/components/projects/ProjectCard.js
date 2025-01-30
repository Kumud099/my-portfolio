import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function ProjectCard(props) {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 duration-300 cursor-pointer"
          src={props.src}
          alt="project_image"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-base md:text-lg xl:text-xl uppercase text-designColor font-normal lg:flex-grow">
            {props.title}
          </h3>
          <div className="flex gap-2 items-center">
            {/* GitHub Link */}
            {props.github && (
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-200 hover:cursor-pointer"
              >
                <FaGithubAlt />
              </a>
            )}
            {/* Live Project Link */}
            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-200 hover:cursor-pointer"
              >
                <CiGlobe />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm md:text-base tracking-wide mt-3 hover:text-gray-100 duration-300">
          {props.des}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
