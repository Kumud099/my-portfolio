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
      className="w-full h-screen flex items-center justify-center border-b-[1px] border-b-black pb-20"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-1/3">
          <img
            className="border-4 border-borderColor rounded-lg my-4"
            src={aboutImg}
            alt="About"
          />
        </div>
        <div className="w-2/3 mt-4 md:mt-0 md:pl-20">
          <Title title="About Me" mark={mark} />
          <p className="font-bodyFont text-xl text-lightText text-justify">
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
