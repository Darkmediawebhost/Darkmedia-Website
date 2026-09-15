"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const otherServices = [
  {
    title: "Branding",
    description: "Build a memorable identity that resonates with your audience.",
    icon: "✨",
    href: "/services/branding",
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Video Production",
    description: "Tell your story through high-quality motion graphics and video.",
    icon: "🎥",
    href: "/services/video-production",
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    title: "SEO & Analytics",
    description: "Dominate search results and track what truly matters.",
    icon: "📈",
    href: "/services/seo-analytics",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  }
];

export default function OtherServicesSection() {
  return (
    <section className="w-full py-24 bg-[#FAFAFA] relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Explore Other Services
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-xl">
            We provide a holistic approach to your digital success. Discover what else we can do for you.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link 
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            View All Services
          </Link>
        </motion.div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherServices.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <Link href={service.href} className="block h-full">
              <div className="group h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 border ${service.color} transition-transform duration-300 group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                  {service.title}
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </h3>
                <p className="text-gray-600 font-medium">
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
