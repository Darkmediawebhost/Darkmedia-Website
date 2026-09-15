"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ServicesSection() {
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
    <section ref={sectionRef} className="w-full py-32 bg-[#FAFAFA] relative overflow-hidden font-sans">
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float-img {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float 15s infinite ease-in-out; }
        .animate-float-slower { animation: float 20s infinite ease-in-out reverse; }
        .animate-float-img { animation: float-img 6s ease-in-out infinite; }
        .animate-float-img-delayed { animation: float-img 7s ease-in-out infinite 1s; }
      `}</style>
      
      {/* Animated Brand Color Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-[#2563EB]/10 rounded-full blur-[100px] animate-float-slow mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[10%] w-[45rem] h-[45rem] bg-[#2563EB]/5 rounded-full blur-[120px] animate-float-slower mix-blend-multiply"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50rem] h-[50rem] bg-[#2563EB]/10 rounded-full blur-[100px] animate-float-slow mix-blend-multiply" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 -mt-24">
        <div className="text-left max-w-3xl mb-16">
          <div className="overflow-hidden inline-block mb-6">
            <span 
              className={`inline-block py-1 px-3 rounded-full bg-gray-900 text-white text-sm font-semibold tracking-wider uppercase transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'translate-y-0' : 'translate-y-[120%]'
              }`}
            >
              What we Do
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 flex flex-wrap gap-x-3 gap-y-2">
            <span className="overflow-hidden inline-block pb-2">
              <span className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`} style={{ transitionDelay: '100ms' }}>Our</span>
            </span>
            <span className="overflow-hidden inline-block pb-2">
              <span className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`} style={{ transitionDelay: '200ms' }}>Core</span>
            </span>
            <span className="overflow-hidden inline-block pb-2">
              <span className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`} style={{ transitionDelay: '300ms' }}>Services</span>
            </span>
          </h2>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            
            {/* 1. Web Development (Tall) */}
            <Link href="/services/web-development"
              className={`group bg-[#EAEAEA]/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out flex-1 min-h-[350px] lg:flex-grow hover:-translate-y-1 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex justify-between items-start z-10 relative">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">Web<br/>Development</h3>
                <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </div>
              
              {/* 3D Solid Graphic: Stacked Disks */}
              <div className="absolute -right-4 top-1/2 -translate-y-[45%] w-[50%] max-w-[150px] group-hover:scale-105 transition-all duration-700 pointer-events-none animate-float-img">
                <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <linearGradient id="diskTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f9fafb"/><stop offset="100%" stopColor="#e5e7eb"/></linearGradient>
                    <linearGradient id="diskSide" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d1d5db"/><stop offset="100%" stopColor="#9ca3af"/></linearGradient>
                  </defs>
                  {/* Disk 1 (Bottom) */}
                  <path d="M15 105 A35 15 0 0 0 85 105 V115 A35 15 0 0 1 15 115 Z" fill="url(#diskSide)"/>
                  <ellipse cx="50" cy="105" rx="35" ry="15" fill="url(#diskTop)"/>
                  {/* Disk 2 */}
                  <path d="M15 80 A35 15 0 0 0 85 80 V90 A35 15 0 0 1 15 90 Z" fill="url(#diskSide)"/>
                  <ellipse cx="50" cy="80" rx="35" ry="15" fill="url(#diskTop)"/>
                  {/* Disk 3 */}
                  <path d="M15 55 A35 15 0 0 0 85 55 V65 A35 15 0 0 1 15 65 Z" fill="url(#diskSide)"/>
                  <ellipse cx="50" cy="55" rx="35" ry="15" fill="url(#diskTop)"/>
                  {/* Disk 4 (Top) */}
                  <path d="M15 30 A35 15 0 0 0 85 30 V40 A35 15 0 0 1 15 40 Z" fill="url(#diskSide)"/>
                  <ellipse cx="50" cy="30" rx="35" ry="15" fill="url(#diskTop)"/>
                </svg>
              </div>

              <div className="z-10 relative mt-auto pt-32 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-gray-600 font-medium">Custom, responsive, and high-performance websites built with cutting-edge technologies to drive conversions.</p>
              </div>
            </Link>

            {/* 2. SEO (Small) */}
            <Link href="/services/seo-analytics"
              className={`group bg-[#EAEAEA]/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out flex-1 min-h-[350px] hover:-translate-y-1 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex justify-between items-start z-10 relative">
                <h3 className="text-3xl font-bold text-gray-900 w-2/3 leading-tight">SEO &<br/>Analytics</h3>
              </div>
              <p className="text-gray-600 font-medium z-10 relative mt-8 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Data-driven strategies that increase visibility.</p>
              
              {/* Solid 3D Graphic: Staircase */}
              <div className="absolute -right-4 -bottom-6 w-[70%] max-w-[200px] group-hover:scale-105 transition-all duration-700 pointer-events-none drop-shadow-2xl animate-float-img-delayed">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="stairTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#f3f4f6" /></linearGradient>
                    <linearGradient id="stairLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e5e7eb" /><stop offset="100%" stopColor="#d1d5db" /></linearGradient>
                    <linearGradient id="stairRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d1d5db" /><stop offset="100%" stopColor="#9ca3af" /></linearGradient>
                  </defs>
                  <path d="M10 80 L30 70 L50 80 L30 90 Z" fill="url(#stairTop)" />
                  <path d="M10 80 v10 L30 100 v-10 Z" fill="url(#stairLeft)" />
                  <path d="M50 80 v10 L30 100 v-10 Z" fill="url(#stairRight)" />
                  <path d="M30 60 L50 50 L70 60 L50 70 Z" fill="url(#stairTop)" />
                  <path d="M30 60 v10 L50 80 v-10 Z" fill="url(#stairLeft)" />
                  <path d="M70 60 v10 L50 80 v-10 Z" fill="url(#stairRight)" />
                  <path d="M50 40 L70 30 L90 40 L70 50 Z" fill="url(#stairTop)" />
                  <path d="M50 40 v10 L70 60 v-10 Z" fill="url(#stairLeft)" />
                  <path d="M90 40 v10 L70 60 v-10 Z" fill="url(#stairRight)" />
                </svg>
              </div>
            </Link>

          </div>

          {/* Right Section (Grid) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* 3. Branding (Square) */}
            <Link href="/services/branding"
              className={`group bg-[#EAEAEA]/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out min-h-[350px] hover:-translate-y-1 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex justify-between items-start z-10 relative mb-4">
                <h3 className="text-3xl font-bold text-gray-900 w-2/3 leading-tight">Branding</h3>
                <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </div>
              <p className="text-gray-600 font-medium z-10 relative max-w-[200px] mt-4 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Distinctive visual identities and strategic positioning.</p>
              
              {/* 3D Graphic: Sphere in Donut */}
              <div className="absolute -right-4 -bottom-4 w-[90%] max-w-[280px] group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700 pointer-events-none drop-shadow-2xl animate-float-img">
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#9ca3af"/></radialGradient>
                    <linearGradient id="donutTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f3f4f6"/><stop offset="100%" stopColor="#e5e7eb"/></linearGradient>
                    <linearGradient id="donutSide" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d1d5db"/><stop offset="100%" stopColor="#9ca3af"/></linearGradient>
                    <linearGradient id="donutInner" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9ca3af"/><stop offset="100%" stopColor="#6b7280"/></linearGradient>
                  </defs>
                  <path d="M15 80 A45 20 0 0 0 105 80 V95 A45 20 0 0 1 15 95 Z" fill="url(#donutSide)"/>
                  <ellipse cx="60" cy="80" rx="45" ry="20" fill="url(#donutTop)"/>
                  <ellipse cx="60" cy="80" rx="25" ry="10" fill="url(#donutInner)"/>
                  <ellipse cx="60" cy="78" rx="15" ry="6" fill="#000" opacity="0.15"/>
                  <circle cx="60" cy="50" r="24" fill="url(#sphereGrad)"/>
                </svg>
              </div>
            </Link>

            {/* 4. Video Production (Square) */}
            <Link href="/services/video-production"
              className={`group bg-[#EAEAEA]/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out min-h-[350px] hover:-translate-y-1 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex justify-between items-start z-10 relative mb-4">
                <h3 className="text-3xl font-bold text-gray-900 w-2/3 leading-tight">Video<br/>Production</h3>
                <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </div>
              
              <div className="mt-auto z-10 relative pt-12 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <p className="text-gray-600 font-medium">Compelling visual storytelling and high-quality motion graphics.</p>
              </div>

              {/* 3D Solid Graphic: Floating Cubes */}
              <div className="absolute -right-8 -top-8 w-[85%] max-w-[260px] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 pointer-events-none drop-shadow-xl animate-float-img-delayed">
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f3f4f6"/></linearGradient>
                    <linearGradient id="cubeLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e5e7eb"/><stop offset="100%" stopColor="#d1d5db"/></linearGradient>
                    <linearGradient id="cubeRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d1d5db"/><stop offset="100%" stopColor="#9ca3af"/></linearGradient>
                  </defs>
                  {/* Big Cube */}
                  <path d="M50 70 L75 55 L100 70 L75 85 Z" fill="url(#cubeTop)"/>
                  <path d="M50 70 v25 L75 110 v-25 Z" fill="url(#cubeLeft)"/>
                  <path d="M100 70 v25 L75 110 v-25 Z" fill="url(#cubeRight)"/>
                  <path d="M75 85 L85 79 L85 104 L75 110 Z" fill="#6b7280" opacity="0.2"/>
                  
                  {/* Small floating cube */}
                  <path d="M20 30 L35 20 L50 30 L35 40 Z" fill="url(#cubeTop)"/>
                  <path d="M20 30 v15 L35 55 v-15 Z" fill="url(#cubeLeft)"/>
                  <path d="M50 30 v15 L35 55 v-15 Z" fill="url(#cubeRight)"/>
                </svg>
              </div>
            </Link>

            {/* 5. Social Media (Wide Black Card) */}
            <Link href="/services/social-media-management"
              className={`group bg-[#0A0A0A] backdrop-blur-xl border border-gray-800 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.2)] transition-all duration-700 ease-out sm:col-span-2 min-h-[350px] hover:-translate-y-1 block cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex justify-between items-start z-10 relative">
                <h3 className="text-3xl sm:text-5xl font-bold text-white leading-[1.1] w-3/4">
                  Engage your<br/>audience.
                </h3>
                <svg className="w-8 h-8 text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </div>
              
              <div className="z-10 relative mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <p className="text-gray-400 font-medium max-w-sm transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Strategic content creation, community management, and targeted campaigns.</p>
                <div className="flex gap-3">
                  {/* Portfolio Icon */}
                  <button aria-label="Visit our Portfolio" onClick={(e) => { e.preventDefault(); window.open("https://portfolio.darkmedia.tech/", "_blank"); }} className="px-4 py-2 rounded-full bg-white/10 flex items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-pointer text-white transform hover:-translate-y-1 group/btn shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <span className="text-sm font-semibold tracking-wide">Portfolio</span>
                  </button>
                  {/* Instagram Icon */}
                  <button aria-label="Visit our Instagram" onClick={(e) => { e.preventDefault(); window.open("https://www.instagram.com/darkmedia.tech", "_blank"); }} className="px-4 py-2 rounded-full bg-white/10 flex items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-pointer text-white transform hover:-translate-y-1 group/btn shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    <span className="text-sm font-semibold tracking-wide">Instagram</span>
                  </button>
                </div>
              </div>
              
              {/* Solid 3D Graphic: Isometric Block Cluster */}
              <div className="absolute -right-8 -bottom-16 w-[80%] max-w-[420px] group-hover:scale-105 transition-all duration-700 pointer-events-none drop-shadow-2xl animate-float-img">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="darkTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#374151"/><stop offset="100%" stopColor="#1f2937"/></linearGradient>
                    <linearGradient id="darkLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#111827"/><stop offset="100%" stopColor="#000000"/></linearGradient>
                    <linearGradient id="darkRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1f2937"/><stop offset="100%" stopColor="#111827"/></linearGradient>
                  </defs>
                  {/* Back Block */}
                  <path d="M80 40 L120 20 L160 40 L120 60 Z" fill="url(#darkTop)"/>
                  <path d="M160 40 v40 L140 50 v-40 Z" fill="url(#darkRight)"/>
                  {/* Left Block */}
                  <path d="M20 110 L60 90 L100 110 L60 130 Z" fill="url(#darkTop)"/>
                  <path d="M20 110 v50 L60 180 v-50 Z" fill="url(#darkLeft)"/>
                  <path d="M100 110 v50 L60 180 v-50 Z" fill="url(#darkRight)"/>
                  {/* Right Block */}
                  <path d="M100 90 L140 70 L180 90 L140 110 Z" fill="url(#darkTop)"/>
                  <path d="M100 90 v50 L140 160 v-50 Z" fill="url(#darkLeft)"/>
                  <path d="M180 90 v50 L140 160 v-50 Z" fill="url(#darkRight)"/>
                  {/* Top Block */}
                  <path d="M60 70 L100 50 L140 70 L100 90 Z" fill="url(#darkTop)"/>
                  <path d="M60 70 v40 L100 130 v-40 Z" fill="url(#darkLeft)"/>
                  <path d="M140 70 v40 L100 130 v-40 Z" fill="url(#darkRight)"/>
                </svg>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
