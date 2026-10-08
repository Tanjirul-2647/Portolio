"use client";

import React, { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Read current active theme on html attribute or saved in localStorage
    const saved = localStorage.getItem("theme");
    const active = document.documentElement.getAttribute("data-theme");

    let currentTheme: "dark" | "light" = "dark";
    if (saved === "light" || saved === "dark") {
      currentTheme = saved;
    } else if (active === "light" || active === "dark") {
      currentTheme = active;
    }

    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);

    // 2. Listen for theme change events across components
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: "dark" | "light" }>;
      if (customEvent.detail?.theme) {
        setTheme(customEvent.detail.theme);
      }
    };

    window.addEventListener("theme-change", handleThemeChange);

    return () => {
      window.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {
      /* ignore */
    }

    window.dispatchEvent(
      new CustomEvent("theme-change", { detail: { theme: nextTheme } })
    );
  };

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${theme === "light" ? "is-light" : "is-dark"} ${className}`}
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <span className="theme-toggle-icon-wrap" aria-hidden="true">
        {/* Sun / Burst Icon shown in dark mode (clicking enables light mode) */}
        <svg
          className="theme-icon icon-sun-burst"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <line x1="12" y1="1.5" x2="12" y2="4.5" />
          <line x1="12" y1="19.5" x2="12" y2="22.5" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="1.5" y1="12" x2="4.5" y2="12" />
          <line x1="19.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </svg>

        {/* Crescent Moon Icon shown in light mode (clicking enables dark mode) */}
        <svg
          className="theme-icon icon-moon-crescent"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" fillOpacity="0.25" />
        </svg>
      </span>
    </button>
  );
}
