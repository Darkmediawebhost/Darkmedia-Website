"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const offerings = [
  {
    title: "Business Website",
    description: "Professional, scalable, and responsive websites that establish your digital presence.",
    icon: "🏢",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "E-Commerce",
    description: "High-converting online stores built on robust platforms for seamless shopping.",
    icon: "🛍️",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Landing Page",
    description: "Laser-focused pages designed to capture leads and maximize conversions.",
    icon: "🎯",
    colSpan: "col-span-1",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "CMS",
    description: "Custom content management systems for easy updates.",
    icon: "📝",
    colSpan: "col-span-1",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "SEO Optimization",
    description: "Data-driven strategies to rank higher and drive organic traffic.",
    icon: "📈",
    colSpan: "col-span-1 md:col-span-2",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "GEO & AEO",
    description: "Local SEO and Answer Engine Optimization to dominate AI searches.",
    icon: "🌍",
    colSpan: "col-span-1 md:col-span-2",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Sales Page",
    description: "Persuasive, long-form sales pages engineered for product launches.",
    icon: "💰",
    colSpan: "col-span-1",
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical support to keep your site fast and secure.",
    icon: "🛠️",
    colSpan: "col-span-1",
    color: "from-slate-500 to-gray-500",
  }
];

const BentoCard = ({ offering, index }: { offering: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-[250px] md:h-[300px] rounded-3xl cursor-pointer group ${offering.colSpan}`}
    >
      <div 
        className="absolute inset-0 bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Hover Gradient Overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${offering.color} transition-opacity duration-500`}></div>
        
        <div className="p-8 h-full flex flex-col justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-sm border border-gray-100">
            {offering.icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{offering.title}</h3>
            <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">{offering.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WebDevOfferingsGrid() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-black-600 text-sm font-bold tracking-[0.3em] uppercase block mb-4">
            Our Capabilities
          </span>
          <h2 className="text-5xl md:text-7xl font-medium text-gray-900 tracking-tight leading-[1.05]">
            What We Can Offer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg"
        >
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            A complete suite of web development services tailored to grow your brand and dominate the digital landscape.
          </p>
        </motion.div>
      </div>

      <div 
        className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10" 
        style={{ perspective: "1000px" }}
      >
        {offerings.map((offering, idx) => (
          <BentoCard key={offering.title} offering={offering} index={idx} />
        ))}
      </div>
    </section>
  );
}
