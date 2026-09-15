"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const ParticleText = ({ texts }: { texts: string[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000, radius: 120 };
    let currentIndex = 0;
    let intervalId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

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
        this.x = x + (Math.random() * 100 - 50); // Initial scatter
        this.y = y + (Math.random() * 100 - 50);
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 40) + 5;
        this.active = true;
        
        const c = Math.floor(Math.random() * 55 + 200); 
        this.color = `rgba(${c}, ${c}, ${c}, ${Math.random() * 0.5 + 0.5})`;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.active ? this.color : `rgba(150, 150, 150, 0.2)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.active ? this.size : this.size * 0.5, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(time: number) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        // Add wave movement
        let waveX = Math.sin(time * 0.002 + this.baseY * 0.02) * 5;
        let waveY = Math.cos(time * 0.002 + this.baseX * 0.02) * 5;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Add some random drift to inactive particles
          if (!this.active) {
            waveX += Math.sin(time * 0.001 + this.x) * 20;
            waveY += Math.cos(time * 0.001 + this.y) * 20;
          }
          if (this.x !== this.baseX) {
            let dx = this.x - (this.baseX + waveX);
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - (this.baseY + waveY);
            this.y -= dy / 15;
          }
        }
      }
    }

    const morphTo = (text: string) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      
      const lines = text.split('\n');
      const maxLineLength = Math.max(...lines.map(l => l.length));
      
      // Responsive font size calculation (constrained by width and height)
      let fontSize = Math.min(
        canvas.width / (maxLineLength * 0.55), 
        canvas.height / (lines.length * 1.5), 
        140
      );
      
      ctx.font = `bold ${fontSize}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const lineHeight = fontSize * 1.1;
      const startY = canvas.height / 2 - (lines.length - 1) * lineHeight / 2;
      
      lines.forEach((line, index) => {
         ctx.fillText(line.toUpperCase(), canvas.width / 2, startY + index * lineHeight);
      });

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const targets = [];
      const step = canvas.width < 768 ? 3 : 5; 
      
      for (let y = 0, y2 = textCoordinates.height; y < y2; y += step) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += step) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            targets.push({x, y});
          }
        }
      }

      // Scramble existing particles for a crossing effect
      particles.sort(() => Math.random() - 0.5);

      // Match particles to targets
      while (particles.length < targets.length) {
         particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }

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
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      morphTo(texts[currentIndex]);
    };

    let startTime = Date.now();
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let time = Date.now() - startTime;
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update(time);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    setTimeout(() => {
      init();
      animate();
      
      // Start morphing interval
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        morphTo(texts[currentIndex]);
      }, 3500); // Morph every 3.5 seconds
    }, 100);

    const handleResize = () => {
      init();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, [texts]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full block" 
      style={{ filter: 'blur(0.3px)' }} 
    />
  );
};

export default function AnubiSection() {
  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[500px] sm:min-h-[600px] bg-[#030303] text-white font-mono overflow-hidden flex flex-col justify-between p-4 sm:p-12 mt-6 sm:mt-12 rounded-[1.5rem] sm:rounded-[3rem] mx-auto max-w-[1400px]">
      
      {/* Subtle background gradient / glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none mix-blend-overlay" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '10vw 10vw',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 border-t border-l border-white/20 z-10 pointer-events-none"></div>
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 border-t border-r border-white/20 z-10 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 border-b border-l border-white/20 z-10 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-white/20 z-10 pointer-events-none"></div>

      {/* Top HUD */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start text-xs tracking-[0.2em] text-white/40 uppercase gap-2">
        {/* <div className="max-w-[200px] sm:max-w-none leading-relaxed">[ C / 01 ] &nbsp;&nbsp; EXPERIENZE DIGITALI / ENGINEERING</div> */}
        <div className="hidden sm:block">DARK MEDIA Tech</div>
      </div>

      {/* Center Canvas / Content */}
      <div className="absolute inset-0 z-0 cursor-crosshair">
        <ParticleText texts={[
          "DARK MEDIA",
          "WEB\nDEVELOPMENT",
          "BRANDING",
          "VIDEO\nPRODUCTION",
          "SEO &\nANALYTICS",
          "DARKMEDIA\nTECH"
        ]} />
      </div>

      {/* Left HUD (Rotated) */}
     
      {/* CTA Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full mt-auto mb-8 sm:mb-16 pointer-events-none px-4">
        <div className="pointer-events-auto flex flex-col items-center group cursor-pointer">
          <span className="text-white/40 text-xs sm:text-sm tracking-[0.4em] mb-6 sm:mb-8 font-medium transition-colors group-hover:text-white/70 text-center">
            Ready to innovate?
          </span>
          
          <Link href="/contact-us" className="inline-flex items-center gap-3 bg-[#11132d] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 hover:shadow-[0_10px_30px_rgba(17,19,45,0.3)] hover:-translate-y-1 transition-all duration-300 group">
            Start Your Project 
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8">
        <div className="max-w-xl">
        
          <div className="text-xs tracking-[0.15em] text-white/40 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 uppercase">
            <span>WEB DEVELOPMENT</span>
            <span className="text-white/20">/</span>
            <span>BRANDING</span>
            <span className="text-white/20">/</span>
            <span>VIDEO PRODUCTION</span>
            <span className="text-white/20">/</span>
            <span>SEO & ANALYTICS</span>
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-2 sm:gap-3 text-xs tracking-[0.2em] text-white/50 uppercase w-full md:w-auto mt-4 md:mt-0">
          <div className="w-16 h-[1px] bg-white/10 mt-1 relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-white/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
