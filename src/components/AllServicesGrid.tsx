"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Building scalable, high-performance web applications tailored to your business needs with cutting-edge technologies.",
    icon: "💻",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Branding",
    description: "Crafting unique identities that resonate with your audience and leave a lasting impression in a crowded market.",
    icon: "✨",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Video Production",
    description: "Compelling visual storytelling and motion graphics that capture attention and drive meaningful engagement.",
    icon: "🎥",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "SEO & Analytics",
    description: "Data-driven strategies to boost your search visibility, track performance, and measure what truly matters.",
    icon: "📈",
    color: "from-green-400 to-emerald-600"
  }
];

const TiltCard = ({ service, index }: { service: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-[400px] md:h-[450px] rounded-[2.5rem] cursor-pointer group"
    >
      <div 
        className="absolute inset-0 bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] group-hover:bg-white/90"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${service.color} opacity-10 blur-[80px] group-hover:opacity-30 transition-opacity duration-700`}></div>
          <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr ${service.color} opacity-0 blur-[60px] group-hover:opacity-20 transition-opacity duration-700 delay-100`}></div>
        </div>
        
        {/* Content translated in Z space for 3D pop effect */}
        <div className="p-12 h-full flex flex-col justify-between relative z-10" style={{ transform: "translateZ(70px)" }}>
          <div className="text-7xl drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500 origin-left">
            {service.icon}
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">{service.title}</h3>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">{service.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AllServicesGrid() {
  return (
    <section className="w-full py-32 bg-[#FAFAFA] relative overflow-hidden flex flex-col items-center" style={{ perspective: "1500px" }}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-purple-600/5 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[60rem] h-[60rem] bg-blue-600/5 rounded-full blur-[150px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-2 px-5 rounded-full bg-white text-gray-900 text-sm font-bold tracking-[0.2em] uppercase mb-8 border border-gray-200 shadow-sm">
            Our Services
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#111111] tracking-tighter mb-8 leading-[1.1]">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            We merge stunning aesthetics with cutting-edge technology to build digital experiences that elevate your brand.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">
        {services.map((service, idx) => (
          <TiltCard key={service.title} service={service} index={idx} />
        ))}
      </div>
    </section>
  );
}
