import React from "react";
import profileImg from "../../assets/images/profileImg.png";

function RightBanner() {
  return (
    <div className="w-[500px] h-[600px] sm:w-[400px] sm:h-[400px] mt-20 relative flex items-center justify-center">
      
      {/* Hexagon Image Wrapper */}
      <div className="w-full h-full clip-hexagon hexagon-img">
        <img src={profileImg} alt="Profile" />
      </div>
    </div>
  );
}


export default RightBanner;
