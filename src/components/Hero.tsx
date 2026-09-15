"use client";

import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { SlideUpText } from "./SlideUpText";
import { TextReveal } from "./TextReveal";
import Link from "next/link";

const locations = ["Mangalore", "India", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"];

const clientLogos = [
  "Al Maoudi.png", "Arabian treat Logo.png", "Bokai.png", "Bokke Fried Chicken.png",
  "Cinemotion Logo.png", "Eidul Fitr.png", "Equinz.png", "IHTIMAL PROFILE.png",
  "K I Construction.png", "LORE Logo.png", "Logo.png", "M7 Ventures Logo.png",
  "MDP.png", "Markcraft.png", "Mirrar Logo.png", "Moko Logo.png", "Nael Logo.png",
  "Nexa Utilty.png", "Prospect Logo.png", "Qtron Eidul Fitr.png", "Rukn Al Jeran.png",
  "Smart Tax.png", "Swaad.png", "TEA WAY.png", "The Leen.png", "Unimax.png",
  "V Zone Ventures logo.png", "Vision & Excellence Flyer.png", "Zero Waste Company.png",
  "teamarabia.png"
];

export default function Hero() {
  return (
    <section className="w-full relative z-10 min-h-[100svh] md:min-h-[95vh] flex flex-col justify-center mt-[-80px] pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Subtle Premium Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Dynamic Animated Aurora Background */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <motion.div 
          style={{ willChange: "transform" }}
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          style={{ willChange: "transform" }}
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div 
          style={{ willChange: "transform" }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, 150, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply"
        />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 flex flex-col items-start text-left relative z-10">

        {/* Title */}
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] font-extrabold tracking-tight max-w-[1100px] mt-8 md:mt-20">
        <SlideUpText delay={0.3}>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">
            Expert Branding,
          </span>
        </SlideUpText>
        <SlideUpText delay={0.4}>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">
            Web & Video Solutions
          </span>
        </SlideUpText>
        <SlideUpText delay={0.5}>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">
            Across{" "}
          </span>
          <span className="relative inline-flex items-center text-[#11132d] ml-2 align-bottom h-[1.2em] font-black uppercase tracking-tight">
            <Typewriter
              options={{
                strings: locations,
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                cursor: "",
              }}
            />
          </span>
        </SlideUpText>
      </h1>
      
      {/* Subtitle */}
      <div className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 font-medium max-w-3xl">
        <TextReveal delay={0.6}>
          Trusted by over 400 visionary brands worldwide to craft unforgettable digital experiences and drive meaningful growth.
        </TextReveal>
      </div>

      {/* Call to Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
      >
        <Link href="/contact-us" className="inline-flex items-center gap-3 bg-[#11132d] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 hover:shadow-[0_10px_30px_rgba(17,19,45,0.3)] hover:-translate-y-1 transition-all duration-300 group">
          Start Your Project 
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
        <Link href="/services" className="inline-flex items-center gap-3 text-[#11132d] px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-all duration-300 group border border-transparent hover:border-gray-200">
          Explore Services
        </Link>
      </motion.div>
      
      {/* Logos Row */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="w-full mt-20 overflow-hidden relative border-y border-gray-200/50 py-8 bg-white/30 backdrop-blur-sm rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
      >
        <div className="text-left text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 ml-8">Trusted by industry leaders</div>
        <div className="w-[200%] sm:w-[max-content] flex animate-slide items-center gap-16 pr-16">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer relative h-12 w-32 flex items-center justify-center hover:scale-105">
              <Image 
                src={`/assets/clientslogo/${logo}`} 
                alt={`Client Logo ${i}`} 
                fill
                className="object-contain drop-shadow-sm"
                sizes="128px"
              />
            </div>
          ))}
        </div>
        {/* Gradient fades for the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none z-10 rounded-l-3xl"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none z-10 rounded-r-3xl"></div>
      </motion.div>

      </div>
    </section>
  );
}
