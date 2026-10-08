import React from "react";
import Image from "next/image";

interface Testimonial {
  author: string;
  role: string;
  avatar: string;
  logo: string;
  quote: string;
}

const testimonialsRail1: Testimonial[] = [
  {
    author: "Tanvir Ahmed",
    role: "Founder & CEO, NexaSprint Labs",
    avatar: "/images/testimonials/tanvir-ahmed.jpg",
    logo: "/images/testimonials/logo-nexasprint.svg",
    quote: "Tanjirul revamped our entire SaaS product dashboard into an ultra-fast, intuitive web experience. Our client onboarding completion surged by 45% within three weeks. His command of Next.js architecture and brutalist aesthetic is simply world-class.",
  },
  {
    author: "Priya Sharma",
    role: "Head of Product, Veloce Commerce",
    avatar: "/images/testimonials/priya-sharma.jpg",
    logo: "/images/testimonials/logo-veloce.svg",
    quote: "We brought Tanjirul in to overhaul our D2C e-commerce frontend. He delivered pixel-perfect responsive layouts with micro-interactions that feel like a high-end native iOS app. Mobile checkout conversion jumped by 38% post-launch.",
  },
  {
    author: "Farhan Kabir",
    role: "Creative Director, Bengal Studio",
    avatar: "/images/testimonials/farhan-kabir.jpg",
    logo: "/images/testimonials/logo-bengal.svg",
    quote: "Working with Tanjirul was effortless. He bridged the gap between our bold brand vision and production-grade frontend engineering seamlessly. Every hover state, typographic hierarchy, and motion transition was executed with obsessive precision.",
  },
];

const testimonialsRail2: Testimonial[] = [
  {
    author: "Rohan Mukherjee",
    role: "Co-Founder & CTO, DevSynapse",
    avatar: "/images/testimonials/rohan-mukherjee.jpg",
    logo: "/images/testimonials/logo-devsynapse.svg",
    quote: "Finding a designer who understands state management, server components, and performance optimization this deeply is rare. Tanjirul delivered clean, maintainable code that our engineering team integrated seamlessly without any tech debt.",
  },
  {
    author: "Nusrat Jahan",
    role: "Managing Director, CraftRoots",
    avatar: "/images/testimonials/nusrat-jahan.jpg",
    logo: "/images/testimonials/logo-craftroots.svg",
    quote: "From initial wireframes to production deployment, Tanjirul blew past our benchmarks. The website loads in milliseconds, and the bold design gave our lifestyle brand an immediate international edge that our clients constantly compliment.",
  },
  {
    author: "Aditya Mehta",
    role: "Principal & Founder, ApexGrowth",
    avatar: "/images/testimonials/aditya-mehta.jpg",
    logo: "/images/testimonials/logo-apexgrowth.svg",
    quote: "Tanjirul is our go-to partner for premium client web builds. His rapid turnaround, proactive communication, and ability to convert complex creative briefs into high-converting interfaces make him an invaluable asset for any growing brand.",
  },
];

export function TestimonialsSection() {
  const rail1 = [...testimonialsRail1, ...testimonialsRail1, ...testimonialsRail1];
  const rail2 = [...testimonialsRail2, ...testimonialsRail2, ...testimonialsRail2];

  return (
    <section className="testimonial-sec" id="testimonials">
      <div className="section-header3">
        <h3 className="title">
          <span>TRUSTED BY</span>
          <span>FOUNDERS & AGENCIES</span>
        </h3>
      </div>

      <div className="testimonial-track-wrap">
        {/* Rail 1: Leftward */}
        <div className="testimonial-track track-left">
          {rail1.map((item, idx) => (
            <div key={`r1-${idx}`} className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-author-box">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={56}
                    height={56}
                  />
                  <div className="testimonial-author-content">
                    <h4>{item.author}</h4>
                    <h5>{item.role}</h5>
                  </div>
                </div>

                <div className="testimonial-logo">
                  <Image
                    src={item.logo}
                    alt="Brand logo"
                    width={80}
                    height={28}
                  />
                </div>
              </div>

              <div className="testimonial-content">
                <p>&quot;{item.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rail 2: Rightward */}
        <div className="testimonial-track track-right">
          {rail2.map((item, idx) => (
            <div key={`r2-${idx}`} className="testimonial-box">
              <div className="testimonial-header">
                <div className="testimonial-author-box">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={56}
                    height={56}
                  />
                  <div className="testimonial-author-content">
                    <h4>{item.author}</h4>
                    <h5>{item.role}</h5>
                  </div>
                </div>

                <div className="testimonial-logo">
                  <Image
                    src={item.logo}
                    alt="Brand logo"
                    width={80}
                    height={28}
                  />
                </div>
              </div>

              <div className="testimonial-content">
                <p>&quot;{item.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
