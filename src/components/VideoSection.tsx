"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Autoplay
  const [isMuted, setIsMuted] = useState(true); // Usually autoplay requires mute initially
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect if you only want it to animate once
          // observer.disconnect();
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 py-16 sm:py-24 flex flex-col items-center relative z-10 overflow-hidden -mt-22">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[80%] h-[80%] max-w-4xl bg-blue-300/20 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

      <div className="w-full max-w-4xl text-center mb-12 sm:mb-16 relative px-2 sm:px-0">
        <h2 
          className={`text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience the Vision
        </h2>
        <p 
          className={`text-base sm:text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Immerse yourself in our latest production. We craft visual stories that leave a lasting impact.
        </p>
      </div>

      <div 
        className={`relative w-full max-w-[1400px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] group ring-1 ring-gray-900/10 bg-black transition-all duration-1000 delay-400 ease-out hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)] ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <video ref={videoRef}
          src="/Video/IMG_7797.MOV"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-auto object-cover aspect-video cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          onClick={togglePlay}
        />
        
        {/* Controls Overlay */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <button 
            onClick={togglePlay}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 transition-all text-white"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              // Pause Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            ) : (
              // Play Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="ml-1"><path d="M5 3.868v16.264c0 1.258 1.408 2.001 2.41 1.255l10.842-8.132a1.572 1.572 0 0 0 0-2.51L7.41 2.613C6.408 1.867 5 2.61 5 3.868z"/></svg>
            )}
          </button>
          
          <div className="w-[1px] h-6 md:h-8 bg-white/20 mx-1 md:mx-2"></div>
          
          <button 
            onClick={toggleMute}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 transition-all text-white"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              // Mute Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            ) : (
              // Volume Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
