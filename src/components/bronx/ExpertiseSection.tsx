"use client";

import React, { useState } from "react";
import { ServiceDetailModal, ServiceItem } from "./ServiceDetailModal";

const services: ServiceItem[] = [
  {
    id: "app-design",
    count: "(1)",
    title: "APP DESIGN",
    description: "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
    price: "STARTS AT $3,999",
    leadParagraph: "App design is one of my high-end skills that I provide to create engaging user retention and effortless usability across mobile and desktop environments.",
    features: ["Web Application Design", "Responsive Layouts", "Interactive Design Systems"],
  },
  {
    id: "web-design",
    count: "(2)",
    title: "WEB DESIGN",
    description: "Polish animations and microinteractions that add delight. Every detail matters when sculpting the web.",
    price: "STARTS AT $4,499",
    leadParagraph: "Web designing is crafted to transform passive visitors into passionate brand advocates through editorial aesthetics and hyper-performant code.",
    features: ["Bespoke Digital Design", "Animation Effects & Triggers", "Sub-Second Page Loads"],
  },
  {
    id: "framer",
    count: "(3)",
    title: "FRAMER & NEXT.JS",
    description: "The process involves building virtual architectures, modern components, setting interactive states, and rendering high performance.",
    price: "STARTS AT $3,500",
    leadParagraph: "Framer and Next.js allow me to build lightning-fast, production-ready web experiences with clean component structures and smooth scrolling physics.",
    features: ["Framer Production Builds", "Next.js SSR & Server Actions", "Custom Canvas Integrations"],
  },
  {
    id: "photography-pro",
    count: "(4)",
    title: "PHOTOGRAPHY PRO",
    description: "With the click of a shutter, an image is imprinted that tells a story or makes a statement with lasting editorial prestige.",
    price: "STARTS AT $2,999",
    leadParagraph: "Photography elevates your visual narrative with high-contrast, editorial-grade direction that stands apart from standard corporate visuals.",
    features: ["Creative Direction & Styling", "High-Resolution Editorial Edits", "Digital & Print Optimization"],
  },
  {
    id: "motion-graphics",
    count: "(5)",
    title: "MOTION GRAPHICS",
    description: "The interplay between graphic elements, typography and movement opens up a world of creative possibilities.",
    price: "STARTS AT $3,999",
    leadParagraph: "Motion graphics breathe cinematic energy into typography and interface components, commanding attention and delighting viewers.",
    features: ["Interactive GSAP / CSS Motion", "3D Asset Modeling & Lighting", "Microinteraction Engineering"],
  },
];

interface ExpertiseSectionProps {
  onNavigate: (id: string) => void;
}

export function ExpertiseSection({ onNavigate }: ExpertiseSectionProps) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const row1 = services.slice(0, 3);
  const row2 = services.slice(3, 5);

  return (
    <section className="experience-sec" id="expertise">
      {/* Header */}
      <div className="section-header">
        <div className="left">
          <h3>
            <span>MY</span>
            <span>EXPERTISE</span>
          </h3>
        </div>
      </div>

      {/* Lists */}
      <div className="experience-list-wrap">
        <div className="experience-lists">
          {row1.map((service) => (
            <div
              key={service.id}
              className="experience-box interactive"
              onClick={() => setActiveService(service)}
            >
              <div className="experience-button-box">
                <button
                  type="button"
                  className="experience-button"
                  aria-label={`View details for ${service.title}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>

              <h4>
                <span>{service.count}</span>
                <span>{service.title}</span>
              </h4>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="experience-lists2">
          {row2.map((service) => (
            <div
              key={service.id}
              className="experience-box interactive"
              onClick={() => setActiveService(service)}
            >
              <div className="experience-button-box">
                <button
                  type="button"
                  className="experience-button"
                  aria-label={`View details for ${service.title}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>

              <h4>
                <span>{service.count}</span>
                <span>{service.title}</span>
              </h4>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ServiceDetailModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onNavigate={onNavigate}
      />
    </section>
  );
}
