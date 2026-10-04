export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  tag: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  badge: string;
  accent: "cobalt" | "emerald" | "purple";
  skills: SkillItem[];
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "experience" | "education" | "certification";
  description: string[];
  skills: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export const portfolioData = {
  profile: {
    fullName: "Alex Mercer", // Placeholder name, easily configurable
    title: "Junior Software Developer | SEO Expert | Data Mining Specialist",
    shortRole: "Software & Data Engineer",
    heroHeadline: "Building High-Impact Software Powered by Data Mining & Programmatic SEO",
    heroSubheadline:
      "A dual-discipline engineer bridging robust software architecture, automated data extraction pipelines, and high-performance search engine optimization to deliver scalable business outcomes.",
    status: "Available for Full-Time Roles",
    location: "Remote / Open to Relocation",
    email: "tanjirul.islam.256@gmail.com",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/tanjirul-islam-220b74440",
    avatarUrl: "/images/avatar-placeholder.svg",
    bio: [
      "I am a results-oriented Junior Software Developer with specialized expertise in technical SEO architecture and automated data mining systems. By combining standard full-stack development with computational data extraction and search indexing principles, I build software that does not merely function—it ranks, scales, and delivers quantifiable business value.",
      "My engineering philosophy revolves around three tenets: write type-safe, maintainable code; measure performance with objective metrics (Core Web Vitals, API response latency, and crawl efficiency); and treat data pipelines as first-class citizens in modern web platforms.",
      "Whether developing scalable Next.js applications, building distributed web scrapers handling millions of rows, or architecting schema markup that scales organic traffic, I bring rigorous engineering practices and data-driven discipline to high-growth engineering teams."
    ]
  },

  stats: [
    {
      id: "stat-1",
      value: "100/100",
      label: "Lighthouse Performance & SEO",
      sublabel: "Strict Core Web Vitals optimization"
    },
    {
      id: "stat-2",
      value: "1.2M+",
      label: "Data Records Extracted & Cleaned",
      sublabel: "Across distributed scraping pipelines"
    },
    {
      id: "stat-3",
      value: "+340%",
      label: "Organic Traffic Acceleration",
      sublabel: "Via programmatic SEO and schema hierarchy"
    },
    {
      id: "stat-4",
      value: "<85ms",
      label: "Average Query Latency",
      sublabel: "Optimized indexing & data caching"
    }
  ] as StatItem[],

  pillars: [
    {
      id: "software-dev",
      title: "Software Engineering",
      badge: "Core Discipline",
      accent: "cobalt",
      description:
        "Architecting clean, type-safe frontend and backend systems with Next.js, React, Node.js, and TypeScript. Committed to modern modular design, component reusability, and rock-solid unit reliability.",
      highlights: [
        "Component-Driven UI/UX Architecture",
        "RESTful & Microservice API Design",
        "State Management & Async Data Caching",
        "Strict TypeScript Type Safety"
      ]
    },
    {
      id: "data-mining",
      title: "Data Mining & Extraction",
      badge: "Data Systems",
      accent: "purple",
      description:
        "Engineering automated web scraping pipelines, structured ETL workflows, and intelligent data cleaning systems. Transforming unstructured web data into actionable tabular intelligence.",
      highlights: [
        "Headless Scraping (Puppeteer & BeautifulSoup)",
        "Rate-Limiting & Proxy Rotation Architectures",
        "Data Deduplication & NLP Cleaning",
        "Automated Export to SQL & JSON Warehouses"
      ]
    },
    {
      id: "seo-expert",
      title: "Technical SEO & Web Performance",
      badge: "Organic Growth",
      accent: "emerald",
      description:
        "Applying software engineering rigor to search visibility. Designing programmatic schema hierarchies, optimizing crawl budgets, and achieving perfect Core Web Vitals scores.",
      highlights: [
        "Programmatic Dynamic Page Generation",
        "Schema.org (JSON-LD) Entity Graphing",
        "Core Web Vitals (LCP, FID, CLS) Tuning",
        "Search Console & Crawl Budget Audits"
      ]
    }
  ],

  skillCategories: [
    {
      title: "Software Development & Languages",
      badge: "Engineering",
      accent: "cobalt",
      description: "Modern languages, frameworks, and web platform standards.",
      skills: [
        { name: "TypeScript / JavaScript (ES6+)", level: 90, tag: "Primary", description: "Strict typing, async pipelines, closures, and modern standards." },
        { name: "Next.js & React", level: 88, tag: "Framework", description: "App Router, Server/Client components, SSR, SSG, and route handlers." },
        { name: "Node.js & Express", level: 82, tag: "Backend", description: "REST APIs, middleware pipelines, authentication, and file processing." },
        { name: "HTML5 / Modern CSS", level: 95, tag: "Frontend", description: "Semantic markup, CSS custom properties, responsive layout grids, WCAG AA." },
        { name: "SQL & Relational Databases", level: 80, tag: "Database", description: "PostgreSQL, MySQL, indexing optimization, normalization." }
      ]
    },
    {
      title: "Data Mining, Scraping & Analysis",
      badge: "Data Pipelines",
      accent: "purple",
      description: "Automated extraction, data parsing, transformation, and pattern discovery.",
      skills: [
        { name: "Python (BeautifulSoup, Scrapy)", level: 88, tag: "Scraping", description: "High-volume DOM extraction, regex parsing, session management." },
        { name: "Puppeteer / Playwright", level: 84, tag: "Automation", description: "Headless browser automation, dynamic SPA scraping, bot evasion." },
        { name: "Data Cleaning & Pandas", level: 80, tag: "ETL", description: "Data deduplication, handling missing values, vector normalization." },
        { name: "Text Mining & Sentiment Analysis", level: 75, tag: "NLP", description: "Keyword clustering, entity recognition, frequency distribution." },
        { name: "Automated ETL Pipelines", level: 82, tag: "Architecture", description: "Batch scheduling, data validation schemas, error recovery." }
      ]
    },
    {
      title: "Technical SEO & Search Architecture",
      badge: "Search Systems",
      accent: "emerald",
      description: "Engineering-grade search engine optimization and speed benchmarks.",
      skills: [
        { name: "Core Web Vitals & Speed Optimization", level: 95, tag: "Performance", description: "Sub-second LCP, zero CLS, script deferral, critical CSS." },
        { name: "Schema.org & JSON-LD Structured Data", level: 92, tag: "Rich Snippets", description: "Article, Product, Organization, BreadcrumbList, and FAQ entity mapping." },
        { name: "Programmatic SEO Architecture", level: 86, tag: "Scalability", description: "Generating thousands of index-ready, uniquely valuable landing pages." },
        { name: "Crawl Budget & Sitemap Optimization", level: 88, tag: "Auditing", description: "Robots.txt logic, canonical mapping, 301 redirect trees, indexation controls." },
        { name: "SEO Tooling (Search Console, Screaming Frog)", level: 85, tag: "Diagnostics", description: "Deep-crawl diagnostics, keyword gap detection, search query analysis." }
      ]
    }
  ] as SkillCategory[],

  timeline: [
    {
      period: "2023 – Present",
      role: "Junior Software & Data Mining Developer",
      company: "DataTech Solutions (Contract / Project-Based)",
      location: "Remote",
      type: "experience",
      description: [
        "Engineered automated scraping infrastructure gathering competitor pricing across 12 e-commerce platforms, cataloging 150k+ products weekly.",
        "Refactored company client dashboard into Next.js, cutting page load time by 62% and achieving top-tier Lighthouse audit scores.",
        "Implemented programmatic SEO landing page generation resulting in a 210% increase in indexed search impressions within four months."
      ],
      skills: ["Next.js", "TypeScript", "Python", "Puppeteer", "PostgreSQL", "SEO"]
    },
    {
      period: "2022 – 2023",
      role: "SEO & Web Analytics Specialist",
      company: "Apex Digital Agency",
      location: "Hybrid",
      type: "experience",
      description: [
        "Conducted in-depth technical audits for 18 enterprise clients focusing on Core Web Vitals, mobile viewport parity, and crawl budget bottlenecks.",
        "Authored structured JSON-LD entity graphs that secured Google Rich Snippets for over 40 high-value target search terms.",
        "Built automated Python scripts to pull daily Google Search Console API metrics, flagging sudden keyword volatility 48 hours faster than manual checks."
      ],
      skills: ["Python", "Google Search Console API", "JSON-LD", "Core Web Vitals", "Screaming Frog"]
    },
    {
      period: "2020 – 2024",
      role: "Bachelor of Science in Computer Science",
      company: "State University of Technology",
      location: "Graduated with Honors",
      type: "education",
      description: [
        "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Architecture, Data Mining & Information Retrieval.",
        "Senior Capstone: Built a distributed web crawler and sentiment analysis engine assessing news sentiment impact on stock indices."
      ],
      skills: ["Algorithms", "Data Mining", "Database Systems", "Software Engineering"]
    }
  ] as TimelineItem[]
};
