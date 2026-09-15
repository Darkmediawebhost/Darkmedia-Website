"use client";

import React from "react";
import { motion } from "framer-motion";

export const TextReveal = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: string, 
  delay?: number, 
  className?: string 
}) => {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      filter: "blur(4px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
