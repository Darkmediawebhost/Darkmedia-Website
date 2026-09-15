"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MissionVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white relative overflow-hidden font-sans pt-32 pb-24 border-t border-gray-50">
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 3000; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 3000;
          stroke-dashoffset: 3000;
          animation: drawLine 4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes arrowShoot {
          0% { transform: translate(-100px, 100px) scale(0.8) rotate(-15deg); opacity: 0; }
          60% { transform: translate(10px, -10px) scale(1.05) rotate(2deg); opacity: 1; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-arrow-shoot {
          animation: arrowShoot 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes float-arrow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .animate-float-arrow {
          animation: float-arrow 6s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.6; transform: scale(1.1) translate(-50%, -50%); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 5s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Glow */}
      <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-to-bl from-gray-100/80 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none -z-10"></div>

      {/* Dotted Background Line */}
      {isVisible && (
        <svg viewBox="0 0 1400 400" className="absolute top-[25%] left-0 w-full h-[400px] pointer-events-none -z-10" preserveAspectRatio="none">
          <path 
            d="M -100 150 C 300 50 700 400 1100 100 C 1300 -50 1500 50 1600 50" 
            fill="none" 
            stroke="#e5e7eb" 
            strokeWidth="1.5" 
            strokeDasharray="4 8" 
            className="animate-draw" 
            style={{ animationDuration: '6s' }}
          />
        </svg>
      )}

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 relative">
          
          {/* Left Content */}
          <div className="max-w-3xl relative z-20">
            <div className="flex items-center gap-6 mb-12 overflow-hidden">
              <span className={`text-[11px] font-bold tracking-[0.3em] text-gray-500 uppercase transition-transform duration-1000 delay-100 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                Our Direction
              </span>
              <div className={`h-[1px] w-24 bg-gray-300 transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transformOrigin: 'left' }}></div>
            </div>

            <h2 className="text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black tracking-tighter text-gray-900 leading-[0.95] mb-10 flex flex-col gap-2">
              <div className="overflow-hidden pb-2">
                <span className={`inline-block transition-transform duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>Our</span>
              </div>
              <div className="overflow-hidden pb-4">
                <span className={`inline-block transition-transform duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Mission</span> & Vision
                </span>
              </div>
            </h2>

            <p className={`text-xl text-gray-500 font-medium max-w-xl leading-relaxed transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Driven by purpose. Focused on impact. We create meaningful solutions today for a better tomorrow.
            </p>
          </div>

          {/* Right Graphic - Dynamic Arrow */}
          <div className="absolute top-0 right-0 w-full max-w-[600px] h-[450px] hidden lg:flex justify-center items-center pointer-events-none">
            {isVisible && (
              <div className="w-full h-full relative">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gray-200 rounded-full blur-[80px] animate-pulse-glow z-0 origin-center"></div>
                
                {/* Animated Arrow Image */}
                <div className="w-full h-full animate-arrow-shoot z-10 relative">
                  <div className="w-full h-full animate-float-arrow relative flex justify-center items-center">
                    <Image 
                      src="/assets/arrow.png" 
                      alt="Direction Arrow" 
                      width={800}
                      height={800}
                      className="w-[85%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]" 
                    />
                    
                    {/* Creative Floating Typography */}
                    <div className="absolute right-[-5%] top-[20%] flex flex-col items-end">
                       <span className="text-[9px] font-bold tracking-[0.4em] text-gray-400">FORWARD</span>
                       <div className="w-4 h-[1px] bg-gray-300 mt-2"></div>
                    </div>
                    <div className="absolute left-[10%] bottom-[15%] flex flex-col items-start">
                       <span className="text-[9px] font-bold tracking-[0.4em] text-gray-400">MOMENTUM</span>
                       <div className="w-4 h-[1px] bg-gray-300 mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Cards Grid */}
        <div className="flex justify-center w-full relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:w-[80%] xl:w-[70%]">
            
            {/* Mission Card */}
            <div 
              className={`group bg-white rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:border-gray-200 transition-all duration-700 ease-out hover:-translate-y-3 flex flex-col h-[400px] relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {/* Background Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-500">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                      <path d="M22 2 L15 9 M22 2 L18 2 M22 2 L22 6"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-300 tracking-widest font-mono group-hover:text-gray-400 transition-colors">01</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:tracking-wide transition-all duration-500">Our Mission</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                  To deliver creative, reliable, and forward-thinking solutions that help businesses grow and make a positive difference in the communities we serve.
                </p>
                
                <div className="flex items-center justify-between mt-auto cursor-pointer">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors duration-300 uppercase">
                    Learn More
                  </span>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white text-gray-900 transition-all duration-300">
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              className={`group bg-white rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:border-gray-200 transition-all duration-700 ease-out hover:-translate-y-3 flex flex-col h-[400px] relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '500ms' }}
             >
              {/* Background Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-500">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
                      <path d="M12 3 v-2 M12 23 v2 M4 5 l-1 -1 M20 5 l1 -1"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-300 tracking-widest font-mono group-hover:text-gray-400 transition-colors">02</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:tracking-wide transition-all duration-500">Our Vision</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-medium mb-8 flex-grow">
                  To be a trusted partner known for innovation, creativity, and lasting impact — shaping a smarter, more connected tomorrow.
                </p>
                
                <div className="flex items-center justify-between mt-auto cursor-pointer">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors duration-300 uppercase">
                    Learn More
                  </span>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white text-gray-900 transition-all duration-300">
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Clean Creative Footer */}
        <div className="mt-32 pt-10 border-t border-gray-100 flex items-center justify-center overflow-hidden relative z-20">
          <span className={`text-[11px] font-bold tracking-[0.5em] text-gray-400 uppercase transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            People <span className="mx-6 font-light text-gray-300">X</span> Ideas <span className="mx-6 font-light text-gray-300">X</span> Impact
          </span>
        </div>

      </div>
    </section>
  );
}
