"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, createContext, useContext } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPContextValue {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
}

const GSAPContext = createContext<GSAPContextValue | null>(null);

export function useGSAPContext() {
  const context = useContext(GSAPContext);
  if (!context) {
    throw new Error("useGSAPContext must be used within GSAPProvider");
  }
  return context;
}

interface GSAPProviderProps {
  children: ReactNode;
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  useGSAP(() => {
    // Set default GSAP settings for smooth animations
    gsap.config({
      nullTargetWarn: false,
    });

    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
      markers: false,
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GSAPContext.Provider value={{ gsap, ScrollTrigger }}>
      {children}
    </GSAPContext.Provider>
  );
}

// Custom hook for scroll-triggered animations
export function useScrollAnimation() {
  const { gsap, ScrollTrigger } = useGSAPContext();

  const fadeInUp = (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(
      element,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 20%",
        },
        ...options,
      }
    );
  };

  const staggerFadeIn = (elements: string | Element[], staggerTime = 0.15) => {
    return gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: staggerTime,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
        },
      }
    );
  };

  const parallax = (element: string | Element, speed = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  const pinSection = (
    trigger: string | Element,
    animation: gsap.core.Timeline
  ) => {
    return ScrollTrigger.create({
      trigger,
      pin: true,
      start: "top top",
      end: "+=200%",
      scrub: 1,
      animation,
    });
  };

  return { fadeInUp, staggerFadeIn, parallax, pinSection, gsap, ScrollTrigger };
}
