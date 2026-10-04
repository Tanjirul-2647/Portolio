"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "WHAT INDUSTRIES DO YOU SPECIALIZE IN?",
    answer: "I have experience working across various industries including technology, SaaS platforms, high fashion, luxury e-commerce, architecture, and innovative venture-backed startups.",
  },
  {
    id: "faq-2",
    question: "WHAT SERVICES DO YOU OFFER AS A DESIGNER & DEVELOPER?",
    answer: "I offer end-to-end creative and technical solutions: art direction, UI/UX architecture, responsive web design, design systems, Next.js full-stack development, Webflow setups, performance optimization, and custom interactive motion graphics.",
  },
  {
    id: "faq-3",
    question: "HOW DO YOU APPROACH BRANDING PROJECTS?",
    answer: "When it comes to branding projects, I believe in delving deep into understanding the client's brand identity, target audience, and market positioning. I strive to create cohesive visual identities that effectively communicate the brand's values and personality across various touchpoints, including logos, color palettes, typography, and brand guidelines.",
  },
  {
    id: "faq-4",
    question: "CAN YOU WALK ME THROUGH YOUR DESIGN PROCESS?",
    answer: "Certainly! My process is structured in four clear phases: Discovery & Strategy (understanding goals and benchmarking), Art Direction & Wireframing, High-Fidelity UI & Motion Prototyping, followed by clean, type-safe Next.js production engineering and rigorous QA testing.",
  },
  {
    id: "faq-5",
    question: "WHAT SOFTWARE AND TOOLS DO YOU USE FOR YOUR WORK?",
    answer: "I work daily with Figma, Next.js 15+, React 19, TypeScript, Webflow, TailwindCSS, GSAP, Node.js, and Adobe Creative Cloud to ensure maximum creative fidelity and uncompromised runtime performance.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-sec" id="faq">
      <div className="section-header3">
        <h3 className="title">
          <span>FREQUENTLY</span>
          <span>ASKED QUESTIONS</span>
        </h3>
      </div>

      <div className="faq-wrap">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="faq-button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>

              {isOpen && (
                <div className="faq-body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
