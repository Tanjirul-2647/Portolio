"use client";

import React, { useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface PopupMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export function PopupMenu({ isOpen, onClose, onNavigate }: PopupMenuProps) {

  // Prevent body scroll when menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const menuItems = [
    { count: "01", label: "HOME", targetId: "hero" },
    { count: "02", label: "WORK & EXPERIENCE", targetId: "work" },
    { count: "03", label: "EXPERTISE", targetId: "expertise" },
    { count: "04", label: "ABOUT", targetId: "about" },
    { count: "05", label: "TESTIMONIALS", targetId: "testimonials" },
    { count: "06", label: "CONTACT", targetId: "contact" },
  ];

  return (
    <div
      className={`popup-menu-wrap ${isOpen ? "active" : ""}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        // Clicking backdrop closes sidebar
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="popup-menu-inner-sidebar">
        {/* Header */}
        <div className="popup-menu-header">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
            <ThemeToggle />
            <button
              className="popup-menu-close-btn"
              onClick={onClose}
              aria-label="Close Navigation Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Body */}
        <div className="popup-menu-body">
          <nav className="popup-menu-nav">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.targetId);
                    }}
                  >
                    <span className="menu-item-left">
                      <span className="menu-num">{item.count}</span>
                      <span className="menu-label-wrap">
                        <span className="menu-label-inner">
                          <span className="menu-label-text">{item.label}</span>
                          <span className="menu-label-text">{item.label}</span>
                        </span>
                      </span>
                    </span>
                    <span className="menu-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Schedule a call button in sidebar */}
        <div className="popup-menu-cta">
          <a
            href="#contact"
            className="theme-btn"
            style={{ width: "100%", justifyContent: "center", textAlign: "center" }}
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
          >
            SCHEDULE A CALL
          </a>
        </div>

        {/* Footer */}
        <div className="popup-menu-footer">
          <div className="copyright">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>

          <ul className="social-links">
            <li>
              <a href="https://www.instagram.com/mrscorpion_2647?stkn=bXN4cTJsM2RmcHp4" target="_blank" rel="noopener noreferrer">
                Instagram <span style={{ fontSize: 12, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>

            <li>
              <a href="https://x.com/tanjirul_647428" target="_blank" rel="noopener noreferrer">
                Twitter <span style={{ fontSize: 12, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub <span style={{ fontSize: 12, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tanjirul-islam-220b74440" target="_blank" rel="noopener noreferrer">
                LinkedIn <span style={{ fontSize: 12, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/8801766580356?s=t" target="_blank" rel="noopener noreferrer">
                WhatsApp <span style={{ fontSize: 12, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
