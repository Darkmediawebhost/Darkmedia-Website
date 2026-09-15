"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TrustedWorldwideSection() {
 const stats = [
  {
    number: "700+",
    title: "Projects Delivered",
    description: "Turning ideas into impactful digital experiences.",
    delay: 0.1,
    href: "/about-us",
  },
  {
    number: "300+",
    title: "Clients Worldwide",
    description: "Building lasting partnerships through creative solutions.",
    delay: 0.2,
    href: "/about-us",
  },
  {
    number: "5+",
    title: "Years of Expertise",
    description: "Bringing strategy, creativity, and technology together.",
    delay: 0.3,
    href: "/about-us",
  },
  {
    number: "6",
    title: "Creative Services",
    description: "From branding to digital, solutions designed to help your business stand out.",
    delay: 0.4,
    href: "/about-us",
  },
];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto py-24 px-6 md:px-12 bg-[#0e0e11] text-white font-sans rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden my-16 shadow-2xl">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2E3848] rounded-full blur-[150px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#2E3848] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#89A1C5] uppercase mb-4 block">Proven Track Record</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white leading-[1.1]">
            Trusted <br className="hidden md:block"/> Worldwide
          </h2>
          <p className="text-xl md:text-2xl font-medium text-[#89A1C5]">Design and web solution</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-md text-base md:text-lg text-[#89A1C5] font-medium leading-relaxed md:pb-2"
        >
          We partner with visionary brands across the globe, delivering exceptional digital experiences that drive growth and engagement.
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: stat.delay }}
          >
            <Link
              href={stat.href}
              className="group relative flex flex-col p-8 sm:p-10 rounded-[2rem] bg-[#2E3848]/40 backdrop-blur-md border border-[#2E3848] hover:border-white/20 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-full block"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Number + Arrow */}
              <div className="relative flex items-start justify-between mb-6">
                <div className="text-5xl md:text-6xl font-black tracking-tighter text-white group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-500 origin-left drop-shadow-md">
                  {stat.number}
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 mt-1 shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-white mb-4">{stat.title}</h3>
              
              <p className="relative text-[#89A1C5] font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {stat.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-white w-0 group-hover:w-full transition-all duration-700 ease-out opacity-80"></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
