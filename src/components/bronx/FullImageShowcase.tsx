"use client";

import React from "react";
import Image from "next/image";

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
  return (
    <section className="full-image-sec full-width-locked" id={id}>
      <div
        className="full-image-box"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
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
