export interface PipelineStep {
  stepNumber: string;
  name: string;
  category: "ingest" | "process" | "storage";
  description: string;
  tools: string[];
  outputType: string;
  specs: string;
}

export interface SeoAuditMetric {
  metric: string;
  score: string;
  benchmark: string;
  status: "optimal" | "good" | "needs-attention";
  explanation: string;
}

export const showcaseData = {
  seoMetrics: [
    {
      metric: "Largest Contentful Paint (LCP)",
      score: "0.62s",
      benchmark: "< 2.5s (Google Good)",
      status: "optimal",
      explanation: "Zero render-blocking web fonts, inline critical CSS custom properties, and static SSR document dispatch."
    },
    {
      metric: "Cumulative Layout Shift (CLS)",
      score: "0.000",
      benchmark: "< 0.1 (Google Good)",
      status: "optimal",
      explanation: "Explicit width/height aspect ratios on all visual containers, zero asynchronous DOM layout reflows."
    },
    {
      metric: "Interaction to Next Paint (INP)",
      score: "32ms",
      benchmark: "< 200ms (Google Good)",
      status: "optimal",
      explanation: "Pure vanilla JavaScript event handling without heavy runtime overhead or bloated third-party trackers."
    },
    {
      metric: "Time to First Byte (TTFB)",
      score: "48ms",
      benchmark: "< 800ms (Google Good)",
      status: "optimal",
      explanation: "Static HTML pre-generation deployed to edge CDN nodes worldwide with instant cache invalidation."
    }
  ] as SeoAuditMetric[],

  jsonLdExample: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://example.com/#person",
      "name": "Alex Mercer",
      "jobTitle": "Software Developer & SEO Specialist",
      "url": "https://example.com",
      "sameAs": [
        "https://github.com",
        "https://linkedin.com"
      ],
      "knowsAbout": [
        "Software Engineering",
        "Data Mining",
        "Search Engine Optimization",
        "Next.js",
        "Core Web Vitals"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com",
      "name": "Alex Mercer - Professional Engineering Portfolio",
      "publisher": { "@id": "https://example.com/#person" }
    }
  ]
}`,

  pipelineSteps: [
    {
      stepNumber: "01",
      name: "Target Discovery & Spidering",
      category: "ingest",
      description: "Automated site map traversal and frontier URL queuing with polite robots.txt adherence and rate limiting.",
      tools: ["Python", "Cheerio", "URL Frontier Queue"],
      outputType: "Raw URL Queue",
      specs: "1,500 URLs/min throughput with domain-level concurrency throttling"
    },
    {
      stepNumber: "02",
      name: "Dynamic Rendering & Anti-Bot Evasion",
      category: "ingest",
      description: "Headless Chromium execution simulating real human browsing patterns, fingerprint randomization, and rotating proxies.",
      tools: ["Puppeteer Stealth", "Residential Proxy Pool", "Chromium"],
      outputType: "Rendered HTML DOM",
      specs: "99.2% bypass rate on Cloudflare & PerimeterX challenges"
    },
    {
      stepNumber: "03",
      name: "DOM Parsing & Pattern Extraction",
      category: "process",
      description: "Contextual XPath and CSS selector targeting, extracting pricing, SKU data, inventory levels, and metadata.",
      tools: ["BeautifulSoup4", "Regex Transformers", "JSON-LD Parser"],
      outputType: "Semi-Structured JSON",
      specs: "Sub-5ms regex extraction per document tree"
    },
    {
      stepNumber: "04",
      name: "Data Cleaning, Normalization & NLP",
      category: "process",
      description: "Currency unification, duplicate resolution, outlier detection, and contextual text sentiment tagging.",
      tools: ["Pandas", "NumPy", "TextBlob / NLTK"],
      outputType: "Validated Tabular Data",
      specs: "Strict Pydantic schema validation with 0% data leakage"
    },
    {
      stepNumber: "05",
      name: "Warehouse Storage & API Syndication",
      category: "storage",
      description: "Batch upserting into relational PostgreSQL storage with indexed search trees and instant webhook dispatch.",
      tools: ["PostgreSQL", "Redis Cache", "FastAPI / Next.js"],
      outputType: "Queryable Production DB",
      specs: "ACID compliance with sub-25ms read queries for client dashboards"
    }
  ] as PipelineStep[]
};
