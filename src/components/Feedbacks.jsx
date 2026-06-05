import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// Minimal Feedback Card
const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 1)}
    whileHover={{ scale: 1.05 }}
    className="bg-black-200 border border-white/10 p-6 sm:p-8 rounded-2xl w-full sm:w-[340px] transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
  >
    <p className="text-white text-5xl font-bold leading-none">“</p>
    <p className="mt-4 text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
      {testimonial}
    </p>

    <div className="mt-6 flex items-center gap-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-gray-600"
        loading="lazy"
      />
      <div>
        <p className="text-white font-semibold text-[15px] sm:text-[16px]">@{name}</p>
        <p className="text-gray-400 text-[13px] sm:text-[14px]">
          {designation} • {company}
        </p>
      </div>
    </div>
  </motion.div>
);

// Feedbacks Section
const Feedbacks = () => {
  return (
    <section className="relative mt-20 bg-black-100 rounded-[24px] overflow-hidden">
      {/* Section Header */}
      <div className={`relative ${styles.paddingX} ${styles.paddingY}`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-gray-400`}>
            What people say
          </p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            Testimonials
          </h2>
        </motion.div>
        <p className="mt-2 text-gray-400 text-[15px] max-w-2xl">
          Genuine feedback from clients and collaborators.
        </p>
      </div>

      {/* Testimonials */}
      <div
        className={`relative z-10 ${styles.paddingX} pb-14 flex flex-wrap justify-center gap-8`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
