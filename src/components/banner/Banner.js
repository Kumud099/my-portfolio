import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";


const Banner = () => {
  return (
<section
  id="home"
  className="relative w-screen h-screen flex items-center justify-start overflow-hidden"
>
  {/* Content Container */}
  <div className="relative flex flex-col sm:flex-row w-full h-full max-w-screen-2xl mx-0 pl-10 sm:pl-20">
    <LeftBanner />
    <RightBanner />
  </div>
</section>


  );
};

export default Banner;
