import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TypewriterEffectSmooth from "./TypewriterEffect";
import "../assets/styles/IntroLoader.scss";

interface IntroLoaderProps {
  onComplete: () => void;
}

const introWords = [
  { text: "Developer", className: "intro-accent" },
  { text: "By" },
  { text: "heart,", breakAfter: true },
  { text: "Builder", className: "intro-accent" },
  { text: "By" },
  { text: "passion", className: "intro-accent" },
];

/** Hard cap so a stalled animation never traps the visitor on the splash */
const INTRO_FAILSAFE_MS = 6000;
const EXIT_HOLD_MS = 900;

function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [visible, setVisible] = useState(true);
  const finishingRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const beginExit = useCallback(() => {
    if (finishingRef.current) {
      return;
    }
    finishingRef.current = true;
    window.setTimeout(() => setVisible(false), EXIT_HOLD_MS);
  }, []);

  useEffect(() => {
    const failsafe = window.setTimeout(beginExit, INTRO_FAILSAFE_MS);
    return () => window.clearTimeout(failsafe);
  }, [beginExit]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <TypewriterEffectSmooth
            words={introWords}
            onComplete={beginExit}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroLoader;
