"use client";
import React from 'react';

export default function OurEdgeSection() {
  const tableData = [
    {
      feature: "Focus",
      others: "General services",
      we: "Specialized in branding and web design",
    },
    {
      feature: "Client Approach",
      others: "General services",
      we: "Up-to-date with industry trends",
    },
    {
      feature: "Design Philosophy",
      others: "Generic templates",
      we: "Custom and unique",
    },
    {
      feature: "Technical Process",
      others: "Limited",
      we: "Partnership-oriented",
    },
    {
      feature: "Managing Project",
      others: "Not structured",
      we: "Efficient and organized",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto py-24 px-6 md:px-12 bg-white text-black font-sans">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
        <div>
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 block">Our Edge</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Why Choose Us</h2>
        </div>
        <p className="text-xl font-medium text-gray-500 max-w-md lg:text-right pt-2 lg:pt-8">
          How we stand out from competitors with tailored solutions and results.
        </p>
      </div>

      <div className="w-full flex flex-col gap-2 rounded-[2rem] overflow-hidden border border-gray-100 p-2 sm:p-4 shadow-sm mb-32">
        {/* Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 bg-white font-bold text-xl md:text-2xl text-black-600 rounded-[1.5rem]">
          <div>Feature</div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Others</span>
            <span className="text-pink-500 text-lg">❌</span>
          </div>
          <div className="flex items-center gap-2">
            <span>We</span>
            <span className="text-teal-400 text-lg">✅</span>
          </div>
        </div>

        {/* Data Rows */}
        {tableData.map((row, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 bg-[#F4F4F6] rounded-[1.5rem] hover:bg-[#EBEBF0] transition-colors duration-300"
          >
            <div className="font-semibold text-xl md:text-2xl text-gray-800">
              {row.feature}
            </div>
            <div className="text-base md:text-lg text-gray-600 font-medium flex items-center">
              {row.others}
            </div>
            <div className="text-base md:text-lg text-gray-800 font-medium flex items-center">
              {row.we}
            </div>
          </div>
        ))}
      </div>

      {/* Discover Our Key Advantages Section */}
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div>
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 block">Our Edge</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
              Discover Our Key Advantages
            </h3>
          </div>
          <p className="text-xl font-medium text-gray-500 max-w-md lg:text-right pt-2 lg:pt-8">
            Empowering your brand with impactful, tailored solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/4 shrink-0">
            <div className="flex items-center gap-4 text-xl md:text-2xl font-bold text-gray-900">
              <span className="text-black-600 font-black text-3xl">»</span> Major Benefits
            </div>
          </div>
          
          <div className="flex-1 w-full flex flex-col border-t border-gray-200">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-b border-gray-200 text-gray-400 font-bold uppercase tracking-wider text-xs md:text-sm">
              <div className="md:col-span-1">Benefit</div>
              <div className="md:col-span-2">Description</div>
            </div>

            {/* Benefit Rows */}
            {[
              {
                title: "Customized Solutions",
                desc: "Tailored branding and web design strategies that align with your unique goals and target audience."
              },
              {
                title: "Expert Guidance",
                desc: "Benefit from our deep industry knowledge and expertise to make informed decisions."
              },
              {
                title: "Innovative Design",
                desc: "Experience visually stunning and engaging designs that leave a lasting impression."
              },
              {
                title: "Technical Excellence",
                desc: "Ensure your website is optimized for performance, user experience, and search engine visibility."
              },
              {
                title: "Strong Partnerships",
                desc: "Build long-term relationships based on trust, collaboration, and mutual success."
              }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-8 border-b border-gray-200 group hover:bg-[#F8F9FA] transition-colors -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-2xl cursor-pointer"
              >
                <div className="md:col-span-1 text-2xl font-bold text-gray-900 group-hover:text-black-600 transition-colors">
                  {benefit.title}
                </div>
                <div className="md:col-span-2 text-lg text-gray-600 font-medium leading-relaxed">
                  {benefit.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
