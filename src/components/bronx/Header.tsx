"use client";

import React from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface HeaderProps {
  onOpenMenu?: () => void;
  onNavigate: (id: string) => void;
}

export function Header({ onNavigate, onOpenMenu }: HeaderProps) {
  return (
    <header className="header-wrap">
      {/* Desktop Navigation */}
      <div className="header-row header-desktop-only">
        {/* Left balance spacer so center nav links stay mathematically centered */}
        <div className="header-side-spacer" aria-hidden="true" />

        <nav className="header-nav-bar" aria-label="Main Navigation">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a
                href="#hero"
                className="header-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("hero");
                }}
              >
                <span className="header-nav-label">HOME</span>
              </a>
            </li>

            <li className="header-nav-item">
              <a
                href="#work"
                className="header-nav-link header-nav-link-vertical"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("work");
                }}
                aria-label="Work & Experience"
              >
                <span className="header-nav-vertical">
                  <span className="header-nav-line1">WORK &amp;</span>
                  <span className="header-nav-line2">EXPERIENCE</span>
                </span>
              </a>
            </li>

            <li className="header-nav-item">
              <a
                href="#expertise"
                className="header-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("expertise");
                }}
              >
                <span className="header-nav-label">EXPERTISE</span>
              </a>
            </li>

            <li className="header-nav-item">
              <a
                href="#about"
                className="header-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("about");
                }}
              >
                <span className="header-nav-label">ABOUT</span>
              </a>
            </li>

            <li className="header-nav-item">
              <a
                href="#testimonials"
                className="header-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("testimonials");
                }}
              >
                <span className="header-nav-label">TESTIMONIALS</span>
              </a>
            </li>

            <li className="header-nav-item">
              <a
                href="#contact"
                className="header-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("contact");
                }}
              >
                <span className="header-nav-label">CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Right header action: Theme toggle button (light / current) */}
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation Header */}
      <div className="header-mobile-bar">
        {/* Brand Title */}
        <a
          href="#hero"
          className="mobile-header-brand"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("hero");
          }}
        >
          <span className="mobile-brand-name">TANJIRUL ISLAM</span>
        </a>

        {/* Right Mobile Actions: Theme Toggle + Hamburger Menu */}
        <div className="mobile-header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-hamburger-btn mobile-hamburger-right"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
