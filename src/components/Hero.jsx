import { motion } from "framer-motion";
import { styles } from "../styles";
import { ReactTyped } from "react-typed";
import TrueFocus from "./TrueFocus"; 

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Left accent + Intro text */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6`}
      >
        {/* Accent line */}
        <div className="flex flex-col justify-center items-center mt-5 relative">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient animate-pulse" />
        </div>

        {/* Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              {/* ✅ Animated name using TrueFocus */}
              <span className="inline-block ml-2">
                <TrueFocus
                  sentence="Satwik Saxena"
                  blurAmount={6}
                  borderColor="#915EFF"
                  glowColor="rgba(145, 94, 255, 1)"
                  animationDuration={0.6}
                  pauseBetweenAnimations={1}
                />
              </span>
            </h1>
          </motion.div>

          {/* Typing effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className={`${styles.heroSubText} mt-3 text-white-100 leading-relaxed max-w-lg`}
          >
            <ReactTyped
              strings={[
                'I craft <span class="text-cyan-300">3D visuals</span>',
                'I build <span class="text-purple-300">interactive interfaces</span>',
                'I develop <span class="text-green-300">web applications</span>',
                'I design <span class="text-pink-300">CLI tools</span>',
                'A <span class="text-cyan-300">DSA</span> Learner',
              ]}
              typeSpeed={100}
              backSpeed={70}
              backDelay={1000}
              loop
              smartBackspace
              showCursor={true}
              cursorChar="|"
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default Hero;