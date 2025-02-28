import React from "react";
import Title from "../layout/Title";
import ProjectCard from "./ProjectCard";
import { electricity, pig_game, weatherapp } from "../../assets/index";

function Project() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center pb-20 mt-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Projects" titleUp="Visit my portfolio" />
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
        <ProjectCard
          title="ELECTRICITY CONSUMPTION ANALYSIS AND PREDICTION"
          des="The Electricity Consumption Analysis and Prediction System forecasts demand using KNN, linear regression, and XGBoost on Baneshwor data. The XGBoost model achieved an R2-score of 0.95. The frontend is built with Streamlit, and the backend uses Python libraries like NumPy and scikit-learn."
          src={electricity}
          github="https://github.com/kumud099/electricity-consumption-analysis"
          link="https://kumud099-electricity-consumption-analysis-a-frontendmain-y6t5k8.streamlit.app/"
        />
        <ProjectCard
          title="PIG GAME"
          des="The Pig Game is a dice game where players accumulate points. The frontend uses HTML, CSS, and JavaScript, while the backend logic is implemented in JavaScript."
          src={pig_game}
          github="https://github.com/kumud099/pig-game"
          link="https://kumud099.github.io/pig-game/"
        />
        <ProjectCard
          title="WEATHERAPP"
          des="A sleek and responsive weather app built with TypeScript and Next.js. It provides real-time weather updates, forecasts, and essential climate details with a user-friendly interface."
          src={weatherapp}
          github="https://github.com/Kumud099/weather-app"
          link="https://weather-app1-murex.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Project;
