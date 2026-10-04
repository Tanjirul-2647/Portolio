import React from "react";
import type { Metadata } from "next";
import { showcaseData } from "@/data/showcaseData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO & Data Mining Engine | Technical Architecture",
  description:
    "In-depth inspection of Core Web Vitals optimization, JSON-LD Schema.org architecture, and the distributed data extraction ETL pipeline.",
};

export default function ExpertisePage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.header}>
        <div className="container">
          <div className="section-header left-aligned">
            <span className="section-tagline emerald">Technical Specializations</span>
            <h1 className="section-title">SEO & Data Systems Engine</h1>
            <p className="section-description">
              A transparent breakdown of how I engineer high-speed search indexability and resilient data extraction pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Part 1: Technical SEO & Web Performance */}
      <section className="section">
        <div className="container">
          <div className={styles.introCallout}>
            <h3 className={styles.introTitle}>Section 1: Search Performance as Software Engineering</h3>
            <p className={styles.introText}>
              Search visibility is an engineering discipline. Google ranks websites based on objective user experience metrics (Core Web Vitals), clean crawl hierarchy, and unambiguous entity graphing via JSON-LD schemas. Below is how I architect applications for 100/100 performance benchmarks.
            </p>
          </div>

          <div className="section-header left-aligned" style={{ marginBottom: "2rem" }}>
            <span className="section-tagline">Google Benchmarks</span>
            <h2 className="section-title">Core Web Vitals Engineering</h2>
            <p className="section-description">
              Telemetry benchmarks measured directly on this portfolio architecture.
            </p>
          </div>

          {/* Vitals Grid */}
          <div className={styles.vitalsGrid}>
            {showcaseData.seoMetrics.map((vital) => (
              <div key={vital.metric} className={styles.vitalCard}>
                <div className={styles.vitalTop}>
                  <span className={styles.vitalScore}>{vital.score}</span>
                  <span className={styles.vitalBenchmark}>{vital.benchmark}</span>
                </div>
                <h3 className={styles.vitalName}>{vital.metric}</h3>
                <p className={styles.vitalExplanation}>{vital.explanation}</p>
              </div>
            ))}
          </div>

          {/* Structured Schema Graph Box */}
          <div className={styles.schemaContainer}>
            <div className={styles.schemaDetails}>
              <Badge variant="emerald" size="sm">
                Entity Graphing
              </Badge>
              <h3 className={styles.schemaTitle}>Schema.org & Semantic Graphing</h3>
              <p className={styles.schemaText}>
                Modern search algorithms don&apos;t just read keywords—they crawl entity graphs. By injecting deeply nested JSON-LD structured data into the DOM head, search spiders can instantly identify the author, competencies, and relational links without ambiguity.
              </p>

              <ul className={styles.schemaFeatureList}>
                <li className={styles.schemaFeatureItem}>
                  <span>✓</span> Fully valid Google Rich Snippet specification
                </li>
                <li className={styles.schemaFeatureItem}>
                  <span>✓</span> Programmatic dynamic generation per page
                </li>
                <li className={styles.schemaFeatureItem}>
                  <span>✓</span> 0ms client-side execution overhead
                </li>
              </ul>

              <div style={{ marginTop: "0.5rem" }}>
                <Button
                  href="https://validator.schema.org/"
                  variant="outline"
                  size="sm"
                  external
                >
                  Verify on Schema.org Validator →
                </Button>
              </div>
            </div>

            <pre className={styles.codeBox}>
              <code>{showcaseData.jsonLdExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Part 2: Data Mining ETL Pipeline Flow */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline purple">Data Architecture</span>
            <h2 className="section-title">End-to-End Data Mining Pipeline</h2>
            <p className="section-description">
              How raw, uncooperative web data is scraped, bypassed, cleaned, and structured into production-ready analytical databases.
            </p>
          </div>

          <div className={styles.pipelineFlow}>
            {showcaseData.pipelineSteps.map((step) => (
              <div key={step.stepNumber} className={styles.pipelineCard}>
                <div className={styles.pipelineStepNum}>{step.stepNumber}</div>

                <div className={styles.pipelineMain}>
                  <h3 className={styles.pipelineName}>{step.name}</h3>
                  <p className={styles.pipelineDesc}>{step.description}</p>

                  <div className={styles.pipelineTools}>
                    {step.tools.map((t) => (
                      <span key={t} className={styles.toolTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.pipelineMeta}>
                  <div>
                    <span className={styles.metaLabel}>Artifact Output</span>
                    <p className={styles.metaVal}>{step.outputType}</p>
                  </div>
                  <div>
                    <span className={styles.metaLabel}>Performance Target</span>
                    <p className={styles.metaVal}>{step.specs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Button href="/projects" variant="primary" size="lg">
              View Data Mining Projects in Action
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
