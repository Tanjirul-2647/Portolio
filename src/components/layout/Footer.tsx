import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Top Grid */}
        <div className={styles.topGrid}>
          {/* Column 1: Brand & Positioning */}
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <div className={styles.monogram}>AM</div>
              <div>
                <h3 className={styles.brandName}>{portfolioData.profile.fullName}</h3>
                <p className={styles.brandRole}>{portfolioData.profile.title}</p>
              </div>
            </div>

            <p className={styles.brandDescription}>
              Building high-throughput, type-safe software powered by automated data mining pipelines and search-first web architecture.
            </p>

            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span>{portfolioData.profile.status}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Site Navigation</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/about" className={styles.link}>About Professional</Link></li>
              <li><Link href="/projects" className={styles.link}>Project Case Studies</Link></li>
              <li><Link href="/expertise" className={styles.link}>SEO & Data Systems</Link></li>
              <li><Link href="/resume" className={styles.link}>Digital Resume</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact Inbound</Link></li>
            </ul>
          </div>

          {/* Column 3: Technical Specializations */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Core Domains</h4>
            <ul className={styles.linkList}>
              <li><span className={styles.staticLink}>Software Engineering (Next.js/TS)</span></li>
              <li><span className={styles.staticLink}>Data Mining & Extraction Pipelines</span></li>
              <li><span className={styles.staticLink}>Technical SEO & Entity Graphing</span></li>
              <li><span className={styles.staticLink}>Core Web Vitals Speed Auditing</span></li>
              <li><span className={styles.staticLink}>Automated ETL & Tabular Processing</span></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Direct Connect</h4>
            <ul className={styles.linkList}>
              <li>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className={styles.link}
                >
                  ✉️ {portfolioData.profile.email}
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  💼 LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  🐙 GitHub Repositories
                </a>
              </li>
              <li>
                <span className={styles.locationTag}>
                  📍 {portfolioData.profile.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} {portfolioData.profile.fullName}. Built with Next.js & Strict TypeScript. All rights reserved.
          </p>
          <div className={styles.badgeStandard}>
            <span>100/100 Lighthouse Standard</span>
            <span className={styles.dotSeparator}>•</span>
            <span>Zero Dark-Theme Noise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
