"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-[var(--color-forest-950)]/90 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center justify-center group border border-white/10 bg-texture overflow-hidden"
          aria-label="Povratak na vrh"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="26"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-white/5"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              style={{ pathLength: scrollYProgress }}
              className="text-[var(--color-copper-500)]"
            />
          </svg>
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

