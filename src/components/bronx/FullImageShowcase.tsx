"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";

interface FullImageShowcaseProps {
  src: string;
  alt: string;
  id?: string;
  priority?: boolean;
}

export function FullImageShowcase({
  src,
  alt,
  id,
  priority = false,
}: FullImageShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const updateParallax = () => {
    if (!containerRef.current || !parallaxRef.current) return;
    if (typeof window === "undefined" || window.innerWidth > 768) return;

    const rect = containerRef.current.getBoundingClientRect();
    const winHeight = window.innerHeight;

    // Only calculate when visible or within proximity to the viewport
    if (rect.bottom > -60 && rect.top < winHeight + 60) {
      const progress = (winHeight - rect.top) / (winHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      // Max travel range inside 150% height layer
      const maxTravel = rect.height * 0.35;
      const translateY = (clamped - 0.5) * maxTravel;
      parallaxRef.current.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    }
  };

  useLenis(updateParallax);

  useEffect(() => {
    const handleScroll = () => {
      updateParallax();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="full-image-sec full-width-locked" id={id} ref={containerRef}>
      <div
        className="full-image-box"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        {/* Hardware-accelerated mobile parallax layer */}
        <div
          ref={parallaxRef}
          className="full-image-mobile-parallax"
          style={{
            backgroundImage: `url(${src})`,
          }}
          aria-hidden="true"
        />

        {/* Next.js Image for metadata, preloading and SEO */}
        <div style={{ display: "none" }}>
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            priority={priority}
          />
        </div>
        <div className="full-image-overlay" />
      </div>
    </section>
  );
}
