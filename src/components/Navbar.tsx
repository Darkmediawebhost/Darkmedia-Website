"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { target } from "vgpu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { 
      name: "All Services", 
      href: "/services",
      subLinks: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Branding", href: "/services/branding" },
        { name: "Video Production", href: "/services/video-production" },
        { name: "SEO", href: "/services/seo-analytics" },
        { name: "Social Media Management", href: "/services/social-media-management" },
      ]
    },
    { name: "Projects", href: "https://portfolio.darkmedia.tech/",target:'_blank' },
    { name: "Blog", href: "/" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? "py-4" : "py-6"}`}>
        <div className={`mx-auto max-w-[1400px] px-6 md:px-8 transition-all duration-500 ease-in-out`}>
          <nav className={`w-full flex items-center justify-between transition-all duration-500 ${isScrolled && !isMobileMenuOpen ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 rounded-full px-6 py-3" : "bg-transparent px-0 py-0"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-[60]">
              <Image 
                src="/assets/Dark Media Logo - White.png" 
                alt="Dark Media Logo" 
                width={180} 
                height={60} 
                className="invert h-auto w-auto max-h-[36px] md:max-h-[40px] object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.subLinks && link.subLinks.some(sub => pathname === sub.href));
                return (
                  <div key={link.name} className="relative group py-4">
                    <Link 
                      href={link.href} 
                      target={(link as any).target}
                      className={`relative py-1 overflow-hidden inline-flex items-center gap-1.5 ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
                    >
                      <span className="relative z-10 transition-colors duration-300">{link.name}</span>
                      {link.subLinks && (
                        <svg className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                      )}
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transform origin-left transition-transform duration-300 ease-out ${isActive && !link.subLinks ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                    </Link>

                    {/* Desktop Dropdown */}
                    {link.subLinks && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                        <div className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgb(0,0,0,0.1)] rounded-2xl p-2 flex flex-col relative overflow-hidden">
                          {link.subLinks.map((subLink) => (
                            <Link 
                              key={subLink.name} 
                              href={subLink.href}
                              className="relative px-4 py-3 rounded-xl hover:bg-gray-100/50 transition-colors text-sm font-medium text-gray-600 hover:text-black group/item"
                            >
                              <span className="relative z-10 transition-transform duration-300 inline-block group-hover/item:translate-x-1">{subLink.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4 relative z-[60]">
              <Link href="/contact-us" className="hidden md:flex relative overflow-hidden group bg-[#11132d] text-white px-8 py-3 rounded-full text-sm font-medium shadow-[0_4px_14px_0_rgba(17,19,45,0.39)] hover:shadow-[0_6px_20px_rgba(17,19,45,0.23)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-10">Get a Free Quote</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              </Link>
              
              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full transition-colors ${isMobileMenuOpen ? "bg-gray-100" : "bg-white/50 backdrop-blur-sm border border-gray-200"}`}
                aria-label="Toggle mobile menu"
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span className={`w-full h-[2px] bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""}`}></span>
                  <span className={`w-full h-[2px] bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`w-full h-[2px] bg-black rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""}`}></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || (link.subLinks && link.subLinks.some(sub => pathname === sub.href));
              return (
                <div 
                  key={link.name} 
                  className={`overflow-hidden transition-all duration-500 delay-${(index + 1) * 100} ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  {link.subLinks ? (
                    <div>
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full flex items-center justify-between text-4xl sm:text-5xl font-bold tracking-tight ${isActive ? "text-black" : "text-gray-400 hover:text-black transition-colors"}`}
                      >
                        {link.name}
                        <svg className={`w-8 h-8 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="flex flex-col gap-5 pl-2 border-l-2 border-gray-100 ml-3">
                          {link.subLinks.map((subLink) => (
                            <Link 
                              key={subLink.name} 
                              href={subLink.href}
                              className="text-2xl sm:text-3xl font-semibold text-gray-500 hover:text-black transition-colors pl-4"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      target={(link as any).target}
                      className={`inline-block text-4xl sm:text-5xl font-bold tracking-tight ${isActive ? "text-black" : "text-gray-400 hover:text-black transition-colors"}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className={`mt-auto pt-12 transition-all duration-500 delay-700 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
            <Link href="/contact-us" className="inline-flex w-full justify-center relative overflow-hidden group bg-[#11132d] text-white px-8 py-4 rounded-full text-base font-medium mb-8 text-center">
              <span className="relative z-10">Get a Free Quote</span>
            </Link>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Contact Us</h4>
              <a href="tel:+919480889252" className="text-lg font-medium text-gray-900">+91 94808 89252</a>
              <a href="mailto:info@darkmedia.tech" className="text-lg font-medium text-gray-900">info@darkmedia.tech</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
