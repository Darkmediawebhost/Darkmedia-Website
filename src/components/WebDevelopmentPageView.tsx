import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SlideUpText } from "@/components/SlideUpText";
import { TextReveal } from "@/components/TextReveal";
import { ServiceHero } from "@/components/ServiceHero";
import SmoothVideo from "@/components/SmoothVideo";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import type { WebDevelopmentContent } from "@/lib/web-development-locations";

const cardIcons = [
  <svg key="business" className="w-7 h-7 text-[#11132d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>,
  <svg key="code" className="w-7 h-7 text-[#11132d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
  </svg>,
  <svg key="commerce" className="w-7 h-7 text-[#11132d] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
  </svg>,
];

function Accordion({ items, titleTag = "h4" }: { items: { title: string; desc: string }[]; titleTag?: "h3" | "h4" }) {
  const Title = titleTag;
  return (
    <div className="lg:w-2/3 flex flex-col gap-4">
      {items.map((offer) => (
        <details key={offer.title} className="group bg-white border border-gray-200 hover:border-[#11132d]/40 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none select-none outline-none">
            <Title className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-[#11132d] transition-colors">{offer.title}</Title>
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
  );
}

export default function WebDevelopmentPageView({
  content,
  jsonLd,
}: {
  content: WebDevelopmentContent;
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
}) {
  const OfferEyebrow = content.offerEyebrowTag;
  const OfferTitle = content.offerTitleTag;

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
      <JsonLd data={jsonLd} />
      <Navbar />

      <main className="w-full flex-grow pt-24 md:pt-28 pb-8 md:pb-12">
        {content.breadcrumb && (
          <nav aria-label="Breadcrumb" className="w-full max-w-[95%] lg:max-w-[90%] mx-auto mb-5 md:mb-6 px-1">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-gray-500">
              {content.breadcrumb.map((item, index) => {
                const last = index === content.breadcrumb!.length - 1;
                return (
                  <li key={item.path} className="flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true" className="text-gray-300">/</span>}
                    {last ? (
                      <span className="text-[#11132d]">{item.name}</span>
                    ) : (
                      <Link href={item.path} className="hover:text-[#11132d] transition-colors">
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <ServiceHero
          badgeText={content.badgeText}
          titleLine1={content.titleLine1}
          titleLine2={content.titleLine2}
          compactTitle={content.compactTitle}
        />

        <section className="w-full px-4 sm:px-6 lg:px-8 pt-10 md:pt-20 pb-6 md:pb-10 max-w-[1400px] mx-auto">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-[#11132d] max-w-6xl">
            <TextReveal delay={0.1}>{content.intro}</TextReveal>
          </div>
          {content.introLinks && (
            <p className="mt-8 text-base md:text-lg text-gray-600 font-medium flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/services/web-development" className="text-[#11132d] underline underline-offset-4 decoration-gray-300 hover:decoration-[#11132d]">
                Web Development Services
              </Link>
              <Link href="/about-us" className="text-[#11132d] underline underline-offset-4 decoration-gray-300 hover:decoration-[#11132d]">
                About Dark Media Tech
              </Link>
              <Link href="/services" className="text-[#11132d] underline underline-offset-4 decoration-gray-300 hover:decoration-[#11132d]">
                All Services
              </Link>
              <Link href="/contact-us" className="text-[#11132d] underline underline-offset-4 decoration-gray-300 hover:decoration-[#11132d]">
                Contact our team
              </Link>
            </p>
          )}
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {content.cards.map((block, i) => (
              <div key={block.title} className="group flex flex-col bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-100 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(17,19,45,0.08)] hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#11132d]/[0.03] to-transparent rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#11132d] group-hover:border-[#11132d] group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-500 relative z-10">
                  {cardIcons[i]}
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

        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-[#11132d]/10 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                <SmoothVideo
                  src="https://www.mydbucket.com/wp-content/uploads/2024/10/wave.mp4"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col pt-4 lg:pt-0">
              <div className="text-sm md:text-base font-semibold tracking-widest text-[#11132d] uppercase mb-4">
                <SlideUpText>{content.whyEyebrow}</SlideUpText>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                <SlideUpText delay={0.1}>
                  {content.whyTitleLead} <br className="hidden md:block" />
                  <span className="text-[#11132d]">{content.whyTitleAccent}</span>
                </SlideUpText>
              </h2>
              <div className="text-base md:text-xl text-gray-600 font-medium leading-relaxed mb-8">
                <TextReveal delay={0.2}>{content.whyBody}</TextReveal>
              </div>
              <div className="flex flex-col gap-4 mb-10">
                {content.whyPoints.map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#11132d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#11132d] transition-colors duration-300">
                      <svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#11132d] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-base md:text-lg text-gray-800 font-medium flex-1 min-w-0">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 bg-[#11132d] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 hover:shadow-[0_10px_30px_rgba(17,19,45,0.3)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  Let’s Work Together
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <OfferEyebrow className="text-sm md:text-base font-semibold tracking-widest text-[#11132d] uppercase mb-4">
                  <SlideUpText>{content.offerEyebrow}</SlideUpText>
                </OfferEyebrow>
                <OfferTitle className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                  <SlideUpText delay={0.1}>
                    {content.offerTitleLead} <br className="hidden md:block" /> {content.offerTitleRest} <span className="text-[#11132d]">{content.offerTitleAccent}</span>
                  </SlideUpText>
                </OfferTitle>
                <div className="text-lg text-gray-600 font-medium leading-relaxed">
                  <SlideUpText delay={0.2}>{content.offerBody}</SlideUpText>
                </div>
              </div>
            </div>
            <Accordion items={content.offers} />
          </div>
        </section>

        {content.faqs && (
          <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-[1400px] mx-auto" aria-labelledby="web-dev-faq-heading">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <div className="text-sm md:text-base font-semibold tracking-widest text-[#11132d] uppercase mb-4">
                    <SlideUpText>Questions</SlideUpText>
                  </div>
                  <h2 id="web-dev-faq-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                    <SlideUpText delay={0.1}>Frequently Asked Questions</SlideUpText>
                  </h2>
                  <div className="text-lg text-gray-600 font-medium leading-relaxed">
                    <SlideUpText delay={0.2}>Practical answers about scope, timing, and how a project with Dark Media Tech actually runs.</SlideUpText>
                  </div>
                </div>
              </div>
              <Accordion
                titleTag="h3"
                items={content.faqs.map((faq) => ({ title: faq.question, desc: faq.answer }))}
              />
            </div>
          </section>
        )}

        {content.localPages && content.localPages.length > 0 && (
          <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-[1400px] mx-auto" aria-labelledby="local-service-pages">
            <h2 id="local-service-pages" className="text-3xl md:text-5xl font-bold tracking-tight text-[#11132d] mb-4">
              <SlideUpText>{content.localPagesHeading ?? "Services in Mangalore and Mangaluru"}</SlideUpText>
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mb-8">
              {content.localPagesIntro ?? "The studio is in Mangaluru. Each page below covers a service people in the city search for: websites, software, marketing, branding, and video."}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {content.localPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="flex items-center justify-between gap-4 h-full px-5 py-4 bg-gray-50 border border-gray-100 hover:border-[#11132d] hover:bg-white rounded-2xl transition-colors"
                  >
                    <span className="text-base md:text-lg font-medium text-gray-800">{page.title}</span>
                    <span aria-hidden="true" className="text-[#11132d] shrink-0">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-6 md:mt-10 max-w-[1400px] mx-auto bg-gray-50 rounded-[2.5rem] mb-10 md:mb-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#11132d] mb-12 text-center">
              <SlideUpText>Explore More Services</SlideUpText>
            </h2>
            <div className="w-full flex flex-col gap-4">
              {content.services.map((service) => (
                <Link
                  key={service.href}
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
