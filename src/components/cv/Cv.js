import React from "react";
import Title from "../layout/Title";
import { useState } from "react";
import Skills from "./Skills";

import Education from "./Education";

function Cv() {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setskillsData] = useState(false);
  return (
    <section
      id="cv"
      className="w-full h-screen  flex-col   pb-20   border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center pt-20">
        <Title title="My CV" titleUp="Curriculum Vitae" />
      </div>
      <div className="w-full flex gap-20">
        <ul className="w-full grid grid-cols-2">
          <li
            onClick={() => setEducationData(true) & setskillsData(false)}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } cvLi`}
          >
            Education
          </li>
          <li
            onClick={() => setEducationData(false) & setskillsData(true)}
            className={`${
              skillsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } cvLi`}
          >
            Skills
          </li>
        </ul>
      </div>
      <div>
        {educationData && <Education />}

        {skillsData && <Skills />}
      </div>
    </section>
  );
}

export default Cv;
