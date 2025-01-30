import React from "react";
import CvCard from "./CvCard";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10"
    >
      <div className="py-5 font-titleFont gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2008-2024</p>
        <h2 className="text-4xl font-bold">Education Quality</h2>
      </div>

      <div className="mt-14 w-full h-auto sm:h-[500px] border-l-[6px] justify-center border-l-black border-opacity-30 flex flex-col gap-10">
        <CvCard
          title="Computer Engineering"
          subTitle="Kathmandu Engineering College (2020-2024)"
          result="3.45/4"
        />
        <CvCard
          title="Higher Secondary Education"
          subTitle="Uniglobe College (2017-2019)"
          result="3.40/4"
        />
        <CvCard
          title="Secondary School Education"
          subTitle="Paragon Public School (2008-2016)"
          result="3.55/4"
        />
      </div>
    </motion.div>
  );
}

export default Education;
