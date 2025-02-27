import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { profileImg } from "../../assets/index";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={profileImg}
          alt="Background"
          className="w-full h-full object-cover filter grayscale opacity-40 mxr-10"
        />
      </div>

      {/* Content Stays on Top */}
      <div className="relative flex flex-col sm:flex-row w-full h-full max-w-screen-2xl mx-auto px-6 sm:px-16">
        <LeftBanner />
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;
