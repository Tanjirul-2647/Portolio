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

    // Pin the image stationary in the viewport while container scrolls
    if (rect.bottom > 0 && rect.top < winHeight) {
      parallaxRef.current.style.transform = `translate3d(0, ${-rect.top}px, 0)`;
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
    const frame = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(frame);
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
