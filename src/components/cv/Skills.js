import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col sm:flex-row gap-10 sm:gap-20"
    >
      {/* FrontEnd Skills */}
      <div className="w-full sm:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">FrontEnd Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-7">
          {["HTML-5", "CSS", "TailwindCss", "Bootstrap", "React"].map(
            (skill, index) => (
              <div key={index} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{skill}</p>
                <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{
                      x: "0",
                      opacity: 1,
                      transition: { duration: 0.5, delay: 0.5 },
                    }}
                    className="h-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
                    style={{ width: `${[90, 90, 70, 60, 70][index]}%` }}
                  >
                    <span className="absolute -top-7 right-0">
                      {[90, 90, 70, 60, 70][index]}%
                    </span>
                  </motion.span>
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* BackEnd Skills */}
      <div className="w-full sm:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">BackEnd Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-7">
          {["JavaScript", "Python"].map((skill, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill}</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: "0",
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
                  style={{ width: `${[50, 40][index]}%` }}
                >
                  <span className="absolute -top-7 right-0">
                    {[50, 40][index]}%
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
