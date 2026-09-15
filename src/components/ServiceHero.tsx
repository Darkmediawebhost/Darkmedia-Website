"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlideUpText } from "./SlideUpText";

interface ServiceHeroProps {
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  videoSrc?: string;
}

export const ServiceHero = ({ 
  badgeText, 
  titleLine1, 
  titleLine2, 
  videoSrc = "https://www.mydbucket.com/wp-content/uploads/2024/10/wave.mp4" 
}: ServiceHeroProps) => {
  return (
    <section className="relative w-full max-w-[95%] lg:max-w-[90%] mx-auto h-[70vh] md:h-[80vh] rounded-[2.5rem] overflow-hidden mb-8 md:mb-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
      {/* Background Video with slow zoom-in effect */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Sophisticated Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white/95 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        
        {/* Floating Category Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#11132d] animate-pulse"></span>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#11132d] uppercase">{badgeText}</span>
        </motion.div>

        {/* Massive Staggered Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          <SlideUpText delay={0.3}>
            {titleLine1}
          </SlideUpText>
          <div className="h-1 md:h-3"></div> {/* Spacing between lines */}
          <SlideUpText delay={0.4}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11132d] via-gray-700 to-gray-500">
              {titleLine2}
            </span>
          </SlideUpText>
        </h1>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gray-200 relative overflow-hidden">
             <motion.div 
               className="absolute top-0 left-0 w-full h-1/2 bg-gray-500"
               animate={{ y: [0, 64] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
