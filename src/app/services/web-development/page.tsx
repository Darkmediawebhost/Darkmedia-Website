import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SlideUpText } from "@/components/SlideUpText";
import { TextReveal } from "@/components/TextReveal";
import { ServiceHero } from "@/components/ServiceHero";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Web Development | Services | Mydbucket",
  description: "Web Development services by Mydbucket.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
      <Navbar />
      
      <main className="w-full flex-grow pt-24 md:pt-28 pb-8 md:pb-12">
        <ServiceHero 
          badgeText="Web Development"
          titleLine1="More Than Websites."
          titleLine2="Engineered for Your Business."
        />
      

        {/* 2. Service Description */}
        <section className="w-full px-4 sm:px-6 lg:px-8 pt-10 md:pt-20 pb-6 md:pb-10 max-w-[1400px] mx-auto">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-[#11132d] max-w-6xl">
            <TextReveal delay={0.1}>
              A great website does more than look good—it builds trust, drives engagement, and moves your business forward. At Dark Media, we create visually striking, high-performance websites tailored to your brand and business goals
            </TextReveal>
          </div>
        </section>
        
        {/* 3. 3-Block Customised Grid */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
             {
                title: "Built Around Your Business",
                desc: "We don't believe in one-size-fits-all websites. Every project is shaped around your brand, audience, and ambitions to create a digital experience that feels authentic and performs with purpose.",
                icon: (
                  <svg className="w-7 h-7 text-[#11132d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                )
              },
              {
                title: "Static Websites",
                desc: "Fast, focused, and built to impress. Our static websites combine clean design, responsive experiences, and strong performance to give your brand a professional digital presence.",
                icon: (
                  <svg className="w-7 h-7 text-[#11132d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                )
              },
              {
                title: "E-Commerce Solutions",
                desc: "Create a shopping experience people enjoy. From product discovery to checkout, we build intuitive eCommerce websites designed to make buying easier and help your business sell more.",
                icon: (
                  <svg className="w-7 h-7 text-[#11132d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                )
              }
            ].map((block, i) => (
              <div key={i} className="group flex flex-col bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-100 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(17,19,45,0.08)] hover:-translate-y-1 relative overflow-hidden">
                 
                 {/* Decorative background element on hover */}
                 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#11132d]/[0.03] to-transparent rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                 
                 <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#11132d] group-hover:border-[#11132d] group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-500 relative z-10">
                   {block.icon}
                 </div>
                 
                 <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#11132d] transition-colors duration-300 relative z-10">
                   <SlideUpText delay={0.1 * i}>{block.title}</SlideUpText>
                 </h3>
                 
                 <div className="text-base text-gray-600 font-medium leading-relaxed relative z-10">
                   {block.desc}
                 </div>
                 
              </div>
            ))}
          </div>
        </section>

        {/* 4. Messaging Section (Why work with us) */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            
            {/* Left: Video */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group">
                 <div className="absolute inset-0 bg-[#11132d]/10 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                 <video autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                 preload="none">
                  <source src="https://www.mydbucket.com/wp-content/uploads/2024/10/wave.mp4" type="video/mp4" />
                
          <track kind="captions" srcLang="en" label="English" default />
        </video>
              </div>
            </div>

            {/* Right: Content */}
          <div className="w-full lg:w-7/12 flex flex-col pt-4 lg:pt-0">
  {/* Eyebrow */}
  <div className="text-sm md:text-base font-semibold tracking-widest text-[#11132d] uppercase mb-4">
    <SlideUpText>Why Work With Us</SlideUpText>
  </div>

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
    <SlideUpText delay={0.1}>
      Why work with <br className="hidden md:block" />
      <span className="text-[#11132d]">Dark Media?</span>
    </SlideUpText>
  </h2>

  {/* Description */}
  <div className="text-base md:text-xl text-gray-600 font-medium leading-relaxed mb-8">
    <TextReveal delay={0.2}>
      Great brands are built with more than good design. They need clear
      thinking, creative direction, and a deep understanding of what makes
      your business unique. We bring strategy, creativity, and execution
      together to create work that connects with your audience and moves
      your business forward.
    </TextReveal>
  </div>

  {/* Benefits */}
  <div className="flex flex-col gap-4 mb-10">
    {[
      "Strategy built around your business and goals",
      "Creative work that connects with your audience",
      "Consistent, memorable, and meaningful brand experiences",
      "A reliable creative partner from idea to execution",
    ].map((item, index) => (
      <div key={index} className="flex items-center gap-4 group">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#11132d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#11132d] transition-colors duration-300">
          <svg
            className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#11132d] group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div className="text-base md:text-lg text-gray-800 font-medium flex-1 min-w-0">
          {item}
        </div>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div>
    <Link
      href="/contact-us"
      className="inline-flex items-center gap-3 bg-[#11132d] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 hover:shadow-[0_10px_30px_rgba(17,19,45,0.3)] hover:-translate-y-1 transition-all duration-300 group"
    >
      Let’s Work Together

      <svg
        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  </div>
</div>
          </div>
        </section>

        {/* 5. What We Offer (Accordion List) */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
            
            {/* Left Header Area */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-sm md:text-base font-semibold tracking-widest text-[#11132d] uppercase mb-4">
                  <SlideUpText>What We Offer</SlideUpText>
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                  <SlideUpText delay={0.1}>Digital solutions <br className="hidden md:block"/> engineered for <span className="text-[#11132d]">growth.</span></SlideUpText>
                </h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  <SlideUpText delay={0.2}>We combine strategic design with cutting-edge technology to build digital experiences that drive real, measurable business results.</SlideUpText>
                </p>
              </div>
            </div>

            {/* Right Accordion Area */}
            <div className="lg:w-2/3 flex flex-col gap-4">
              {[
                { title: "Corporate & Business Websites", desc: "We craft immersive, lightning-fast corporate websites designed to elevate your brand's digital presence and turn visitors into long-term partners." },
                { title: "E-Commerce Platforms", desc: "Drive sales with scalable, secure, and intuitive e-commerce experiences. We optimize the entire customer journey from product discovery to seamless checkout." },
                { title: "High-Conversion Landing Pages", desc: "Launch targeted, performance-driven landing pages that capture attention and maximize your campaign ROI through strategic design and compelling copy." },
                { title: "Website Maintenance & Support", desc: "Protect your digital investment. We provide continuous updates, robust security monitoring, and proactive support to keep your platform running flawlessly." },
                { title: "Technical SEO & Performance", desc: "Dominate search rankings. We build SEO right into the code, ensuring maximum visibility, blazing-fast load times, and a steady stream of organic traffic." },
              ].map((offer, i) => (
                <details key={i} className="group bg-white border border-gray-200 hover:border-[#11132d]/40 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none select-none outline-none">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-[#11132d] transition-colors">{offer.title}</h4>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-[#11132d] group-open:bg-[#11132d] text-[#11132d] group-hover:text-white group-open:text-white flex items-center justify-center transition-all duration-500 shrink-0 ml-4">
                      <div className="relative w-4 h-4 md:w-5 md:h-5">
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-current transform -translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-open:rotate-180"></span>
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-current transform -translate-y-1/2 rotate-90 group-open:rotate-180 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"></span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-base md:text-lg text-gray-600 font-medium leading-relaxed group-open:animate-fade-in-up">
                    {offer.desc}
                  </div>
                </details>
              ))}
            </div>
            
          </div>
        </section>

     

        {/* 7. Other Services */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-6 md:mt-10 max-w-[1400px] mx-auto bg-gray-50 rounded-[2.5rem] mb-10 md:mb-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#11132d] mb-12 text-center">
              <SlideUpText>Explore More Services</SlideUpText>
            </h2>
            <div className="w-full flex flex-col gap-4">
               {[
                { title: "Social Media Management", href: "/services/social-media-management" },
                { title: "Branding", href: "/services/branding" },
                { title: "Video Production", href: "/services/video-production" },
                { title: "SEO & ANALYTICS", href: "/services/seo-analytics" },
              ].map((service, i) => (
                 <Link 
                   key={i} 
                   href={service.href} 
                   className="flex justify-between items-center px-6 md:px-10 py-6 md:py-8 bg-white border border-gray-100 hover:border-[#11132d] hover:shadow-[0_10px_40px_-10px_rgba(17,19,45,0.15)] rounded-[1.5rem] transition-all duration-500 group"
                 >
                    <span className="text-2xl md:text-4xl font-medium text-gray-800 group-hover:text-[#11132d] transition-colors duration-500">
                      {service.title}
                    </span>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#11132d] group-hover:border-[#11132d] transition-colors duration-500 overflow-hidden relative shrink-0 ml-4">
                      <div className="flex relative items-center justify-center w-full h-full">
                        <span className="text-xl md:text-2xl text-gray-400 group-hover:text-white absolute transform transition-transform duration-500 group-hover:translate-x-[150%] group-hover:translate-y-[-150%]">↗</span>
                        <span className="text-xl md:text-2xl text-gray-400 group-hover:text-white absolute transform translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">↗</span>
                      </div>
                    </div>
                 </Link>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}
