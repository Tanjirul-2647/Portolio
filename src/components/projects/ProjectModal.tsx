"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/projectsData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const badgeVariant =
    project.category === "seo"
      ? "emerald"
      : project.category === "data-mining"
      ? "purple"
      : "cobalt";

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerMeta}>
            <Badge variant={badgeVariant} size="md">
              {project.categoryLabel}
            </Badge>
            <span className={styles.date}>{project.date}</span>
          </div>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Title & Executive Metric */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>{project.title}</h2>
          <div className={styles.metricCallout}>
            <span className={styles.metricVal}>{project.highlightMetric}</span>
            <span className={styles.metricDesc}>{project.metricLabel}</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className={styles.content}>
          {/* Summary */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.sectionLabel}>Executive Overview</h4>
            <p className={styles.text}>{project.summary}</p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className={styles.gridTwoCol}>
            <div className={`${styles.box} ${styles.challengeBox}`}>
              <h4 className={styles.boxTitle}>
                <span className={styles.boxIcon}>⚠️</span> The Challenge
              </h4>
              <p className={styles.text}>{project.challenge}</p>
            </div>

            <div className={`${styles.box} ${styles.solutionBox}`}>
              <h4 className={styles.boxTitle}>
                <span className={styles.boxIcon}>💡</span> The Architectural Solution
              </h4>
              <p className={styles.text}>{project.solution}</p>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.sectionLabel}>Key Technical Implementations</h4>
            <ul className={styles.featureList}>
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measured Results */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.sectionLabel}>Quantifiable Business Impact</h4>
            <div className={styles.resultsGrid}>
              {project.results.map((res, idx) => (
                <div key={idx} className={styles.resultCard}>
                  <span className={styles.resultNum}>0{idx + 1}</span>
                  <span className={styles.resultText}>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className={styles.sectionBlock}>
            <h4 className={styles.sectionLabel}>Technologies & Tools</h4>
            <div className={styles.tags}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={styles.footer}>
          {project.demoUrl && (
            <Button
              variant="primary"
              size="md"
              href={project.demoUrl}
              external
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              }
              iconPosition="right"
            >
              Open Live Showcase
            </Button>
          )}

          {project.githubUrl && (
            <Button
              variant="outline"
              size="md"
              href={project.githubUrl}
              external
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              }
            >
              Inspect Source Code
            </Button>
          )}

          <Button variant="ghost" size="md" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
