"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  client: string;
  services: string[];
  liveUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: "hella-magic",
    title: "Hella magic store",
    subtitle: "Business",
    date: "2024",
    image: "/images/bronx/work-1.jpg",
    description: "A high-conversion headless e-commerce store with brutalist typography, dynamic filtering, and sub-second page transitions engineered for a global luxury brand.",
    client: "Hella Magic Inc.",
    services: ["E-Commerce Design", "Next.js Full-Stack", "Stripe API", "Micro-Interactions"],
    liveUrl: "https://wpriverthemes.com/bronx/work-detail-light/",
  },
  {
    id: "raven-folio",
    title: "Raven Folio",
    subtitle: "Portfolio",
    date: "2023",
    image: "/images/bronx/work-2.jpg",
    description: "An editorial portfolio designed for an architectural photographer in Milan, focusing on negative space, fluid layout grids, and optimized asset delivery.",
    client: "Studio Raven",
    services: ["Brand Identity", "Editorial Web Design", "WebGL Effects", "Next.js"],
    liveUrl: "https://wpriverthemes.com/bronx/work-detail1-light/",
  },
  {
    id: "xiong-wall",
    title: "Xiong Wall",
    subtitle: "Marketplace",
    date: "2023",
    image: "/images/bronx/work-3.jpg",
    description: "A decentralized digital art marketplace connecting contemporary artists with collectors across Asia and North America with real-time bidding.",
    client: "Xiong Collectives",
    services: ["UI/UX Architecture", "Smart Contracts Integration", "Design System"],
    liveUrl: "https://wpriverthemes.com/bronx/work-detail2-light/",
  },
  {
    id: "elementor-themes",
    title: "Elementor Themes",
    subtitle: "Themes",
    date: "2022",
    image: "/images/bronx/work-4.jpg",
    description: "Suite of highly customizable, accessibility-tested WordPress and Next.js design themes downloaded by over 45,000 digital agencies worldwide.",
    client: "RiverThemes Studio",
    services: ["Component Architecture", "Performance Tuning", "Theme Development"],
    liveUrl: "https://wpriverthemes.com/bronx/work-detail-light/",
  },
  {
    id: "louis-phillips",
    title: "Louis Phillips",
    subtitle: "Portfolio",
    date: "2022",
    image: "/images/bronx/work-5.jpg",
    description: "Personal brand portal and interactive media archive for New York fashion director Louis Phillips, featuring full-bleed runway galleries.",
    client: "Louis Phillips Agency",
    services: ["Creative Direction", "Fluid Typography", "Mobile Optimization"],
    liveUrl: "https://wpriverthemes.com/bronx/work-detail1-light/",
  },
  {
    id: "panda-do",
    title: "Panda Do",
    subtitle: "Branding",
    date: "2024",
    image: "/images/bronx/work-6.jpg",
    description: "Complete visual identity overhaul, brand strategy, and cross-platform design guidelines for a venture-backed robotics startup.",
    client: "Panda Do Robotics",
    services: ["Visual Identity", "3D Motion Graphics", "Product Design System"],
    liveUrl: "https://wpriverthemes.com/bronx/work-detail2-light/",
  },
];

export function FeaturedWork() {
  const [activeModal, setActiveModal] = useState<ProjectItem | null>(null);

  return (
    <section className="featured-work-sec" id="work">
      {/* Header */}
      <div className="section-header">
        <div className="left">
          <h3>
            <span>FEATURED</span>
            <span>WORK</span>
          </h3>
        </div>
        <div className="right">
          <p>
            My creative spirit comes alive in the digital realm. With nimble fingers flying across
            the keyboard, I craft clear experiences out of nothing but ones and zeroes.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="featured-work-lists">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="featured-card interactive"
            onClick={() => setActiveModal(proj)}
          >
            <div className="img-box">
              <Image
                src={proj.image}
                alt={proj.title}
                width={800}
                height={550}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="content">
              <div className="left">
                <p className="title">{proj.title}</p>
                <p className="subtitle">{proj.subtitle}</p>
              </div>
              <div className="right">
                <span className="date">{proj.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Case Study Modal */}
      {activeModal && (
        <div
          className="service-modal-overlay"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="service-modal-card"
            style={{ maxWidth: 840 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="service-modal-close"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div style={{ position: "relative", width: "100%", height: 380, background: "var(--bg-subtle)" }}>
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "36px 40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div>
                  <span style={{ fontSize: 13, textTransform: "uppercase", fontWeight: 700, color: "var(--paragraph-light)", letterSpacing: 1 }}>
                    {activeModal.subtitle} • {activeModal.date}
                  </span>
                  <h3 style={{ fontSize: 36, fontWeight: 700, margin: "4px 0 0", color: "var(--dark)" }}>
                    {activeModal.title}
                  </h3>
                </div>
                <span style={{ border: "1px solid var(--border-color)", background: "rgba(74, 105, 88, 0.2)", borderRadius: 30, padding: "6px 18px", fontSize: 14, fontWeight: 600, color: "var(--dark)" }}>
                  Client: {activeModal.client}
                </span>
              </div>

              <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--paragraph)", marginBottom: 24 }}>
                {activeModal.description}
              </p>

              <div style={{ marginBottom: 30 }}>
                <h4 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 0.8, color: "var(--dark)", marginBottom: 12 }}>
                  DELIVERABLES & DISCIPLINES
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {activeModal.services.map((s, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "rgba(74, 105, 88, 0.2)",
                        border: "1px solid var(--border-color)",
                        padding: "6px 16px",
                        borderRadius: 20,
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--dark)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                <a
                  href="#contact"
                  className="theme-btn"
                  onClick={() => setActiveModal(null)}
                >
                  Inquire Similar Project
                </a>
                <button
                  className="theme-btn3"
                  onClick={() => setActiveModal(null)}
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
