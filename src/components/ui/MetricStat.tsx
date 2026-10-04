import React from "react";
import styles from "./MetricStat.module.css";

interface MetricStatProps {
  value: string;
  label: string;
  sublabel?: string;
  accent?: "cobalt" | "emerald" | "purple";
  className?: string;
}

export const MetricStat: React.FC<MetricStatProps> = ({
  value,
  label,
  sublabel,
  accent = "cobalt",
  className = ""
}) => {
  return (
    <div className={`${styles.card} ${styles[accent]} ${className}`}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
      {sublabel && <div className={styles.sublabel}>{sublabel}</div>}
    </div>
  );
};
