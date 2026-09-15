"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarqueeRowProps {
  logos: string[];
  direction?: "left" | "right";
  speed?: number;
}

const MarqueeRow = ({ logos, direction = "left", speed = 40 }: MarqueeRowProps) => {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="flex w-full overflow-hidden group">
      <div
        className={`flex w-max items-center ${animationClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* We use two sets to create a seamless loop. Each set must have identical spacing. */}
        {[...Array(2)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
            {logos.map((logo, idx) => (
              <div 
                key={`${arrayIndex}-${idx}`} 
                className="w-[140px] md:w-[200px] h-[80px] md:h-[110px] relative shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer"
              >
                <Image 
                  src={`/assets/clientslogo/${logo}`} 
                  alt={`Client Logo ${idx}`} 
                  fill 
                  className="object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:drop-shadow-2xl transition-all duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ClientMarqueeSection() {
  const logos = [
    "Al Maoudi.png",
    "Arabian treat Logo.png",
    "Bokai.png",
    "Cinemotion Logo.png",
    "Equinz.png",
    "LORE Logo.png",
    "M7 Ventures Logo.png",
    "Mirrar Logo.png",
    "Nael Logo.png",
    "Qtron Eidul Fitr.png",
    "Smart Tax.png",
    "TEA WAY.png",
    "The Leen.png",
    "teamarabia.png"
  ];

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden flex flex-col items-center">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
      
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#11132d]/5 text-[#11132d] text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-[#11132d]/10 shadow-sm">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-6">
            Trusted by <br className="md:hidden" />
            <span className="text-[#11132d]">
              Visionary Brands
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We collaborate with industry leaders and ambitious startups across the GCC and beyond to build digital excellence.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col gap-12 md:gap-16 max-w-[100vw] overflow-hidden">
        {/* Fade gradients on the edges for a polished look */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* First Marquee Row (Moving Left) */}
        <MarqueeRow logos={logos.slice(0, 7)} direction="left" speed={35} />

        {/* Second Marquee Row (Moving Right) */}
        <MarqueeRow logos={logos.slice(7, 14)} direction="right" speed={35} />
      </div>
    </section>
  );
}
