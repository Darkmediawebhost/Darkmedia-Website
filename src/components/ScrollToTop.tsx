"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        const progress = Math.min(Math.max((currentScroll / totalScroll) * 100, 0), 100);
        setScrollProgress(progress);
      }

      // Show button after scrolling down 220px
      if (currentScroll > 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress ring calculation
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 25, transition: { duration: 0.25 } }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center justify-end group select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Liquid Expanding Tooltip Pill */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.85 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="hidden sm:flex items-center gap-1.5 mr-3 px-3.5 py-1.5 rounded-full bg-[#F8F8FA]/95 backdrop-blur-xl border border-white shadow-[0_8px_20px_rgba(49,59,76,0.12)] text-[#313B4C] text-xs font-semibold tracking-wide pointer-events-none"
              >
                <span>Top</span>
                <span className="text-[10px] opacity-60 font-mono">
                  {Math.round(scrollProgress)}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Liquid Button Container */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Scroll to top"
            className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer p-0 focus:outline-none transition-shadow duration-300"
            style={{
              boxShadow: isHovered
                ? "0 14px 32px -4px rgba(49, 59, 76, 0.35), 0 0 20px 2px rgba(248, 248, 250, 0.6)"
                : "0 10px 25px -3px rgba(49, 59, 76, 0.22), 0 4px 10px rgba(49, 59, 76, 0.1)",
            }}
          >
            {/* Outer Glass Ring Base */}
            <div className="absolute inset-0 rounded-full bg-[#F8F8FA]/80 backdrop-blur-xl border border-white/80 transition-all duration-300 group-hover:border-white" />

            {/* Liquid Ambient Breathing Halo */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#313B4C]/20 via-transparent to-[#313B4C]/10 blur-sm pointer-events-none"
            />

            {/* SVG Circular Liquid Progress Track */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
              viewBox="0 0 60 60"
            >
              {/* Background Track Circle */}
              <circle
                cx="30"
                cy="30"
                r={radius}
                stroke="#313B4C"
                strokeWidth="2.5"
                fill="none"
                opacity="0.12"
              />
              {/* Animated Liquid Progress Circle */}
              <circle
                cx="30"
                cy="30"
                r={radius}
                stroke="#313B4C"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-[stroke-dashoffset] duration-150 ease-out"
              />
            </svg>

            {/* Inner Core Container */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden flex items-center justify-center bg-[#F8F8FA] border border-[#313B4C]/10 shadow-inner">
              {/* Internal Dynamic Liquid Fill & Waves */}
              <div
                className="absolute inset-x-0 bottom-0 bg-[#313B4C] transition-all duration-200 ease-out pointer-events-none"
                style={{
                  height: `${Math.max(scrollProgress, 12)}%`,
                  opacity: 0.95,
                }}
              >
                {/* Wavy Liquid Surface Top */}
                <div className="absolute -top-2 inset-x-0 h-3 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      x: ["0%", "-50%"],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex w-[200%] h-full opacity-90"
                  >
                    {/* SVG Liquid Wave Pattern */}
                    <svg
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                      className="w-1/2 h-full fill-[#313B4C]"
                    >
                      <path d="M 0 10 C 25 18, 25 2, 50 10 C 75 18, 75 2, 100 10 L 100 20 L 0 20 Z" />
                    </svg>
                    <svg
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                      className="w-1/2 h-full fill-[#313B4C]"
                    >
                      <path d="M 0 10 C 25 18, 25 2, 50 10 C 75 18, 75 2, 100 10 L 100 20 L 0 20 Z" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Liquid Droplet Reflection Gloss */}
              <div className="absolute top-1 left-2 w-4 h-2 rounded-full bg-white/40 blur-[0.5px] pointer-events-none -rotate-12" />

              {/* Arrow Icon with Liquid Flight Animation */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  animate={
                    isClicked
                      ? { y: [-2, -26, 26, 0], opacity: [1, 0, 0, 1] }
                      : isHovered
                      ? { y: [-2, -5, -2] }
                      : { y: 0 }
                  }
                  transition={
                    isClicked
                      ? { duration: 0.55, ease: "easeInOut" }
                      : { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="transition-colors duration-200"
                  style={{
                    color: scrollProgress > 55 ? "#FFFFFF" : "#313B4C",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-sm"
                  >
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </motion.div>
              </div>

              {/* Click Liquid Ripple Expansion */}
              <AnimatePresence>
                {isClicked && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-white/60 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
