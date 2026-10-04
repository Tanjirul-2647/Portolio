"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export interface ServiceItem {
  id: string;
  count: string;
  title: string;
  description: string;
  price: string;
  leadParagraph: string;
  features: string[];
}

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export function ServiceDetailModal({ service, onClose, onNavigate }: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="service-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="service-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="service-modal-close"
          onClick={onClose}
          aria-label="Close Service Details"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="service-modal-grid">
          {/* Content Left */}
          <div className="service-modal-content">
            <div className="service-modal-header">
              <span className="price">{service.price}</span>
              <h3>{service.title}</h3>
            </div>

            <p>{service.leadParagraph}</p>

            <div className="service-modal-features">
              <h4>KEY FEATURES</h4>
              <div className="service-modal-feature-list">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="service-modal-feature-item">
                    <span>({idx + 1})</span> {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="service-modal-btns">
              <button
                className="theme-btn2"
                onClick={() => {
                  onClose();
                  onNavigate("contact");
                }}
              >
                Get started
              </button>
              <a
                href="mailto:tanjirul.islam.256@gmail.com"
                className="theme-btn3"
              >
                E-Mail
              </a>
            </div>
          </div>

          {/* Image Right */}
          <div className="service-modal-img">
            <Image
              src="/images/bronx/exp-popup.jpg"
              alt={service.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
