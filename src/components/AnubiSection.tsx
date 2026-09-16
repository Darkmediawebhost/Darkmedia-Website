"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface Target {
  x: number;
  y: number;
}

const ParticleText = ({ texts }: { texts: string[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    const mouse = { x: -2000, y: -2000, radius: 100 };
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;
    let lastTime = performance.now();
    let autoRippleTime = 0;

    // Responsive interaction radius
    const updateRadius = () => {
      if (!canvas) return;
      mouse.radius = canvas.clientWidth < 640 ? 70 : 120;
    };
    updateRadius();

    // Mouse Move listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    // Touch Support for mobile & tablets
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      active: boolean;

      constructor(x: number, y: number) {
        this.x = x + (Math.random() * 80 - 40);
        this.y = y + (Math.random() * 80 - 40);
        this.size = Math.random() * 1.5 + 0.8;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 25 + 10;
        this.active = true;

        // Elegant gradient particles: bright white with slight ice/blue hues
        const tone = Math.floor(Math.random() * 55 + 200);
        const alpha = Math.random() * 0.45 + 0.55;
        this.color = `rgba(${tone}, ${tone}, ${Math.min(tone + 15, 255)}, ${alpha})`;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.active ? this.color : "rgba(140, 145, 160, 0.15)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.active ? this.size : this.size * 0.6, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(time: number, dt: number) {
        // Distance from cursor/touch
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Smooth subtle wave movement across the canvas
        const waveX = Math.sin(time * 0.0018 + this.baseY * 0.015) * 4;
        const waveY = Math.cos(time * 0.0018 + this.baseX * 0.015) * 4;

        if (distance < mouse.radius && distance > 0) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const pushX = forceDirectionX * force * this.density;
          const pushY = forceDirectionY * force * this.density;

          this.x -= pushX * 0.8;
          this.y -= pushY * 0.8;
        } else {
          // Return smoothly to target base position with subtle natural wave
          const targetX = this.baseX + (this.active ? waveX : waveX * 2);
          const targetY = this.baseY + (this.active ? waveY : waveY * 2);

          const returnSpeed = this.active ? 0.08 : 0.03;
          this.x += (targetX - this.x) * returnSpeed;
          this.y += (targetY - this.y) * returnSpeed;
        }
      }
    }

    const morphTo = (text: string) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      const lines = text.split("\n");
      const maxLineLength = Math.max(...lines.map((l) => l.length));

      // Precision responsive font-size calculation for perfect fitting across phones, tablets & desktop
      const isMobile = canvas.width < 640;
      const isTablet = canvas.width >= 640 && canvas.width < 1024;

      const widthConstraint = isMobile
        ? canvas.width / (maxLineLength * 0.72)
        : isTablet
        ? canvas.width / (maxLineLength * 0.62)
        : canvas.width / (maxLineLength * 0.52);

      const heightConstraint = canvas.height / (lines.length * 2.1);
      const maxLimit = isMobile ? 54 : isTablet ? 84 : 130;

      const fontSize = Math.max(Math.min(widthConstraint, heightConstraint, maxLimit), 28);

      ctx.font = `900 ${fontSize}px var(--font-bricolage), Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const lineHeight = fontSize * 1.14;
      // Position vertical center slightly above middle on mobile so CTA doesn't cover text
      const centerY = isMobile ? canvas.height * 0.40 : canvas.height * 0.44;
      const startY = centerY - ((lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, index) => {
        ctx.fillText(line.toUpperCase(), canvas.width / 2, startY + index * lineHeight);
      });

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const targets: Target[] = [];
      // Device-optimized particle sampling step (prevents lag on mobile!)
      // Larger step = fewer particles = butter-smooth 60fps on mobile
      const step = isMobile ? 6 : isTablet ? 5 : 4;

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          if (textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128) {
            targets.push({ x, y });
          }
        }
      }

      // Scramble for an organic cinematic transition
      particles.sort(() => Math.random() - 0.5);

      // Expand particle pool if needed
      while (particles.length < targets.length) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }

      // Prune excessive inactive particles to save memory and battery
      if (particles.length > targets.length * 1.4) {
        particles.splice(Math.floor(targets.length * 1.4));
      }

      // Assign target coordinates
      for (let i = 0; i < particles.length; i++) {
        if (i < targets.length) {
          particles[i].baseX = targets[i].x;
          particles[i].baseY = targets[i].y;
          particles[i].active = true;
        } else {
          particles[i].active = false;
          particles[i].baseX = Math.random() * canvas.width;
          particles[i].baseY = Math.random() * canvas.height;
        }
      }
    };

    const init = () => {
      if (!canvas) return;
      canvas.width = Math.floor(canvas.clientWidth);
      canvas.height = Math.floor(canvas.clientHeight);
      updateRadius();
      morphTo(texts[currentIndex]);
    };

    let startTime = performance.now();
    const animate = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const elapsedTime = currentTime - startTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Auto ambient ripple for mobile when idle so mobile screens always feel dynamic
      autoRippleTime += dt;
      if (mouse.x < -500 && canvas.width < 768) {
        const cx = canvas.width / 2 + Math.sin(autoRippleTime * 0.8) * (canvas.width * 0.28);
        const cy = canvas.height * 0.40 + Math.cos(autoRippleTime * 1.2) * (canvas.height * 0.15);
        // Virtual gentle touch
        const virtualRadius = 45;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const vdx = cx - p.x;
          const vdy = cy - p.y;
          const dist = Math.sqrt(vdx * vdx + vdy * vdy);
          if (dist < virtualRadius && dist > 0) {
            const f = (virtualRadius - dist) / virtualRadius;
            p.x -= (vdx / dist) * f * 2.5;
            p.y -= (vdy / dist) * f * 2.5;
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update(elapsedTime, dt);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animationFrameId = requestAnimationFrame(animate);

    // Morph words smoothly every 3.8 seconds
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      morphTo(texts[currentIndex]);
    }, 3800);

    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        init();
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
      clearTimeout(resizeTimer);
    };
  }, [texts]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block select-none"
    />
  );
};

export default function AnubiSection() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8">
      <section className="relative w-full h-[70vh] sm:h-[85vh] min-h-[460px] sm:min-h-[580px] max-h-[880px] bg-[#030303] text-white font-mono overflow-hidden flex flex-col justify-between p-5 sm:p-10 lg:p-12 mt-4 sm:mt-12 rounded-[2rem] sm:rounded-[3rem] mx-auto max-w-[1400px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Ambient Dark Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        {/* Futuristic Technical Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "center center",
          }}
        />

        {/* Sleek Corner Brackets */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 border-white/30 z-10 pointer-events-none rounded-tl-sm" />
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 border-white/30 z-10 pointer-events-none rounded-tr-sm" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 border-white/30 z-10 pointer-events-none rounded-bl-sm" />
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 border-white/30 z-10 pointer-events-none rounded-br-sm" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs tracking-[0.25em] text-white/40 uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white/60">DARK MEDIA Tech</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10px] text-white/30">
            {/* <span>[ SYSTEM: ACTIVE ]</span>
            <span>//</span>
            <span>INTERACTIVE ENGINE</span> */}
          </div>
        </div>

        {/* Center Interactive Particle Canvas */}
        <div className="absolute inset-0 z-0 cursor-crosshair touch-none sm:touch-auto">
          <ParticleText
            texts={[
              "DARK MEDIA",
              "WEB\nDEVELOPMENT",
              "BRANDING",
              "VIDEO\nPRODUCTION",
              "SEO &\nANALYTICS",
              "DIGITAL\nEXCELLENCE",
            ]}
          />
        </div>

        {/* CTA Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full mt-auto mb-4 sm:mb-8 pointer-events-none px-4">
          <div className="pointer-events-auto flex flex-col items-center group">
            <span className="text-white/50 text-[11px] sm:text-xs tracking-[0.35em] mb-4 sm:mb-6 font-medium uppercase transition-colors group-hover:text-white/80 text-center">
              Ready to innovate?
            </span>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 bg-[#313B4C] hover:bg-[#3D495E] active:scale-95 text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(49,59,76,0.45)] border border-white/20 transition-all duration-300 group"
            >
              <span>Start Your Project</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom HUD */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 sm:gap-6 border-t border-white/10 pt-3 sm:pt-4">
          <div className="text-[10px] sm:text-xs tracking-[0.15em] text-white/40 flex flex-wrap justify-center sm:justify-start gap-x-3 sm:gap-x-4 gap-y-1 uppercase">
            <span>WEB DEV</span>
            <span className="text-white/20">•</span>
            <span>BRANDING</span>
            <span className="text-white/20">•</span>
            <span>VIDEO PRODUCTION</span>
            <span className="text-white/20">•</span>
            <span>SEO & ANALYTICS</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-white/40 uppercase">
            {/* <span className="hidden sm:inline">EXPERIENCE</span> */}
            <div className="w-12 sm:w-16 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-white/60 animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
