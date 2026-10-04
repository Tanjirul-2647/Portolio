"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CtaSectionProps {
  onNavigate: (id: string) => void;
}

export function CtaSection({ onNavigate }: CtaSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const targetEmail = "tanjirul.islam.256@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setLoading(true);

    const subject = `Portfolio Inquiry from ${formState.name}`;
    const bodyText = `Name: ${formState.name}\nEmail: ${formState.email}\n\nProject Details:\n${formState.message}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: subject,
          _replyto: formState.email,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: open Gmail compose directly
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`,
          "_blank"
        );
        setSubmitted(true);
      }
    } catch {
      // Offline or network error fallback: open Gmail compose
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`,
        "_blank"
      );
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cta-sec" id="contact">
      {/* Header */}
      <div className="cta-header">
        <h3 className="title">
          <span>LET&apos;S WORK</span>
          <span>TOGETHER</span>
        </h3>

        <div>
          <a
            href={`mailto:${targetEmail}`}
            className="theme-btn"
          >
            CONTACT NOW
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="about-bottom-content-wrap">
        <div className="img-box">
          <Image
            src="/me6.jpeg"
            alt="Tanjirul Islam"
            width={643}
            height={954}
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <div className="about-bottom-content">
          <div>
            <p className="cta-lead-text">
              BASED IN CUMILLA, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST.
              <br className="desktop-only" />
              MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE ARCHITECTURE IS EVIDENT IN EVERY PIXEL.
            </p>
          </div>

          {/* Quick Contact Form */}
          <div className="cta-form-card">
            {submitted ? (
              <div className="cta-success-box">
                <span style={{ fontSize: 36, color: "var(--status-green, #52b788)", display: "inline-block", marginBottom: 8 }}>✓</span>
                <h4 style={{ fontSize: 24, margin: "6px 0 8px", color: "var(--dark)", fontWeight: 700 }}>Thank you, {formState.name}!</h4>
                <p style={{ fontSize: 16, color: "var(--paragraph)", maxWidth: 440, margin: "0 auto 16px", lineHeight: 1.6 }}>
                  Your message has been sent to <strong style={{ color: "var(--dark)" }}>{targetEmail}</strong>. I will respond to your email within 24 hours.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(`Portfolio Inquiry from ${formState.name}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nProject Details:\n${formState.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                    style={{ fontSize: 13, padding: "10px 20px" }}
                  >
                    Open in Gmail Directly
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    style={{
                      background: "transparent",
                      border: "1px solid var(--border-color)",
                      color: "var(--paragraph)",
                      padding: "10px 20px",
                      borderRadius: 40,
                      cursor: "pointer",
                      fontSize: 13,
                      fontFamily: "var(--font_instrument)",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cta-form">
                <div className="cta-form-grid">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="cta-input"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="cta-input"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project, timeline, and goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="cta-textarea"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="theme-btn2 cta-submit-btn"
                  style={{
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <ul className="social-links" style={{ justifyContent: "center", width: "100%", flexWrap: "wrap", marginTop: 4 }}>
            <li>
              <a href="https://www.instagram.com/mrscorpion_2647?stkn=bXN4cTJsM2RmcHp4" target="_blank" rel="noopener noreferrer">
                Instagram <span style={{ fontSize: 13, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>

            <li>
              <a href="https://x.com/tanjirul_647428" target="_blank" rel="noopener noreferrer">
                Twitter <span style={{ fontSize: 13, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub <span style={{ fontSize: 13, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tanjirul-islam-220b74440" target="_blank" rel="noopener noreferrer">
                LinkedIn <span style={{ fontSize: 13, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/8801766580356?s=t" target="_blank" rel="noopener noreferrer">
                WhatsApp <span style={{ fontSize: 13, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
