import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | Professional Journey & Technical Philosophy",
  description:
    "Learn about Alex Mercer - Junior Software Developer, Technical SEO Specialist, and Data Mining Engineer with a focus on scalable systems.",
};

export default function AboutPage() {
  const principles = [
    {
      icon: "📐",
      title: "Type-Safe Architecture",
      desc: "Prioritizing strict TypeScript schemas and modular components to eliminate entire classes of runtime errors."
    },
    {
      icon: "⚡",
      title: "Sub-Second Performance",
      desc: "Treating speed as a core feature. Delivering 100/100 Core Web Vitals with minimal JavaScript payloads."
    },
    {
      icon: "📊",
      title: "Data-Driven Decisions",
      desc: "Replacing assumptions with automated scrapers, telemetry logs, and quantitative search index benchmarks."
    },
    {
      icon: "🔄",
      title: "Systematic Automation",
      desc: "Turning manual collations into resilient Python/Node.js ETL scripts with automated error isolation."
    }
  ];

  return (
    <>
      {/* Header Banner */}
      <section className={styles.aboutHeader}>
        <div className="container">
          <div className="section-header left-aligned">
            <span className="section-tagline">Professional Profile</span>
            <h1 className="section-title">The Engineering Narrative</h1>
            <p className="section-description">
              Bridging software development, large-scale data mining, and technical search engine optimization into unified digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Profile Sidebar */}
      <section className="section">
        <div className={`container ${styles.overviewGrid}`}>
          {/* Main Narrative */}
          <div className={styles.bioContent}>
            <h2 className={styles.bioTitle}>
              Engineering With Purpose: From Data Points to Page One
            </h2>

            {portfolioData.profile.bio.map((paragraph, idx) => (
              <p key={idx} className={styles.bioParagraph}>
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/resume" variant="primary" size="md">
                Download Resume (PDF)
              </Button>
              <Button href="/projects" variant="outline" size="md">
                Review Case Studies
              </Button>
            </div>
          </div>

          {/* Profile Sidebar Card */}
          <aside className={styles.sidebarCard}>
            <div className={styles.sidebarAvatarFrame}>
              <Image
                src={portfolioData.profile.avatarUrl}
                alt={portfolioData.profile.fullName}
                width={140}
                height={140}
                className={styles.sidebarAvatarImg}
              />
            </div>

            <div className={styles.sidebarMeta}>
              <h3 className={styles.sidebarName}>{portfolioData.profile.fullName}</h3>
              <p className={styles.sidebarRole}>{portfolioData.profile.title}</p>
            </div>

            <ul className={styles.factList}>
              <li className={styles.factItem}>
                <span className={styles.factLabel}>Status</span>
                <span className={styles.factValue}>
                  <span className="status-indicator">
                    <span className="status-indicator-dot" />
                    <span>{portfolioData.profile.status}</span>
                  </span>
                </span>
              </li>
              <li className={styles.factItem}>
                <span className={styles.factLabel}>Location</span>
                <span className={styles.factValue}>{portfolioData.profile.location}</span>
              </li>
              <li className={styles.factItem}>
                <span className={styles.factLabel}>Focus Disciplines</span>
                <span className={styles.factValue}>Software • SEO • Data Mining</span>
              </li>
              <li className={styles.factItem}>
                <span className={styles.factLabel}>Primary Languages</span>
                <span className={styles.factValue}>TypeScript, JavaScript, Python, SQL</span>
              </li>
              <li className={styles.factItem}>
                <span className={styles.factLabel}>Direct Email</span>
                <span className={styles.factValue}>{portfolioData.profile.email}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Core Philosophy</span>
            <h2 className="section-title">Guiding Engineering Principles</h2>
            <p className="section-description">
              The foundational standards that govern every line of code, scraping pipeline, and web architecture I deploy.
            </p>
          </div>

          <div className={styles.principlesGrid}>
            {principles.map((pr, idx) => (
              <div key={idx} className={styles.principleCard}>
                <span className={styles.principleIcon}>{pr.icon}</span>
                <h3 className={styles.principleTitle}>{pr.title}</h3>
                <p className={styles.principleDesc}>{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline emerald">Skills Breakdown</span>
            <h2 className="section-title">Technical Competency Matrix</h2>
            <p className="section-description">
              A comprehensive breakdown of technologies, frameworks, and data tools utilized across production systems.
            </p>
          </div>

          <div className={styles.skillsCategoriesGrid}>
            {portfolioData.skillCategories.map((category) => (
              <div key={category.title} className={styles.skillCategoryCard}>
                <div className={styles.categoryHeader}>
                  <Badge
                    variant={
                      category.accent === "emerald"
                        ? "emerald"
                        : category.accent === "purple"
                        ? "purple"
                        : "cobalt"
                    }
                    size="sm"
                  >
                    {category.badge}
                  </Badge>
                </div>

                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryDesc}>{category.description}</p>

                <ul className={styles.skillItemsList}>
                  {category.skills.map((skill) => (
                    <li key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillItemHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillPercent}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBarBg}>
                        <div
                          className={`${styles.progressBarFill} ${
                            category.accent === "emerald"
                              ? styles.emeraldFill
                              : category.accent === "purple"
                              ? styles.purpleFill
                              : styles.cobaltFill
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className={styles.skillDesc}>{skill.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career & Academic Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Milestones</span>
            <h2 className="section-title">Experience & Education Timeline</h2>
            <p className="section-description">
              A chronological overview of professional engagements, academic rigor, and key technical deliverables.
            </p>
          </div>

          <div className={styles.timelineContainer}>
            {portfolioData.timeline.map((item, idx) => (
              <div key={idx} className={styles.timelineCard}>
                <div className={styles.timelineNode} />

                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.timelineRole}>{item.role}</h3>
                    <p className={styles.timelineCompany}>
                      {item.company} • {item.location}
                    </p>
                  </div>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                </div>

                <ul className={styles.timelineDescList}>
                  {item.description.map((bullet, i) => (
                    <li key={i} className={styles.timelineDescItem}>
                      <span className={styles.timelineDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.timelineSkills}>
                  {item.skills.map((s) => (
                    <span key={s} className={styles.timelineSkillTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
