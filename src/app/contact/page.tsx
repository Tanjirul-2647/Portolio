"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    opportunityType: "Full-Time Software Engineer Role",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters of detail";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    });
  };

  const faqs = [
    {
      q: "What is your immediate employment availability?",
      a: "Immediately available for full-time engineering engagements, contract-to-hire, or direct hire placement."
    },
    {
      q: "Are you open to remote or hybrid arrangements?",
      a: "Yes. Fully equipped for remote development with domestic and international timezones, and open to hybrid or on-site arrangements."
    },
    {
      q: "Can you provide references and code repositories?",
      a: "Yes. Thorough architectural code walkthroughs, GitHub repositories, and past client recommendations are available upon request."
    }
  ];

  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <div className="section-header left-aligned">
            <span className="section-tagline">Direct Inbound</span>
            <h1 className="section-title">Initiate a Conversation</h1>
            <p className="section-description">
              Looking for a disciplined Junior Software Developer with specialized SEO and Data Mining capabilities? Let&apos;s connect.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className={`container ${styles.contactGrid}`}>
          {/* Left Column: Contact Form */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Inquiry Received</h3>
                <p className={styles.successDesc}>
                  Thank you for reaching out, {formData.name}. Your message has been logged. I usually review and respond to inquiries within 12 to 24 business hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      opportunityType: "Full-Time Software Engineer Role",
                      message: ""
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: "1.75rem" }}>
                  <h2 className={styles.formTitle}>Send a Message</h2>
                  <p className={styles.formSubtitle}>
                    Fill out the form below or reach out directly via email or LinkedIn.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.input}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Work Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.input}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="opportunityType" className={styles.label}>
                      Opportunity Category
                    </label>
                    <select
                      id="opportunityType"
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className={styles.select}
                    >
                      <option value="Full-Time Software Engineer Role">Full-Time Software Engineer Role</option>
                      <option value="Technical SEO Architecture Project">Technical SEO Architecture Project</option>
                      <option value="Data Mining & Web Scraping Pipeline">Data Mining & Web Scraping Pipeline</option>
                      <option value="Technical Interview / Discussion">Technical Interview / Discussion</option>
                      <option value="Other Inbound Inquiry">Other Inbound Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Project Scope or Message <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your team, timeline, or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.textarea}
                    />
                    {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    Transmit Message →
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Hiring FAQ */}
          <div className={styles.sidebar}>
            {/* Direct Info Card */}
            <div className={styles.directCard}>
              <h3 className={styles.directTitle}>Direct Channels</h3>

              <div className={styles.emailCopyBox}>
                <span className={styles.emailText}>{portfolioData.profile.email}</span>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {emailCopied ? "Copied!" : "Copy"}
                </button>
              </div>

              <ul className={styles.channelList}>
                <li className={styles.channelItem}>
                  <div className={styles.channelIcon}>💼</div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelLabel}>LinkedIn</span>
                    <a
                      href={portfolioData.profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.channelVal}
                    >
                      Connect on LinkedIn ↗
                    </a>
                  </div>
                </li>

                <li className={styles.channelItem}>
                  <div className={styles.channelIcon}>🐙</div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelLabel}>GitHub</span>
                    <a
                      href={portfolioData.profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.channelVal}
                    >
                      Inspect Repositories ↗
                    </a>
                  </div>
                </li>

                <li className={styles.channelItem}>
                  <div className={styles.channelIcon}>⏱️</div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelLabel}>Response Commitment</span>
                    <span className={styles.channelVal}>Within 24 Hours</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hiring Manager FAQ */}
            <div className={styles.faqCard}>
              <h3 className={styles.faqTitle}>Hiring FAQ</h3>
              {faqs.map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <span className={styles.faqQuestion}>{f.q}</span>
                  <p className={styles.faqAnswer}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
