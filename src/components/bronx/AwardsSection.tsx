import React from "react";

const awards = [
  {
    institution: "CSS DESIGN AWARD",
    title: "MAKINTO PORTFOLIO",
    year: "2024",
    description: "Won Best UI, Best Innovation, and Special Kudos for its unique classic Macintosh typographic nostalgia re-engineered with modern web technologies.",
  },
  {
    institution: "AWARDS",
    title: "ARNO RED THEMED PORTFOLIO",
    year: "2023",
    description: "Honorable Mention & Site of the Day nominee; celebrated for futuristic horizontal scroll physics and minimal brutalist grid layouts.",
  },
  {
    institution: "WEBFLOW AWARDS",
    title: "AUDEMARS PIGUET SHOWCASE",
    year: "2023",
    description: "Recognized as Best Luxury E-Commerce Concept, praised by the global design community for microinteractions and high-contrast typography.",
  },
];

export function AwardsSection() {
  return (
    <section className="sticky-split-sec" id="awards">
      <div className="sticky-split-row">
        <div className="sticky-split-left">
          <h3>AWARDS</h3>
        </div>

        <div className="sticky-split-right">
          {awards.map((award, idx) => (
            <div key={idx} className="experience2-box">
              <div className="experience2-box-header">{award.institution}</div>
              <div className="experience2-box-body">
                <h4>
                  {award.title} <span>{award.year}</span>
                </h4>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
