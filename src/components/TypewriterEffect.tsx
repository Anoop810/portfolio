import React, { useEffect, useMemo, useRef, useState } from "react";
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
  /** Milliseconds between characters */
  charDelayMs?: number;
  /** Delay before typing starts */
  startDelayMs?: number;
}

type Glyph =
  | {
      kind: "char";
      char: string;
      className: string;
      lineIdx: number;
      key: string;
    }
  | {
      kind: "space";
      lineIdx: number;
      key: string;
    };

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function TypewriterEffectSmooth({
  words,
  className = "",
  cursorClassName = "",
  onComplete,
  charDelayMs = 45,
  startDelayMs = 300,
}: TypewriterEffectSmoothProps) {
  const lines = useMemo(() => {
    const grouped: Word[][] = [[]];
    words.forEach((word) => {
      grouped[grouped.length - 1].push(word);
      if (word.breakAfter) {
        grouped.push([]);
      }
    });
    return grouped.filter((line) => line.length > 0);
  }, [words]);

  const glyphs = useMemo(() => {
    const result: Glyph[] = [];
    lines.forEach((line, lineIdx) => {
      line.forEach((word, wordIdx) => {
        word.text.split("").forEach((char, charIdx) => {
          result.push({
            kind: "char",
            char,
            className: word.className || "",
            lineIdx,
            key: `c-${lineIdx}-${wordIdx}-${charIdx}`,
          });
        });
        if (wordIdx < line.length - 1) {
          result.push({
            kind: "space",
            lineIdx,
            key: `s-${lineIdx}-${wordIdx}`,
          });
        }
      });
    });
    return result;
  }, [lines]);

  const total = glyphs.length;
  const [visibleCount, setVisibleCount] = useState(0);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    completedRef.current = false;
    setVisibleCount(0);

    const finish = () => {
      if (completedRef.current) {
        return;
      }
      completedRef.current = true;
      onCompleteRef.current?.();
    };

    if (total === 0) {
      finish();
      return;
    }

    if (prefersReducedMotion()) {
      setVisibleCount(total);
      const id = window.setTimeout(finish, 200);
      return () => window.clearTimeout(id);
    }

    let index = 0;
    let intervalId = 0;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleCount(index);
        if (index >= total) {
          window.clearInterval(intervalId);
          finish();
        }
      }, charDelayMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startId);
      window.clearInterval(intervalId);
    };
  }, [total, charDelayMs, startDelayMs]);

  const cursorLineIdx =
    visibleCount === 0
      ? 0
      : glyphs[Math.min(visibleCount - 1, total - 1)]?.lineIdx ?? 0;

  return (
    <div className={`typewriter-smooth ${className}`.trim()}>
      <div className="typewriter-smooth__text" aria-label={words.map((w) => w.text).join(" ")}>
        {lines.map((_, lineIdx) => {
          const lineGlyphs = glyphs.filter((g) => g.lineIdx === lineIdx);
          const firstIndex = glyphs.findIndex((g) => g.lineIdx === lineIdx);

          return (
            <div key={`line-${lineIdx}`} className="typewriter-smooth__line">
              {lineGlyphs.map((glyph, localIdx) => {
                const absoluteIndex = firstIndex + localIdx;
                const revealed = absoluteIndex < visibleCount;
                if (glyph.kind === "space") {
                  return (
                    <span
                      key={glyph.key}
                      className={`typewriter-smooth__char typewriter-smooth__space${
                        revealed ? " is-revealed" : ""
                      }`}
                    >
                      {"\u00A0"}
                    </span>
                  );
                }
                return (
                  <span
                    key={glyph.key}
                    className={`typewriter-smooth__char ${glyph.className}${
                      revealed ? " is-revealed" : ""
                    }`.trim()}
                  >
                    {glyph.char}
                  </span>
                );
              })}
              {cursorLineIdx === lineIdx && (
                <span
                  className={`typewriter-smooth__cursor ${cursorClassName}`.trim()}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypewriterEffectSmooth;
