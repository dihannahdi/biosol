"use client";

import { useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Microbe {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  hue: number;
  pulsePhase: number;
  connections: number[];
}

export function MicrobeVisualization() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const microbesRef = useRef<Microbe[]>([]);
  const progressRef = useRef(0);
  const animationRef = useRef<number>();

  const createMicrobes = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 15000), 60);
    const microbes: Microbe[] = [];

    for (let i = 0; i < count; i++) {
      microbes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 4 + Math.random() * 8,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        hue: 120 + Math.random() * 60, // Green to yellow-green
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
      });
    }

    microbesRef.current = microbes;
  }, []);

  const drawMicrobes = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, progress: number) => {
    ctx.clearRect(0, 0, width, height);

    const microbes = microbesRef.current;
    const time = Date.now() * 0.001;
    const fadeIn = Math.min(progress * 3, 1);

    // Update and draw connections first
    const connectionDistance = 100 + progress * 50;
    ctx.globalAlpha = fadeIn * 0.3;

    for (let i = 0; i < microbes.length; i++) {
      const m1 = microbes[i];
      for (let j = i + 1; j < microbes.length; j++) {
        const m2 = microbes[j];
        const dx = m2.x - m1.x;
        const dy = m2.y - m1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const alpha = (1 - distance / connectionDistance) * fadeIn * 0.4;
          ctx.strokeStyle = `hsla(${(m1.hue + m2.hue) / 2}, 70%, 50%, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(m1.x, m1.y);
          ctx.lineTo(m2.x, m2.y);
          ctx.stroke();
        }
      }
    }

    // Draw microbes
    for (const microbe of microbes) {
      // Update position
      microbe.x += microbe.vx * (1 + progress);
      microbe.y += microbe.vy * (1 + progress);

      // Bounce off edges
      if (microbe.x < 0 || microbe.x > width) microbe.vx *= -1;
      if (microbe.y < 0 || microbe.y > height) microbe.vy *= -1;

      // Calculate pulse
      const pulse = Math.sin(time * 2 + microbe.pulsePhase) * 0.3 + 1;
      const currentRadius = microbe.radius * pulse * (0.7 + progress * 0.5);

      // Draw glow
      ctx.globalAlpha = fadeIn * 0.2;
      const glowGradient = ctx.createRadialGradient(
        microbe.x,
        microbe.y,
        0,
        microbe.x,
        microbe.y,
        currentRadius * 3
      );
      glowGradient.addColorStop(0, `hsla(${microbe.hue}, 80%, 60%, 0.5)`);
      glowGradient.addColorStop(1, `hsla(${microbe.hue}, 80%, 60%, 0)`);
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(microbe.x, microbe.y, currentRadius * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw microbe body
      ctx.globalAlpha = fadeIn * 0.9;
      const bodyGradient = ctx.createRadialGradient(
        microbe.x - currentRadius * 0.3,
        microbe.y - currentRadius * 0.3,
        0,
        microbe.x,
        microbe.y,
        currentRadius
      );
      bodyGradient.addColorStop(0, `hsla(${microbe.hue}, 70%, 70%, 1)`);
      bodyGradient.addColorStop(0.5, `hsla(${microbe.hue}, 75%, 55%, 1)`);
      bodyGradient.addColorStop(1, `hsla(${microbe.hue}, 80%, 40%, 1)`);
      ctx.fillStyle = bodyGradient;
      ctx.beginPath();
      ctx.arc(microbe.x, microbe.y, currentRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw nucleus
      ctx.globalAlpha = fadeIn * 0.6;
      ctx.fillStyle = `hsla(${microbe.hue + 20}, 60%, 80%, 1)`;
      ctx.beginPath();
      ctx.arc(
        microbe.x - currentRadius * 0.2,
        microbe.y - currentRadius * 0.2,
        currentRadius * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Setup canvas
      const setupCanvas = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(dpr, dpr);
        createMicrobes(rect.width, rect.height);
      };

      setupCanvas();
      window.addEventListener("resize", setupCanvas);

      // Animation loop
      const animate = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          drawMicrobes(ctx, rect.width, rect.height, progressRef.current);
        }
        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      // Scroll progress
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });

      return () => {
        window.removeEventListener("resize", setupCanvas);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[60vh] lg:h-[80vh] overflow-hidden bg-gradient-to-b from-carbon-950 to-forest-950"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Kekuatan{" "}
            <span className="bg-gradient-to-r from-forest-400 to-microbe-400 bg-clip-text text-transparent">
              Mikroba
            </span>
          </h2>
          <p className="text-lg text-carbon-400 max-w-2xl mx-auto">
            Miliaran mikroba menguntungkan bekerja bersama untuk menciptakan ekosistem yang sehat dan produktif
          </p>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-carbon-950 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forest-950 to-transparent pointer-events-none" />
    </section>
  );
}
