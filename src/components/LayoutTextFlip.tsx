import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../assets/styles/LayoutTextFlip.scss';

interface LayoutTextFlipProps {
  text?: string;
  words: string[];
  duration?: number;
  className?: string;
}

function LayoutTextFlip({
  text = '',
  words,
  duration = 3000,
  className = '',
}: LayoutTextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => window.clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className={`layout-text-flip ${className}`.trim()}>
      {text ? (
        <motion.span layout className="layout-text-flip__static">
          {text}
        </motion.span>
      ) : null}
      <motion.div
        layout
        className="layout-text-flip__box"
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={words[currentIndex]}
            layout
            className="layout-text-flip__word"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default LayoutTextFlip;
