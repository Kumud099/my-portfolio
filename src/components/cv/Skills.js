import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col sm:flex-row gap-10 sm:gap-20"
    >
      {/* FrontEnd Skills */}
      <div className="w-full sm:w-1/2">
        <div className="py-6 sm:py-12 font-titleFont">
          <p className="text-xs sm:text-sm text-designColor tracking-[2px] sm:tracking-[4px]">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">FrontEnd Skills</h2>
        </div>
        <div className="mt-10 sm:mt-14 w-full flex flex-col gap-5 sm:gap-7">
          {/* Skill bars */}
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">HTML-5</p>
            <span className="w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">CSS</p>
            <span className="w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">
              TailwindCss
            </p>
            <span className="w-[70%] h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">
              Bootstrap
            </p>
            <span className="w-[60%] h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                  60%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">React</p>
            <span className="w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">Nextjs</p>
            <span className="w-[80%] h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "0",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* BackEnd Skills */}
      <div className="w-full sm:w-1/2">
        <div className="py-6 sm:py-12 font-titleFont">
          <p className="text-xs sm:text-sm text-designColor tracking-[2px] sm:tracking-[4px]">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">BackEnd Skills</h2>
        </div>
        <div className="mt-10 sm:mt-14 w-full">
          <div className="flex flex-col gap-5 sm:gap-7">
            <div className="overflow-x-hidden">
              <p className="text-xs sm:text-sm uppercase font-medium">
                JavaScript
              </p>
              <span className="w-[50%] h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: "0",
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                  className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
                >
                  <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                    50%
                  </span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xs sm:text-sm uppercase font-medium">Python</p>
              <span className="w-[70%] h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: "0",
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                  className="h-full w-full bg-gradient-to-r from-blue-600 via-pink-400 to-pink-800 rounded-sm relative"
                >
                  <span className="absolute -top-7 right-0 text-xs sm:text-sm">
                    70%
                  </span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
