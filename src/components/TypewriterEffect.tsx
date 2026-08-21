import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/IntroLoader.scss";

interface Word {
  text: string;
  className?: string;
  /** Insert a line break after this word on small screens */
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
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div className="typewriter-smooth__words">
      {wordsArray.map((word, idx) => (
        <React.Fragment key={`word-${idx}`}>
          <div className="typewriter-smooth__word">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={`typewriter-smooth__char ${word.className || ""}`.trim()}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
          {word.breakAfter ? (
            <br className="typewriter-smooth__break" aria-hidden="true" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={`typewriter-smooth ${className}`.trim()}>
      <motion.div
        className="typewriter-smooth__reveal"
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.3,
        }}
        onAnimationComplete={onComplete}
      >
        <div className="typewriter-smooth__text">
          {renderWords()}{" "}
        </div>
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
