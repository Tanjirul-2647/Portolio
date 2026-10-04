import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="about-sec" id="about">
      {/* Header */}
      <div className="section-header2">
        <h3 className="title">
          MORE ABOUT TANJIRUL
        </h3>
      </div>

      {/* Content */}
      <div className="about-bottom-content-wrap">
        <div className="img-box">
          <Image
            src="/me2.jpeg"
            alt="Tanjirul Islam portrait"
            width={600}
            height={750}
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <div className="about-bottom-content">
          <h4>
            I&apos;M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST.
            <br />
            MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY,
            <br />
            AND INTUITIVE DESIGN SHINES THROUGH IN MY WORK.
          </h4>

          <p>
            I&apos;m on the cutting edge of no-code and modern full-stack tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled. I thrive on finding <i>&quot;unexpected solutions&quot;</i> and believe that with the right perspective, design can elevate the human experience.
          </p>
        </div>
      </div>
    </section>
  );
}
