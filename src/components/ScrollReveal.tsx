import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, type UseInViewOptions } from 'framer-motion';
import {
  createIntroVariants,
  createRevealItemVariants,
  staggerContainerVariants,
} from '../motion/scrollReveal';
import '../assets/styles/ScrollReveal.scss';

type SectionIntroProps = {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
};

export function SectionIntro({ index, eyebrow, title, lead }: SectionIntroProps) {
  return (
    <header className="section-intro">
      <p className="section-intro__meta">
        <span className="section-intro__index">{index}</span>
        <span className="section-intro__divider">/</span>
        <span className="section-intro__eyebrow">{eyebrow}</span>
      </p>
      <h1 className="section-intro__title">{title}</h1>
      {lead ? <p className="section-intro__lead">{lead}</p> : null}
    </header>
  );
}

type ScrollRevealProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  margin?: UseInViewOptions['margin'];
};

export function ScrollReveal({
  id,
  className = '',
  children,
  margin = '-10% 0px -8% 0px' as UseInViewOptions['margin'],
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin });
  const introVariants = createIntroVariants(reducedMotion);

  return (
    <div id={id} ref={ref} className={`scroll-reveal ${className}`.trim()}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={introVariants}
      >
        {children}
      </motion.div>
    </div>
  );
}

type ScrollRevealGroupProps = {
  className?: string;
  children: React.ReactNode;
  margin?: UseInViewOptions['margin'];
};

export function ScrollRevealGroup({
  className = '',
  children,
  margin = '-10% 0px -8% 0px' as UseInViewOptions['margin'],
}: ScrollRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin });
  const itemVariants = createRevealItemVariants(reducedMotion);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        return (
          <motion.div variants={itemVariants} className="scroll-reveal__item">
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

type ScrollRevealItemProps = {
  className?: string;
  children: React.ReactNode;
};

/** Use inside a parent that already handles in-view, or standalone with its own ref */
export function ScrollRevealItem({ className = '', children }: ScrollRevealItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: '-8% 0px -6% 0px' as UseInViewOptions['margin'],
  });
  const itemVariants = createRevealItemVariants(reducedMotion);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}
