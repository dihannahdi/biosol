"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Dynamic import for Vanta - helps with SSR
interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA: {
      CELLS: (config: Record<string, unknown>) => VantaEffect;
    };
  }
}

interface VantaCellsProps {
  className?: string;
  color1?: string;
  color2?: string;
  size?: number;
  speed?: number;
  scale?: number;
  minHeight?: number;
  minWidth?: number;
}

export function VantaCells({
  className = "",
  color1 = "#0d9488", // teal-600 - more visible
  color2 = "#14b8a6", // teal-500 - brighter
  size = 2.0,
  speed = 1.2,
  scale = 1.0,
  minHeight = 600,
  minWidth = 600,
}: VantaCellsProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !vantaRef.current || vantaEffect) return;

    // Dynamically load Vanta CELLS
    const loadVanta = async () => {
      try {
        const CELLS = (await import("vanta/dist/vanta.cells.min")).default;

        const effect = CELLS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight,
          minWidth,
          scale,
          scaleMobile: 1.0,
          color1: parseInt(color1.replace("#", ""), 16),
          color2: parseInt(color2.replace("#", ""), 16),
          size,
          speed,
        });

        setVantaEffect(effect);
      } catch (error) {
        console.warn("Failed to load Vanta CELLS effect:", error);
      }
    };

    loadVanta();
  }, [isClient, color1, color2, size, speed, scale, minHeight, minWidth, vantaEffect]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className={`absolute inset-0 ${className}`}
      style={{
        background: "linear-gradient(180deg, #022c22 0%, #064e3b 50%, #052e16 100%)",
      }}
    />
  );
}

export default VantaCells;
