"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqs = [
  {
    question: "What does your Web Development service include?",
    answer: "We build fast, scalable, and visually stunning websites using modern technologies. Our development process ensures your site is fully responsive, secure, and optimized for maximum performance and user engagement.",
  },
  {
    question: "How do you approach Branding?",
    answer: "Our branding process is all about uncovering your unique identity. We design comprehensive brand guidelines, striking logos, and visual assets that resonate with your target audience and stand out in the market.",
  },
  {
    question: "What kind of Video Production do you offer?",
    answer: "From conceptualization and storyboarding to filming and post-production, we create high-quality promotional videos, brand films, and motion graphics that tell your story dynamically.",
  },
  {
    question: "How can SEO & Analytics help my business?",
    answer: "We implement data-driven SEO strategies to boost your organic search rankings. Coupled with advanced analytics, we help you track user behavior, measure campaign success, and continuously optimize for conversions.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto py-32 px-6 md:px-12 bg-[#FAFAFA] text-[#101828] font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 block">Knowledge Base</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-[#101828]">
              Common <br className="hidden md:block"/> Queries
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-gray-500 max-w-md"
          >
            Everything you need to know about the product and billing.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Accordion */}
          <div className="flex-1 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border rounded-[2rem] p-6 md:p-8 transition-all duration-300 cursor-pointer overflow-hidden relative group ${
                    isOpen ? 'bg-white shadow-xl shadow-gray-200/50 border-transparent' : 'bg-[#F0F0F0] border-[#E5E5E5] hover:bg-white'
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center gap-4 relative z-10">
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#101828]' : 'text-[#101828]/80 group-hover:text-[#101828]'}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen ? 'bg-[#101828] text-white rotate-180' : 'bg-white text-[#101828] shadow-sm'
                    }`}>
                      {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                      )}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <p className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed pr-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: CTA Card with Video Background */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[450px] shrink-0"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden flex flex-col justify-end h-[600px] lg:h-full lg:min-h-[700px] sticky top-32 shadow-2xl group">
              
              {/* Background Video (Simulating Anubi AI Section / SketchSculpture) */}
              <div className="absolute inset-0 z-0 bg-[#101828]">
                <video autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-80 mix-blend-screen scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                 preload="none">
                  <source src="https://cdn.dribbble.com/userupload/11267104/file/original-4c472c9a997ef0e854999f8d167f2ec6.mp4" type="video/mp4" />
                
          <track kind="captions" srcLang="en" label="English" default />
        </video>
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-[#101828]/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 lg:p-12 text-white">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </div>
                <h3 className="text-4xl font-extrabold mb-4 leading-tight">Have more<br/>questions?</h3>
                <p className="text-gray-300 font-medium text-lg mb-10 leading-relaxed max-w-sm">
                  Can't find the answer you're looking for? Please chat to our friendly team, we're always here to help.
                </p>
                <Link href="/contact-us" className="w-full py-5 bg-white text-[#101828] font-bold text-lg rounded-full hover:bg-gray-100 transition-colors flex justify-center items-center gap-3 overflow-hidden relative group/btn">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
