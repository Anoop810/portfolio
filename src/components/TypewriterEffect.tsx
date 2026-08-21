import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/IntroLoader.scss";

interface Word {
  text: string;
  className?: string;
  /** Start a new visual line after this word on small screens */
  breakAfter?: boolean;
}

interface TypewriterEffectSmoothProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
}

function TypewriterEffectSmooth({
  words,
  className = "",
  cursorClassName = "",
  onComplete,
}: TypewriterEffectSmoothProps) {
  const lines: Word[][] = [[]];
  words.forEach((word) => {
    lines[lines.length - 1].push(word);
    if (word.breakAfter) {
      lines.push([]);
    }
  });
  const wordLines = lines.filter((line) => line.length > 0);

  const renderWords = () =>
    wordLines.map((line, lineIdx) => (
      <div key={`line-${lineIdx}`} className="typewriter-smooth__line">
        {line.map((word, idx) => (
          <div key={`word-${lineIdx}-${idx}`} className="typewriter-smooth__word">
            {word.text.split("").map((char, index) => (
              <span
                key={`char-${index}`}
                className={`typewriter-smooth__char ${word.className || ""}`.trim()}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    ));

  return (
    <div className={`typewriter-smooth ${className}`.trim()}>
      <motion.div
        className="typewriter-smooth__reveal"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.3,
        }}
        onAnimationComplete={onComplete}
      >
        <div className="typewriter-smooth__text">{renderWords()}</div>
      </motion.div>
      <motion.span
        className={`typewriter-smooth__cursor ${cursorClassName}`.trim()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}

export default TypewriterEffectSmooth;
