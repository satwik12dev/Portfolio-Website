import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        transform: "translateY(50px)", // pushes loader slightly lower
      }}
    >
      {/* Animated spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: 60,
          height: 60,
          border: "6px solid rgba(255, 255, 255, 0.2)",
          borderTop: "6px solid #4fd1c5",
          borderRadius: "50%",
          boxShadow: "0 0 20px rgba(79, 209, 197, 0.7)",
        }}
      />

      {/* Progress text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        style={{
          fontSize: 18,
          fontWeight: 800,
          marginTop: 10,
          background: "linear-gradient(90deg, #4fd1c5, #63b3ed, #9f7aea)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "1px",
        }}
      >
        {progress.toFixed(0)}%
      </motion.p>
    </Html>
  );
};

export default CanvasLoader;
