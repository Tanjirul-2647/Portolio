import React from "react";
import Image from "next/image";

interface Testimonial {
  author: string;
  role: string;
  avatar: string;
  logo: string;
  quote: string;
}

const testimonialsRail1: Testimonial[] = [
  {
    author: "Rick O'connell",
    role: "Gameplay Programmer, Microsoft",
    avatar: "/images/bronx/testimonial-1.png",
    logo: "/images/bronx/partner-7-1.svg",
    quote: "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that delight.",
  },
  {
    author: "EDDIE BROCK",
    role: "Design Manager, HBO",
    avatar: "/images/bronx/testimonial-2.png",
    logo: "/images/bronx/partner-5-1.svg",
    quote: "I HIRED TANJIRUL TO REDESIGN MY COMPANY'S WEBSITE. THE PROCESS WAS SMOOTH AND EASY. THEY LISTENED TO ALL MY NEEDS AND DELIVERED A SITE THAT EXCEEDED MY EXPECTATIONS.",
  },
  {
    author: "ANNE WEYING",
    role: "Cloud Sales Executive, AMD",
    avatar: "/images/bronx/testimonial-3.png",
    logo: "/images/bronx/partner-6-1.svg",
    quote: "WITH TANJIRUL'S USER-FRIENDLY DIGITAL PLATFORMS, OUR TEAM CAN NOW WORK SMARTER, NOT HARDER. INTERACTIVE REPORTS, METRICS, FORECASTING - ALL AUTOMATED IN ONE PLACE.",
  },
];

const testimonialsRail2: Testimonial[] = [
  {
    author: "Rick O'connell",
    role: "Gameplay Programmer, Microsoft",
    avatar: "/images/bronx/testimonial-4.png",
    logo: "/images/bronx/partner-7-1.svg",
    quote: "Working with Tanjirul redefined what we expected from a freelance partner. Fast communication, impeccable code quality, and truly world-class aesthetics.",
  },
  {
    author: "EDDIE BROCK",
    role: "Design Manager, HBO",
    avatar: "/images/bronx/testimonial-5.png",
    logo: "/images/bronx/partner-5-1.svg",
    quote: "The brutalist typography and dynamic microinteractions converted 40% higher on our primary landing page within the first 30 days of launch.",
  },
  {
    author: "ANNE WEYING",
    role: "Cloud Sales Executive, AMD",
    avatar: "/images/bronx/testimonial-6.png",
    logo: "/images/bronx/partner-6-1.svg",
    quote: "From Figma sketches to a lightning-fast Next.js production site in record time. We could not have asked for a smoother collaboration.",
  },
];

export function TestimonialsSection() {
  const rail1 = [...testimonialsRail1, ...testimonialsRail1, ...testimonialsRail1];
  const rail2 = [...testimonialsRail2, ...testimonialsRail2, ...testimonialsRail2];

  return (
    <section className="testimonial-sec" id="testimonials">
      <div className="section-header3">
        <h3 className="title">
          <span>TRUSTED BY</span>
          <span>INTERNATIONAL BRANDS</span>
        </h3>
      </div>

      <div className="testimonial-track-wrap">
        {/* Rail 1: Leftward */}
        <div className="testimonial-track track-left">
          {rail1.map((item, idx) => (
            <div key={`r1-${idx}`} className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-author-box">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={56}
                    height={56}
                  />
                  <div className="testimonial-author-content">
                    <h4>{item.author}</h4>
                    <h5>{item.role}</h5>
                  </div>
                </div>

                <div className="testimonial-logo">
                  <Image
                    src={item.logo}
                    alt="Brand logo"
                    width={80}
                    height={28}
                  />
                </div>
              </div>

              <div className="testimonial-content">
                <p>&quot;{item.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rail 2: Rightward */}
        <div className="testimonial-track track-right">
          {rail2.map((item, idx) => (
            <div key={`r2-${idx}`} className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-author-box">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={56}
                    height={56}
                  />
                  <div className="testimonial-author-content">
                    <h4>{item.author}</h4>
                    <h5>{item.role}</h5>
                  </div>
                </div>

                <div className="testimonial-logo">
                  <Image
                    src={item.logo}
                    alt="Brand logo"
                    width={80}
                    height={28}
                  />
                </div>
              </div>

              <div className="testimonial-content">
                <p>&quot;{item.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
