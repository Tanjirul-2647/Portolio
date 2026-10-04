export interface ProjectItem {
  id: string;
  title: string;
  category: "software" | "data-mining" | "seo";
  categoryLabel: string;
  summary: string;
  highlightMetric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  date: string;
  results: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "programmatic-seo-engine",
    title: "Programmatic SEO Architecture & Content Engine",
    category: "seo",
    categoryLabel: "Technical SEO & Architecture",
    summary:
      "A high-performance Next.js application that programmatically generates 1,200+ localized and schema-rich landing pages with zero layout shift and sub-80ms server response times.",
    highlightMetric: "+340%",
    metricLabel: "Organic Impressions Growth",
    challenge:
      "The client needed to capture thousands of long-tail search queries across diverse geographical regions without incurring duplicate content penalties or slowing down page rendering.",
    solution:
      "Engineered an automated dynamic routing pipeline in Next.js using Server-Side Generation with incremental regeneration. Generated custom JSON-LD schema entity graphs and localized content blocks based on structured database inputs.",
    keyFeatures: [
      "Dynamic nested JSON-LD schema markup with BreadcrumbList & LocalBusiness entities",
      "Automated XML sitemap splitting adhering to Google search index protocols",
      "Dynamic OpenGraph image generation using Next.js ImageResponse API",
      "Strict Core Web Vitals optimization achieving 99+ mobile Lighthouse scores"
    ],
    techStack: ["Next.js (App Router)", "TypeScript", "JSON-LD", "Tailored CSS", "Google Search Console API"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo-seo",
    featured: true,
    date: "2024",
    results: [
      "Scaled indexed URLs from 45 to 1,250 within 60 days",
      "Achieved average First Contentful Paint (FCP) of 0.6 seconds",
      "Over 45% of targeted long-tail keywords secured Page 1 Google rankings"
    ]
  },
  {
    id: "distributed-data-scraper",
    title: "Large-Scale E-Commerce Data Mining & Intelligence Pipeline",
    category: "data-mining",
    categoryLabel: "Data Mining & Automation",
    summary:
      "An automated distributed scraping engine built with Python and Puppeteer that extracts, deduplicates, and structures over 250,000 product pricing entries daily.",
    highlightMetric: "250K+",
    metricLabel: "Daily Records Parsed",
    challenge:
      "Target e-commerce sites utilized aggressive Cloudflare bot protection, dynamic client-side DOM rendering, and frequent markup adjustments, causing traditional scrapers to fail.",
    solution:
      "Designed a modular crawler pipeline utilizing headless browser instances with stealth evasion plugins, smart retry exponential backoff, rotating residential proxies, and automated HTML DOM tree normalization.",
    keyFeatures: [
      "Automated bot-detection evasion and headless user-agent spoofing",
      "Fault-tolerant job queue system with automatic retry and error isolation",
      "Pandas-driven data cleaning pipeline removing duplicates and standardizing currency/SKU schemas",
      "Automated export to PostgreSQL with indexed full-text search capability"
    ],
    techStack: ["Python", "Puppeteer", "Pandas", "PostgreSQL", "Regex Parsing", "Docker"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo-mining",
    featured: true,
    date: "2024",
    results: [
      "Reduced scraping failure rate from 28% to under 0.8%",
      "Processed 1.2M records monthly with automated weekly variance reports",
      "Saved 35+ hours of manual data collation per week for market analysts"
    ]
  },
  {
    id: "fullstack-analytics-platform",
    title: "NextTrack: Enterprise Analytics & Web Health Dashboard",
    category: "software",
    categoryLabel: "Software Engineering",
    summary:
      "A responsive, lightweight analytics dashboard delivering real-time Core Web Vitals diagnostics, crawl error alerts, and conversion funnel tracking with zero external tracking bloat.",
    highlightMetric: "<65ms",
    metricLabel: "Median API Response",
    challenge:
      "Off-the-shelf analytics suites (like GA4) added significant JavaScript overhead to client sites, directly dragging down Core Web Vitals and PageSpeed performance scores.",
    solution:
      "Built a custom privacy-friendly telemetry ingest pipeline using Next.js API route handlers, lightweight Beacon API dispatch, and optimized SQL aggregations rendered via responsive SVG charts.",
    keyFeatures: [
      "Zero-dependency lightweight tracking snippet (< 1.8KB gzipped)",
      "Real-time visual reporting of LCP, CLS, INP, and TTFB metrics",
      "Interactive time-series filtering and anomaly detection alerts",
      "Clean accessible UI designed with strict light-mode contrast standards"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Vanilla CSS", "SQL", "SVG Data Viz"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo-analytics",
    featured: true,
    date: "2023",
    results: [
      "Zero impact on host website Core Web Vitals scores",
      "Handled 50,000 telemetry events per hour during stress testing",
      "Adopted by 8 partner production sites for real-time latency monitoring"
    ]
  },
  {
    id: "nlp-sentiment-crawler",
    title: "Financial News Mining & Sentiment Extraction System",
    category: "data-mining",
    categoryLabel: "Data Mining & NLP",
    summary:
      "An automated NLP pipeline that crawls 15+ major financial publications, extracts ticker mentions, and computes real-time market sentiment distributions.",
    highlightMetric: "99.2%",
    metricLabel: "Entity Extraction Accuracy",
    challenge:
      "Financial articles frequently discuss multiple companies in a single paragraph, making accurate company-specific sentiment attribution difficult using naive keyword matching.",
    solution:
      "Developed a custom parsing tree with contextual sentence windowing and VADER sentiment scoring, cross-referenced with NASDAQ/NYSE ticker dictionaries for exact entity mapping.",
    keyFeatures: [
      "High-throughput RSS and direct article HTML text stripping",
      "Entity extraction with alias resolution (e.g., 'Alphabet' -> 'GOOGL')",
      "Automated daily sentiment trend score generation",
      "Interactive REST API endpoint for downstream algorithmic consumers"
    ],
    techStack: ["Python", "BeautifulSoup", "NLTK", "FastAPI", "SQLite", "JSON Schema"],
    githubUrl: "https://github.com",
    featured: false,
    date: "2023",
    results: [
      "Cataloged 8,000+ financial articles monthly",
      "Maintained 99.2% entity attribution accuracy across benchmark datasets",
      "Delivered sentiment updates within 90 seconds of news publication"
    ]
  },
  {
    id: "technical-seo-audit-suite",
    title: "Automated SEO Audit & Canonical Graph Checker",
    category: "seo",
    categoryLabel: "Technical SEO Tooling",
    summary:
      "A developer CLI and web audit interface that spider-crawls web applications to identify broken canonical loops, missing hreflang pairs, and unoptimized asset payloads.",
    highlightMetric: "1,000+",
    metricLabel: "Pages Audited in Under 45s",
    challenge:
      "Enterprise clients routinely launched new site sections with unnoticed redirect loops, missing canonical tags, and uncompressed hero images that hurt search crawl indexing.",
    solution:
      "Engineered an asynchronous crawler in Node.js that traverses the internal link graph, checks HTTP status codes, extracts meta tags, and generates an automated markdown audit report.",
    keyFeatures: [
      "Internal link graph traversal and orphaned page identification",
      "Hreflang language-alternate reciprocity verification",
      "Automated detection of render-blocking stylesheets and unoptimized images",
      "Export to executive PDF summary and actionable developer checklist"
    ],
    techStack: ["Node.js", "TypeScript", "Cheerio", "Puppeteer", "Commander.js"],
    githubUrl: "https://github.com",
    featured: false,
    date: "2023",
    results: [
      "Identified critical canonical loops on 4 enterprise web deployments",
      "Reduced pre-deployment SEO QA time from 6 hours to 10 minutes",
      "Utilized across 20+ client release cycles"
    ]
  },
  {
    id: "cloud-inventory-manager",
    title: "Enterprise Inventory & Order Management System",
    category: "software",
    categoryLabel: "Software Engineering",
    summary:
      "A robust web application featuring multi-warehouse inventory tracking, transactional order processing, and automated low-stock webhook notifications.",
    highlightMetric: "99.99%",
    metricLabel: "Transaction Consistency",
    challenge:
      "The business was experiencing inventory race conditions during peak flash sales when multiple customers attempted to purchase the last available stock simultaneously.",
    solution:
      "Implemented strict database ACID transactions with optimistic concurrency control and Redis distributed locking, paired with an intuitive Next.js management portal.",
    keyFeatures: [
      "ACID transactional order dispatch with inventory reservations",
      "Role-based access control (RBAC) with audit trail logging",
      "Interactive data grid with client-side sorting and CSV bulk export",
      "Instant push notifications via WebSockets on order status updates"
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "Vanilla CSS"],
    githubUrl: "https://github.com",
    featured: false,
    date: "2022",
    results: [
      "Eliminated stock overselling incidents completely (0 occurrences in 6 months)",
      "Processed 15,000 orders during Black Friday weekend with zero downtime",
      "Awarded top departmental project award"
    ]
  }
];
