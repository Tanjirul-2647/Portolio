"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="hero-sec hero-split-sec" id="hero">
      <div className="hero-split-container">
        {/* Left Column: Portrait Photo */}
        <div className="hero-image-col">
          <div className="hero-image-card">
            <Image
              src="/me2.jpeg"
              alt="Tanjirul Islam"
              width={600}
              height={750}
              priority
              sizes="(max-width: 768px) 92vw, 45vw"
              className="hero-portrait-img"
            />
          </div>
        </div>

        {/* Right Column: Name & Pure White Signature */}
        <div className="hero-text-col">
          <h1 className="hero-split-title">
            <span className="hero-word hero-word-1">TANJIRUL</span>
            <span className="hero-word hero-word-2">ISLAM</span>
          </h1>

          {/* Signature appearing right after the name finishes rendering */}
          <div className="hero-signature-box">
            <Image
              src="/signature.png"
              alt="Tanjirul Islam Signature"
              width={320}
              height={162}
              priority
              className="hero-signature-pic"
            />
          </div>
        </div>
      </div>

      {/* Hero Footer Bar */}
      <div className="hero-footer-wrap">
        <p>BASED IN CUMILLA</p>

        <div className="hero-footer-right">
          <a
            href="#work"
            className="link-with-line"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("work");
            }}
          >
            DIGITAL DESIGNER
          </a>
          <p>+ FULL-STACK DEVELOPER</p>
        </div>
      </div>
    </section>
  );
}
