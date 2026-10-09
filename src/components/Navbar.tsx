"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let scrolled = false;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 20;
        if (next !== scrolled) {
          scrolled = next;
          setIsScrolled(next);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks: {
    name: string;
    href: string;
    target?: string;
    subLinks?: { name: string; href: string }[];
  }[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Services",
      href: "/services",
      subLinks: [
        { name: "All Services", href: "/services" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Branding", href: "/services/branding" },
        { name: "Video Production", href: "/services/video-production" },
        { name: "SEO", href: "/services/seo-analytics" },
        { name: "Social Media", href: "/services/social-media-management" },
      ],
    },
    { name: "Projects", href: "https://portfolio.darkmedia.tech/", target: "_blank" },
    { name: "Contact", href: "/contact-us" },
  ];

  const linkIsActive = (href: string, subLinks?: { href: string }[]) =>
    pathname === href || Boolean(subLinks?.some((sub) => pathname === sub.href || pathname.startsWith(`${sub.href}/`)));

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 flex w-full justify-center transition-[padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"}`}>
        <div className={`w-full transition-[max-width,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isScrolled && !isMobileMenuOpen ? "max-w-5xl px-3 sm:px-6" : "max-w-[1400px] px-4 sm:px-6 md:px-8"}`}>
        <nav
          className={`flex w-full items-center justify-between gap-3 border-0 transition-[background-color,box-shadow,border-radius,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            isScrolled && !isMobileMenuOpen
              ? "rounded-full bg-white/90 px-3 py-2 shadow-[0_12px_40px_rgba(17,19,45,0.1)] backdrop-blur-2xl sm:px-6 sm:py-2.5"
              : "rounded-none bg-transparent px-0 py-0 shadow-none"
          }`}
        >
          <Link href="/" className="group relative z-[60] flex shrink-0 items-center">
            <Image
              src="/assets/Dark Media Logo - White.png"
              alt="Dark Media Tech logo"
              width={180}
              height={60}
              className={`h-auto w-auto invert object-contain transition-all duration-500 ${isScrolled ? "max-h-[28px] sm:max-h-[32px]" : "max-h-[34px] sm:max-h-[40px] group-hover:scale-105"}`}
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium xl:gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = linkIsActive(link.href, link.subLinks);
              return (
                <div key={link.name} className="group relative py-3">
                  <Link
                    href={link.href}
                    target={link.target}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    className={`relative inline-flex items-center gap-1.5 overflow-hidden py-1 ${
                      isActive ? "font-semibold text-black" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <span className="relative z-10 transition-colors duration-300">{link.name}</span>
                    {link.subLinks && (
                      <svg className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-black transition-transform duration-300 ease-out ${isActive && !link.subLinks ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </Link>

                  {link.subLinks && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-3 pt-2 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="rounded-2xl border-0 bg-white/95 p-2 shadow-[0_20px_40px_rgba(17,19,45,0.12)] backdrop-blur-xl">
                        {link.subLinks.map((subLink) => {
                          const subActive = pathname === subLink.href || (subLink.href !== "/services" && pathname.startsWith(`${subLink.href}/`));
                          return (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className={`group/item block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                                subActive ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-100/70 hover:text-black"
                              }`}
                            >
                              <span className="inline-block transition-transform duration-300 group-hover/item:translate-x-1">{subLink.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative z-[60] flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact-us"
              className="group relative hidden overflow-hidden rounded-full bg-[#11132d] px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(17,19,45,0.39)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(17,19,45,0.23)] md:inline-flex"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border-0 bg-white/90 shadow-[0_6px_20px_rgba(17,19,45,0.08)] transition-transform duration-300 lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="relative block h-3.5 w-4">
                <span className={`absolute left-0 h-[2px] w-full rounded-full bg-[#11132d] transition-all duration-300 ${isMobileMenuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-[2px] w-full rounded-full bg-[#11132d] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 h-[2px] w-full rounded-full bg-[#11132d] transition-all duration-300 ${isMobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#11132d]/30 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        inert={isMobileMenuOpen ? undefined : true}
        className={`fixed inset-x-3 top-[4.5rem] z-40 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-3xl border-0 bg-white p-3 shadow-[0_20px_50px_rgba(17,19,45,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = linkIsActive(link.href, link.subLinks);
            if (link.subLinks) {
              return (
                <div key={link.name}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-semibold ${
                      isActive ? "bg-gray-100 text-[#11132d]" : "text-gray-700"
                    }`}
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.name}
                    <svg className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-80 py-1" : "max-h-0"}`}>
                    {link.subLinks.map((subLink) => {
                      const subActive = pathname === subLink.href || (subLink.href !== "/services" && pathname.startsWith(`${subLink.href}/`));
                      return (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${
                            subActive ? "text-[#11132d]" : "text-gray-500"
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className={`rounded-2xl px-4 py-3 text-base font-semibold ${
                  isActive ? "bg-[#11132d] text-white" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="mt-2 border-t border-gray-100 px-4 pb-2 pt-4">
          <Link href="/contact-us" className="mb-4 flex w-full items-center justify-center rounded-full bg-[#11132d] px-5 py-3 text-sm font-medium text-white">
            Get a Free Quote
          </Link>
          <a href="tel:+919480889252" className="block text-sm font-medium text-gray-900">+91 94808 89252</a>
          <a href="mailto:info@darkmedia.tech" className="mt-1 block text-sm font-medium text-gray-500">info@darkmedia.tech</a>
        </div>
      </div>
    </>
  );
}
