"use client";

import React from "react";
import styles from "./ProjectFilter.module.css";

export type FilterCategory = "all" | "software" | "data-mining" | "seo";

interface ProjectFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: {
    all: number;
    software: number;
    "data-mining": number;
    seo: number;
  };
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeFilter,
  onFilterChange,
  counts,
}) => {
  const filters: { id: FilterCategory; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software Engineering" },
    { id: "data-mining", label: "Data Mining & Scraping" },
    { id: "seo", label: "Technical & Programmatic SEO" },
  ];

  return (
    <div className={styles.filterContainer}>
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        const count = counts[filter.id];

        return (
          <button
            key={filter.id}
            className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
            onClick={() => onFilterChange(filter.id)}
          >
            <span>{filter.label}</span>
            <span className={`${styles.count} ${isActive ? styles.activeCount : ""}`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
