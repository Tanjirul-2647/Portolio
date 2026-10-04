"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `
${portfolioData.profile.fullName}
${portfolioData.profile.title}
Email: ${portfolioData.profile.email} | Location: ${portfolioData.profile.location}
GitHub: ${portfolioData.profile.github} | LinkedIn: ${portfolioData.profile.linkedin}

PROFESSIONAL SUMMARY
${portfolioData.profile.bio.join("\n\n")}

TECHNICAL SKILLS
- Languages: TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3
- Frontend & Frameworks: Next.js (App Router), React, Server Components, CSS Modules
- Data Mining & Scraping: Puppeteer, BeautifulSoup4, Pandas, ETL Pipelines, Regex
- Technical SEO: Core Web Vitals, Schema.org (JSON-LD), Crawl Audits, Screaming Frog
- Databases & Tools: PostgreSQL, Git/GitHub, Docker, Linux, Postman

EXPERIENCE
${portfolioData.timeline
  .map(
    (item) => `
${item.role} | ${item.company} (${item.period})
${item.description.map((d) => `• ${d}`).join("\n")}
Tech: ${item.skills.join(", ")}
`
  )
  .join("\n")}
    `.trim();

    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <>
      {/* Header */}
      <section className={`${styles.header} no-print`}>
        <div className="container">
          <div className="section-header left-aligned">
            <span className="section-tagline">Credentials & Experience</span>
            <h1 className="section-title">Digital Resume & Curriculum Vitae</h1>
            <p className="section-description">
              Formatted according to standard ATS enterprise guidelines. Optimized for digital inspection, printing, and automated parser extraction.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="section">
        <div className="container">
          {/* Action Toolbar */}
          <div className={`${styles.actionToolbar} no-print`}>
            <div className={styles.atsIndicator}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>100% ATS Parser Compatible Standard</span>
            </div>

            <div className={styles.actionButtons}>
              <Button
                variant="primary"
                size="sm"
                onClick={handlePrint}
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                }
              >
                Print / Save as PDF
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyPlainText}
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                }
              >
                {copied ? "Copied to Clipboard!" : "Copy Plain Text"}
              </Button>
            </div>
          </div>

          {/* Resume Paper */}
          <article className={styles.resumePaper}>
            {/* Header */}
            <div className={styles.resumeHeader}>
              <h2 className={styles.candidateName}>{portfolioData.profile.fullName}</h2>
              <p className={styles.candidateTitle}>{portfolioData.profile.title}</p>
              <div className={styles.contactRow}>
                <span>📧 {portfolioData.profile.email}</span>
                <span>📍 {portfolioData.profile.location}</span>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  linkedin.com/in/alex-mercer
                </a>
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  github.com/alex-mercer
                </a>
              </div>
            </div>

            {/* Executive Summary */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Professional Summary</h3>
              <p className={styles.summaryText}>
                Results-driven Junior Software Developer with specialized expertise in technical SEO architecture and automated data mining systems. Experienced in architecting type-safe Next.js applications, building distributed web crawlers handling 250k+ daily records, and achieving 100/100 Core Web Vitals performance benchmarks.
              </p>
            </div>

            {/* Core Competencies */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Technical Skills</h3>
              <div className={styles.skillsTable}>
                <div className={styles.skillRow}>
                  <span className={styles.skillCategory}>Languages:</span>
                  <span className={styles.skillList}>TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3</span>
                </div>
                <div className={styles.skillRow}>
                  <span className={styles.skillCategory}>Web Frameworks:</span>
                  <span className={styles.skillList}>Next.js (App Router), React, Node.js, Express, CSS Modules</span>
                </div>
                <div className={styles.skillRow}>
                  <span className={styles.skillCategory}>Data Mining:</span>
                  <span className={styles.skillList}>Puppeteer, BeautifulSoup4, Pandas, ETL Pipelines, Regex Patterning</span>
                </div>
                <div className={styles.skillRow}>
                  <span className={styles.skillCategory}>Technical SEO:</span>
                  <span className={styles.skillList}>Core Web Vitals Tuning, JSON-LD Schema.org, Programmatic SEO, Sitemap Protocols</span>
                </div>
                <div className={styles.skillRow}>
                  <span className={styles.skillCategory}>Tools & Systems:</span>
                  <span className={styles.skillList}>PostgreSQL, Git, Docker basics, Linux shell, Postman, Vercel</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Professional Experience</h3>

              {portfolioData.timeline
                .filter((item) => item.type === "experience")
                .map((exp, idx) => (
                  <div key={idx} className={styles.experienceItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemRole}>{exp.role}</span>
                      <span className={styles.itemPeriod}>{exp.period}</span>
                    </div>
                    <span className={styles.itemCompany}>
                      {exp.company} • {exp.location}
                    </span>
                    <ul className={styles.bulletList}>
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className={styles.bulletItem}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>

            {/* Education */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>Education & Academic Credentials</h3>

              {portfolioData.timeline
                .filter((item) => item.type === "education")
                .map((edu, idx) => (
                  <div key={idx} className={styles.experienceItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemRole}>{edu.role}</span>
                      <span className={styles.itemPeriod}>{edu.period}</span>
                    </div>
                    <span className={styles.itemCompany}>
                      {edu.company} • {edu.location}
                    </span>
                    <ul className={styles.bulletList}>
                      {edu.description.map((bullet, bIdx) => (
                        <li key={bIdx} className={styles.bulletItem}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
