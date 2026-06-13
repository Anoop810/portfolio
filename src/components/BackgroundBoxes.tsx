import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/BackgroundBoxes.scss';

const COLORS = [
  '#5000ca',
  '#7c3aed',
  '#a78bfa',
  '#c4b5fd',
  '#93c5fd',
  '#f9a8d4',
  '#86efac',
  '#d8b4fe',
];

const ROWS = 45;
const COLS = 65;

const getRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];

function BoxesCore({ className = '' }: { className?: string }) {
  const rows = Array.from({ length: ROWS });
  const cols = Array.from({ length: COLS });

  return (
    <div className={`background-boxes-grid ${className}`.trim()}>
      {rows.map((_, i) => (
        <div key={`row-${i}`} className="background-boxes-row">
          {cols.map((_, j) => (
            <motion.div
              key={`col-${j}`}
              className="background-boxes-cell"
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="background-boxes-plus"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

export const BackgroundBoxes = React.memo(BoxesCore);

export default BackgroundBoxes;
