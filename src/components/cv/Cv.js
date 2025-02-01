import React, { useState } from "react";
import Title from "../layout/Title";
import Skills from "./Skills";
import Education from "./Education";

function Cv() {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);

  // Function to handle the download of CV
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/cv.pdf"; // This ensures it works after deployment
    link.download = "My_CV.pdf"; // The name the file will have when downloaded
    link.click();
  };

  return (
    <section
      id="cv"
      className="w-full min-h-[100vh] flex-col pb-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center pt-20">
        <Title
          title="My CV"
          titleUp="Curriculum Vitae"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" // Adjusted title size
        />
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={downloadCv}
          className="px-6 py-3 bg-designColor text-white rounded-lg hover:bg-pink-600 transition duration-300 text-sm sm:text-base md:text-lg"
        >
          Download CV
        </button>
      </div>

      <div className="w-full flex justify-center mt-12">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li
            onClick={() => setEducationData(true) & setSkillsData(false)}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } cvLi py-2 px-4 text-center cursor-pointer text-sm sm:text-base md:text-lg`}
          >
            Education
          </li>
          <li
            onClick={() => setEducationData(false) & setSkillsData(true)}
            className={`${
              skillsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } cvLi py-2 px-4 text-center cursor-pointer text-sm sm:text-base md:text-lg`}
          >
            Skills
          </li>
        </ul>
      </div>

      <div className="mt-12">
        {educationData && <Education />}
        {skillsData && <Skills />}
      </div>
    </section>
  );
}

export default Cv;
