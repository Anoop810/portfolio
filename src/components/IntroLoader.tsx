import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TypewriterEffectSmooth from "./TypewriterEffect";
import "../assets/styles/IntroLoader.scss";

interface IntroLoaderProps {
  onComplete: () => void;
}

const introWords = [
  { text: "Developer", className: "intro-accent" },
  { text: "By" },
  { text: "heart," },
  { text: "Builder", className: "intro-accent" },
  { text: "By" },
  { text: "passion", className: "intro-accent" },
];

function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleTypewriterComplete = () => {
    window.setTimeout(() => setVisible(false), 1000);
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <TypewriterEffectSmooth
            words={introWords}
            onComplete={handleTypewriterComplete}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroLoader;
