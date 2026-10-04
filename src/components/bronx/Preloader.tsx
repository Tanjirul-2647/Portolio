"use client";

import React, { useEffect, useState } from "react";

export function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#1B2922",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 38,
            height: 38,
            border: "2.5px solid rgba(74, 105, 88, 0.25)",
            borderTopColor: "#4A6958",
            borderRadius: "50%",
            animation: "spin 0.7s linear infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font_instrument)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1.5,
            color: "#F2F6F3",
          }}
        >
          Retrieving..
        </span>
      </div>
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
