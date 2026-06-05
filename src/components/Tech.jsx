import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const controls = useAnimation();

  // Auto-scroll animation starts on mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <>
      {/* Section Title */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      {/* Auto-scrolling icons */}
      <div className="relative mt-12 w-full overflow-hidden">
        <motion.div
          className="flex gap-16 items-center w-max px-5"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {/* Duplicate icons for infinite loop */}
          {[...technologies, ...technologies].map((technology, index) => (
            <div
              key={`${technology.name}-${index}`}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                draggable="false"
              />
              <p className="mt-2 text-sm sm:text-base text-gray-200 font-medium text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Fade edges for clean seamless effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
