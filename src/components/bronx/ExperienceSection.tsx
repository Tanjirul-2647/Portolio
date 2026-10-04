import React from "react";

interface ProjectExperience {
  domain: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
}

const experiences: ProjectExperience[] = [
  {
    domain: "ARTIFICIAL INTELLIGENCE & AGENTIC SYSTEMS",
    title: "NEURALFLOW — MULTI-AGENT LLM ORCHESTRATION",
    period: "2024 - PRESENT",
    description:
      "Architected autonomous multi-agent systems with tool-calling capabilities, semantic vector retrieval (Pinecone/pgvector), and low-latency streaming inference pipelines. Streamlined automated data pipelines and contextual decision engines, reducing operational workflow latency by 75%.",
    tags: ["Agentic Workflows", "Vector RAG", "Python / FastAPI", "LangChain", "Next.js"],
  },
  {
    domain: "BLOCKCHAIN & WEB3 DECENTRALIZATION",
    title: "AETHER PROTOCOL — ZERO-KNOWLEDGE DEFI DAPP",
    period: "2023 - 2024",
    description:
      "Engineered secure, gas-optimized Solidity smart contracts and an intuitive Web3 decentralized interface using Wagmi, Viem, and Ethers.js. Integrated zero-knowledge verification mechanisms, real-time on-chain transaction indexing, and trustless multi-wallet connectivity.",
    tags: ["Solidity", "EVM Smart Contracts", "Web3 / Viem", "Zero-Knowledge", "DeFi Architecture"],
  },
  {
    domain: "FULL-STACK WEB PLATFORMS & CLOUD",
    title: "NEXUS HYBRID CLOUD — REAL-TIME TELEMETRY ENGINE",
    period: "2023 - PRESENT",
    description:
      "Built a high-concurrency cloud telemetry and analytics platform streaming live WebSocket metrics with sub-50ms render latency. Implemented optimistic UI updates, edge caching, serverless microservices, and programmatic SEO architecture scaling to high-volume user traffic.",
    tags: ["Next.js / React", "TypeScript", "WebSocket Streaming", "PostgreSQL", "Edge Functions"],
  },
  {
    domain: "MOBILE & CROSS-PLATFORM APPLICATIONS",
    title: "PULSE SYNAPSE — REAL-TIME COLLABORATIVE APP",
    period: "2022 - 2023",
    description:
      "Designed and shipped an offline-first cross-platform mobile application for iOS & Android featuring local SQLite sync with Conflict-free Replicated Data Types (CRDTs), biometric authentication, and fluid 120fps gesture micro-interactions for creative teams.",
    tags: ["React Native", "TypeScript", "CRDTs / Offline Sync", "Gesture Handler", "Mobile UI/UX"],
  },
];

export function ExperienceSection() {
  return (
    <section className="sticky-split-sec" id="experience">
      <div className="sticky-split-row">
        <div className="sticky-split-left">
          <h3>
            PROJECT <br /> EXPERIENCE
          </h3>
        </div>

        <div className="sticky-split-right">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience2-box">
              <div className="experience2-box-header">{exp.domain}</div>
              <div className="experience2-box-body">
                <h4>
                  {exp.title} <span>{exp.period}</span>
                </h4>
                <p>{exp.description}</p>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="experience2-tags">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="experience2-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
