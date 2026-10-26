"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CtaSectionProps {
  onNavigate: (id: string) => void;
}

export function CtaSection({ onNavigate }: CtaSectionProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "activation_needed" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [lastSent, setLastSent] = useState({ name: "", email: "", message: "" });

  const targetEmail = "tanjirul.islam.256@gmail.com";

  const currentName = formState.name || lastSent.name;
  const currentEmail = formState.email || lastSent.email;
  const currentMessage = formState.message || lastSent.message;

  const subject = `Portfolio Inquiry from ${currentName.trim() || "Visitor"}`;
  const bodyText = `Hi Tanjirul,\n\nName: ${currentName}\nEmail: ${currentEmail}\n\nProject Details:\n${currentMessage}`;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please complete all fields before sending.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    const snapshot = { ...formState };
    setLastSent(snapshot);

    try {
      // Primary: Send through server-side /api/contact route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(snapshot),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === true || data?.success === "true")) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        return;
      }

      // Secondary fallback: Direct browser submission to FormSubmit
      try {
        const clientRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: snapshot.name.trim(),
            email: snapshot.email.trim(),
            message: snapshot.message.trim(),
            _subject: subject,
            _replyto: snapshot.email.trim(),
            _captcha: "false",
            _template: "table",
          }),
        });

        const clientData = await clientRes.json().catch(() => null);
        if (clientData?.success === true || clientData?.success === "true") {
          setStatus("success");
          setFormState({ name: "", email: "", message: "" });
          return;
        }
      } catch {
        // Fall through to user-facing fallback
      }

      if (data?.needsActivation) {
        setErrorMessage(
          "Activation required: Please click 'Activate Form' in the email sent to tanjirul.islam.256@gmail.com, or use the direct options below."
        );
      } else {
        setErrorMessage(
          data?.message ||
          "Could not deliver automatically. You can send directly using Gmail, Mail app, or WhatsApp below."
        );
      }
      setStatus("error");
    } catch {
      // If server route failed completely (network issue), attempt direct browser submission
      try {
        const clientRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: snapshot.name.trim(),
            email: snapshot.email.trim(),
            message: snapshot.message.trim(),
            _subject: subject,
            _replyto: snapshot.email.trim(),
            _captcha: "false",
            _template: "table",
          }),
        });

        const clientData = await clientRes.json().catch(() => null);
        if (clientData?.success === true || clientData?.success === "true") {
          setStatus("success");
          setFormState({ name: "", email: "", message: "" });
          return;
        }
      } catch {
        // Fall through
      }

      setErrorMessage("Network issue. Please send directly using Gmail, Mail app, or WhatsApp below.");
      setStatus("error");
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
            {status === "success" ? (
              <div className="cta-success-box">
                <span style={{ fontSize: 36, color: "var(--status-green, #52b788)", display: "inline-block", marginBottom: 8 }}>✓</span>
                <h4 style={{ fontSize: 24, margin: "6px 0 8px", color: "var(--dark)", fontWeight: 700 }}>Thank you, {lastSent.name}!</h4>
                <p style={{ fontSize: 16, color: "var(--paragraph)", maxWidth: 460, margin: "0 auto 16px", lineHeight: 1.6 }}>
                  Your message has been directed to <strong style={{ color: "var(--dark)" }}>{targetEmail}</strong>. I will respond to your email within 24 hours.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                    style={{ fontSize: 13, padding: "10px 20px" }}
                  >
                    Open in Gmail ↗
                  </a>
                  <a
                    href={mailtoUrl}
                    className="theme-btn2"
                    style={{ fontSize: 13, padding: "10px 20px" }}
                  >
                    Send via Mail App ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormState({ name: "", email: "", message: "" });
                      setErrorMessage("");
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
                {status === "error" && errorMessage && (
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.12)",
                      border: "1px solid rgba(239, 68, 68, 0.35)",
                      borderRadius: 12,
                      padding: "12px 16px",
                      fontSize: 13,
                      color: "#fca5a5",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                      <span>⚠️ {errorMessage}</span>
                    </div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", paddingTop: 4 }}>
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-btn"
                        style={{ fontSize: 12, padding: "7px 14px" }}
                      >
                        Open in Gmail ↗
                      </a>
                      <a
                        href={mailtoUrl}
                        className="theme-btn2"
                        style={{ fontSize: 12, padding: "7px 14px" }}
                      >
                        Send via Mail App ↗
                      </a>
                      <a
                        href={`https://wa.me/message/SLFQRAGU2NK6H1?text=${encodeURIComponent(`Hi Tanjirul,\n\nName: ${currentName}\nEmail: ${currentEmail}\n\nProject:\n${currentMessage}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 12,
                          padding: "7px 14px",
                          borderRadius: 30,
                          background: "#25D366",
                          color: "#fff",
                          fontWeight: 600,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        WhatsApp ↗
                      </a>
                    </div>
                  </div>
                )}

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
                  disabled={status === "loading"}
                  className="theme-btn2 cta-submit-btn"
                  style={{
                    opacity: status === "loading" ? 0.7 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? "Sending Message..." : "SEND MESSAGE"}
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
              <a href="https://wa.me/message/SLFQRAGU2NK6H1" target="_blank" rel="noopener noreferrer">
                WhatsApp <span style={{ fontSize: 13, transform: "rotate(45deg)", display: "inline-block" }}>↑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
