"use client";

import React, { useState, useMemo } from "react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ProjectFilter, FilterCategory } from "@/components/projects/ProjectFilter";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Compute counts
  const counts = useMemo(() => {
    return {
      all: projectsData.length,
      software: projectsData.filter((p) => p.category === "software").length,
      "data-mining": projectsData.filter((p) => p.category === "data-mining").length,
      seo: projectsData.filter((p) => p.category === "seo").length,
    };
  }, []);

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeFilter === "all" || project.category === activeFilter;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <>
      {/* Header */}
      <section className={styles.projectsHeader}>
        <div className="container">
          <div className="section-header left-aligned">
            <span className="section-tagline">Portfolio Showcase</span>
            <h1 className="section-title">Engineering Case Studies</h1>
            <p className="section-description">
              Production-ready web applications, automated web crawlers, and programmatic SEO systems built with measurable metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Directory & Controls */}
      <section className="section">
        <div className="container">
          <div className={styles.controlsBar}>
            <ProjectFilter
              activeFilter={activeFilter}
              onFilterChange={(f) => setActiveFilter(f)}
              counts={counts}
            />

            {/* Keyword / Tech Search */}
            <div className={styles.searchWrapper}>
              <svg
                className={styles.searchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search by tech or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search projects by technology or title"
              />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🔍</span>
              <h3 className={styles.emptyTitle}>No projects found</h3>
              <p className={styles.emptyText}>
                No projects matched your criteria for &quot;{searchQuery}&quot;. Try resetting your filters.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
