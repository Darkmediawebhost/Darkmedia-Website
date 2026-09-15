"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AnubiSection from "./AnubiSection";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="w-full bg-[#050505] text-white relative overflow-hidden font-sans rounded-t-3xl mt-12 pb-12 pt-24 md:pt-32 border-t border-gray-900"
    >
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: scroll-marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .hover-float {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hover-float:hover {
          transform: translateY(-4px) translateX(4px);
        }
        .link-underline {
          position: relative;
        }
        .link-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        .link-underline:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gray-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top CTA Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-8">
              <span className={`inline-block text-xs font-bold tracking-[0.4em] text-gray-500 uppercase transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                Ready to start?
              </span>
            </div>
            
            <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-white group cursor-pointer relative z-20">
              <div className="overflow-hidden pb-2">
                <span className={`inline-block transition-transform duration-1000 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-500 ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                  Let&apos;s Work
                </span>
              </div>
              <div className="overflow-hidden pb-4 flex items-center gap-4 md:gap-8">
                <span className={`inline-block transition-transform duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] text-gray-500 group-hover:text-white transition-colors duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}>
                  Together
                </span>
                <div className={`hidden md:flex w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white text-black items-center justify-center transform group-hover:scale-110 group-hover:bg-gray-200 transition-all duration-500 ease-out delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                  <svg className="w-8 h-8 lg:w-12 lg:h-12 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </h2>
          </div>
        </div>

        {/* Thick Divider */}
        <div className={`w-full h-[1px] bg-gray-800 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} style={{ transformOrigin: 'left' }}></div>

        {/* Links & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Location & Contact */}
          <div className={`flex flex-col gap-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Location</h3>
              <p className="text-base md:text-lg font-medium text-gray-300 leading-relaxed max-w-[250px]">
                KOTICHENNAYA CIRCLE,<br />
                Nandi Gudda, Mangaluru,<br />
                Karnataka 575002
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Contact</h3>
              <div className="flex flex-col gap-3">
                <a href="tel:+919480889252" className="text-lg md:text-xl font-medium text-gray-300 hover:text-white link-underline w-fit">
                  +91 94808 89252
                </a>
                <a href="tel:+917483156464" className="text-lg md:text-xl font-medium text-gray-300 hover:text-white link-underline w-fit">
                  +91 74831 56464
                </a>
                <a href="mailto:info@darkmedia.tech" className="text-lg md:text-xl font-medium text-gray-300 hover:text-white link-underline w-fit">
                  info@darkmedia.tech
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div className={`flex flex-col gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Pages</h3>
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about-us' },
              { name: 'Works', href: '/projects' },
              { name: 'Contact', href: '/contact-us' }
            ].map((page) => (
              <Link key={page.name} href={page.href} className="text-lg font-medium text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit">
                {page.name}
              </Link>
            ))}
          </div>

          {/* Column 3: Services */}
          <div className={`flex flex-col gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Services</h3>
            {[
              { name: 'Web Development', href: '/services/web-development' },
              { name: 'Branding', href: '/services/branding' },
              { name: 'Video Production', href: '/services/video-production' },
              { name: 'SEO', href: '/services/seo-analytics' },
              { name: 'Social Media Management', href: '/services/social-media-management' }
            ].map((service) => (
              <Link key={service.name} href={service.href} className="text-lg font-medium text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit">
                {service.name}
              </Link>
            ))}
          </div>

          {/* Column 4: Socials & Portfolio */}
          <div className={`flex flex-col sm:flex-row gap-8 sm:gap-12 md:flex-col lg:flex-row transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Follow Us</h3>
              <a href="https://www.instagram.com/darkmedia.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white hover-float w-fit">
                Instagram
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Our Work</h3>
              <a href="https://portfolio.darkmedia.tech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white hover-float w-fit group">
                Portfolio
                <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors">
                  <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Marquee Divider */}
        <div className={`w-full border-y border-gray-800 py-5 overflow-hidden relative transition-all duration-1000 delay-700 group ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <Link href="/contact-us" className="animate-marquee whitespace-nowrap flex items-center cursor-pointer">
             {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center group/item">
                  <span className="text-sm font-bold tracking-[0.4em] text-gray-400 group-hover:text-white transition-colors duration-300 uppercase mx-8">
                    Available for new projects <span className="text-white/30 group-hover:text-white/80 transition-colors mx-2">—</span> Let&apos;s Talk
                  </span>
                  <svg className="w-3 h-3 text-gray-700 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>
                </div>
             ))}
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className={`text-sm text-gray-600 font-medium transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            © {new Date().getFullYear()} Dark Media. All rights reserved.
          </div>
          
        </div>

      </div>
    </footer>
  );
}
