"use client";

import React from "react";
import { useLenis } from "lenis/react";

export function BronxFooter() {
  const lenis = useLenis();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer-area">
      <div className="footer-big-text">
        <span>TANJIRUL ISLAM</span>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>

        <div className="right">
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            GO BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
