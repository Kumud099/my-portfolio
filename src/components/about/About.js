import React from "react";
import Title from "../layout/Title";
import { aboutImg } from "../../assets/index";
import { useTypewriter } from "react-simple-typewriter";

function About() {
  const [mark] = useTypewriter({
    words: ["!", " "],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });

  return (
    <section
      id="about"
      className="w-full h-auto sm:h-screen flex items-center justify-center border-b-[1px] border-b-black pb-10 sm:pb-20"
    >
      <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto">
        {/* Title Section */}
        <Title title="About Me" mark={mark} />

        {/* Image Section */}
        <div className="flex flex-col w-full sm:w-1/3 mt-6">
          <img
            className="border-4 border-borderColor rounded-lg w-full sm:w-auto"
            src={aboutImg}
            alt="About"
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-2/3 mt-4 sm:mt-6 px-4 sm:px-0">
          <p className="font-bodyFont text-sm sm:text-base md:text-lg lg:text-xl text-lightText text-justify sm:text-center">
            As a computer engineering student, I completed my higher education
            from Uniglobe School and earned my bachelor's degree from Kathmandu
            Engineering College. Programming is my passion. Each line of code
            presents a puzzle waiting to be solved, a challenge begging for a
            creative solution. Whether crafting elegant algorithms or building
            robust applications, the thrill of seeing my code come to life is
            what keeps me hooked. Programming isn't just about instructions;
            it's about crafting digital experiences that make a real difference
            in people's lives, and that's why I love it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
