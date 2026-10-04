"use client";

import React, { useState } from "react";
import { Header } from "@/components/bronx/Header";
import { PopupMenu } from "@/components/bronx/PopupMenu";
import { HeroSection } from "@/components/bronx/HeroSection";
import { FullImageShowcase } from "@/components/bronx/FullImageShowcase";
import { FeaturedWork } from "@/components/bronx/FeaturedWork";
import { AboutSection } from "@/components/bronx/AboutSection";
import { PartnerMarquee } from "@/components/bronx/PartnerMarquee";
import { ExpertiseSection } from "@/components/bronx/ExpertiseSection";
import { MotivationSection } from "@/components/bronx/MotivationSection";
import { ExperienceSection } from "@/components/bronx/ExperienceSection";
import { FavouriteStackSection } from "@/components/bronx/FavouriteStackSection";
import { AwardsSection } from "@/components/bronx/AwardsSection";
import { TestimonialsSection } from "@/components/bronx/TestimonialsSection";
import { FaqSection } from "@/components/bronx/FaqSection";
import { CtaSection } from "@/components/bronx/CtaSection";
import { BronxFooter } from "@/components/bronx/Footer";

import { useLenis } from "lenis/react";

export default function BronxHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavigate = (targetId: string) => {
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -60, duration: 1.25 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <main className="bronx-main-wrap" style={{ minHeight: "100vh", position: "relative" }}>
      {/* 1. Sticky Navigation Header */}
      <Header
        onOpenMenu={() => setMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Fullscreen Popup Menu */}
      <PopupMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* 1. HOME: Hero Section */}
      <HeroSection onNavigate={handleNavigate} />

      {/* 2. WORK: Featured Work Section */}
      <FeaturedWork />

      {/* 3. EXPERIENCE: Experience Section & Awards */}
      <ExperienceSection />
      <AwardsSection />

      {/* 4. EXPERTISE: My Expertise Section */}
      <ExpertiseSection onNavigate={handleNavigate} />

      {/* 5. STACK: Favourite Stack Section, Partner Marquee & Visual Showcase */}
      <FavouriteStackSection />
      <PartnerMarquee />
      <FullImageShowcase
        src="/images/bronx/banner-2.jpg"
        alt="Architectural visual showcase"
      />

      {/* 6. ABOUT: About Section & Motivation */}
      <AboutSection />
      <MotivationSection />

      {/* 7. TESTIMONIAL: Testimonials Section & Visual Showcase */}
      <TestimonialsSection />
      <FullImageShowcase
        src="/images/bronx/banner-3.png"
        alt="Creative direction and design details"
      />

      {/* 8. FAQ: Frequently Asked Questions Section */}
      <FaqSection />

      {/* 9. CONTACT: Call To Action Section & Footer */}
      <CtaSection onNavigate={handleNavigate} />
      <BronxFooter />
    </main>
  );
}
