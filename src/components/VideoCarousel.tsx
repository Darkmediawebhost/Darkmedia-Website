"use client";

import React, { useState, useRef, useEffect } from "react";
import { SlideUpText } from "@/components/SlideUpText";
import { TextReveal } from "@/components/TextReveal";

const videos = [
  "Ved1.mp4",
  "Ved3.mp4",
  "Ved4.mp4",
  "Ved5.mp4",
  "Ved6.mp4"
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setProgress(0);
  };

  const handleVideoEnded = () => {
    handleNext();
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentIndex) {
          video.currentTime = 0;
          setProgress(0);
          video.play().catch(e => console.log("Auto-play prevented", e));
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <section className="w-full py-12 md:py-24 overflow-hidden bg-[#11132d] text-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center mb-8 md:mb-16 px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
          <SlideUpText>Visuals That Speak</SlideUpText>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light">
          <TextReveal delay={0.1}>
            A glimpse into our cinematic universe.
          </TextReveal>
        </p>
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 flex flex-col items-center">
        
        {/* Carousel Area */}
        <div className="w-full flex justify-center items-center h-[380px] sm:h-[480px] md:h-[600px] lg:h-[700px] overflow-visible mt-2 md:mt-4 relative perspective-[1200px]">
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev} 
            className="absolute left-1 sm:left-4 md:left-12 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 hover:scale-110 group shadow-lg"
            aria-label="Previous Video"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <button 
            onClick={handleNext} 
            className="absolute right-1 sm:right-4 md:right-12 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 hover:scale-110 group shadow-lg"
            aria-label="Next Video"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Video Cards */}
          {videos.map((video, idx) => {
            let offset = idx - currentIndex;
            if (offset < -Math.floor(videos.length / 2)) offset += videos.length;
            if (offset > Math.floor(videos.length / 2)) offset -= videos.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            return (
              <div 
                key={video + idx}
                className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer
                  ${isCenter ? "z-20 opacity-100 scale-100" : "z-10 opacity-30 hover:opacity-60 scale-75"}
                  ${!isVisible ? "hidden" : ""}
                `}
                style={{
                  transform: `translateX(${offset * 105}%) ${isCenter ? "scale(1)" : "scale(0.85)"} ${!isCenter ? "rotateY(" + (-offset * 10) + "deg)" : ""}`,
                  filter: !isCenter ? "blur(3px)" : "none",
                  zIndex: isCenter ? 20 : 10 - Math.abs(offset)
                }}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(idx);
                }}
              >
                <div className={`w-[190px] sm:w-[240px] md:w-[320px] lg:w-[400px] aspect-[9/16] bg-black rounded-2xl md:rounded-[2rem] overflow-hidden relative border ${isCenter ? 'border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.15)]' : 'border-white/5 shadow-xl'} group`}>
                  <video 
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    preload="none"
                    src={`/Video/${video}`} 
                    muted={isMuted}
                    playsInline 
                    loop={false}
                    onEnded={isCenter ? handleVideoEnded : undefined}
                    onTimeUpdate={isCenter ? handleTimeUpdate : undefined}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {isCenter && (
                    <>
                      {/* Mute/Unmute Toggle on Active Video */}
                      <button 
                        onClick={toggleMute}
                        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-all border border-white/20 text-white hover:scale-110"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
                        ) : (
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                        )}
                      </button>

                      {/* Real Progress Bar */}
                      <div className="absolute bottom-0 left-0 h-1.5 md:h-2 bg-white/20 w-full z-20">
                        <div 
                          className="h-full bg-white transition-all duration-100 ease-linear" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      
                      {/* Top Gradient for contrast */}
                      <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none"></div>
                      
                      {/* Bottom Gradient for contrast */}
                      <div className="absolute bottom-0 inset-x-0 h-24 md:h-32 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
                    </>
                  )}

                  {!isCenter && <div className="absolute inset-0 bg-[#11132d]/40 pointer-events-none"></div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
