"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function InstagramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-24 md:py-32 relative z-20 mt-12 md:mt-24">
      <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto bg-white relative font-sans rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col lg:flex-row items-center justify-end min-h-[450px]">
        <style>{`
          @keyframes float-mobile {
            0%, 100% { transform: translateY(0) rotate(-1deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
          }
          .animate-float-mobile {
            animation: float-mobile 6s ease-in-out infinite;
          }
          .hover-arrow {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .btn-group:hover .hover-arrow {
            transform: translateX(6px) translateY(-6px);
          }
        `}</style>

        {/* Decorative Ambient Blur behind content */}
        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* --- MOBILE IMAGE LAYOUT (Hidden on Desktop) --- */}
        <div className="flex lg:hidden w-full justify-center -mt-[140px] md:-mt-[180px] mb-8 relative z-20 pointer-events-none">
          <div className={`relative transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`}>
            <div className="animate-float-mobile">
              <div className="overflow-hidden h-[350px] md:h-[450px]">
                <Image 
                  src="/assets/img/Mobile.png" 
                  alt="Dark Media Instagram Mobile" 
                  width={500}
                  height={1000}
                  className="w-[260px] md:w-[320px] max-w-none h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
            {/* Mobile Floating Social Badge */}
            <div className={`absolute top-[25%] right-[-10%] md:right-[-15%] bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-2xl flex items-center gap-2 animate-pulse-slow pointer-events-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-900">@darkmedia.tech</span>
                <span className="text-[8px] text-gray-500 font-medium">Follow us</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- DESKTOP IMAGE CUTOUT (Hidden on Mobile) --- */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-[50%] h-[calc(100%+200px)] overflow-hidden rounded-bl-[3.5rem] z-10 pointer-events-none">
          {/* The Phone Image */}
          <div className={`absolute bottom-[-150px] left-[45%] -translate-x-1/2 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-90'}`}>
            <div className="animate-float-mobile">
              <Image 
                src="/assets/img/Mobile.png" 
                alt="Dark Media Instagram Mobile" 
                width={500}
                height={1000}
                className="w-[420px] xl:w-[480px] max-w-none h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
          
          {/* Desktop Floating Social Badge */}
          <div className={`absolute top-[35%] right-[15%] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-pulse-slow pointer-events-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900">@darkmedia.tech</span>
              <span className="text-[10px] text-gray-500 font-medium">Follow us</span>
            </div>
          </div>
        </div>

        {/* Right Column - Typography & CTA */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left pt-0 lg:pt-16 pb-16 px-6 lg:px-16 relative z-20">
          
          {/* <div className="flex items-center gap-4 mb-6 overflow-hidden">
            <span className={`text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase transition-transform duration-1000 delay-100 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 lg:-translate-x-12 opacity-0'}`}>
              Stay Connected
            </span>
            <div className={`hidden lg:block h-[1px] w-12 bg-gray-300 transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transformOrigin: 'left' }}></div>
          </div> */}

          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] font-black tracking-tighter text-gray-900 leading-[1.05] mb-10">
            <div className="overflow-hidden pb-1">
              <span className={`inline-block transition-transform duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                Check out our
              </span>
            </div>
            <div className="overflow-hidden pb-1">
              <span className={`inline-block transition-transform duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Instagram</span> for
              </span>
            </div>
            <div className="overflow-hidden pb-3">
              <span className={`inline-block transition-transform duration-1000 delay-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                daily updates.
              </span>
            </div>
          </h2>

          {/* <p className={`text-base md:text-lg text-gray-500 font-medium max-w-md leading-relaxed mb-10 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Follow us behind the scenes to see our latest projects, creative process, and how we bring ideas to life.
          </p> */}

          {/* Huge Interactive Button */}
          <a 
            href="https://www.instagram.com/darkmedia.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn-group group flex items-center gap-5 transition-all duration-1000 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-gray-400 group-hover:via-gray-500 group-hover:to-gray-600 group-hover:shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-all duration-500">
              <svg className="w-6 h-6 md:w-8 md:h-8 hover-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 group-hover:tracking-wide transition-all duration-300">
              Follow Us Now
            </span>
          </a>

        </div>

      </section>
    </div>
  );
}
