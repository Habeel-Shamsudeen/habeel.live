import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "harmony-ai",
    companyName: "Harmony AI",
    positions: [
      {
        id: "harmony-ai-engineer-2026",
        title: "Software Engineer",
        employmentPeriod: {
          start: "04.2026",
          end: "06.2026",
        },
        employmentType: "Contract",
        icon: "code",
        description: `Built inventory planning and data infrastructure for manufacturing clients. Remote role with a US-based team.

- Developed a supply chain inventory forecasting system that combined Infor supply, demand, and burn-rate data to give teams a clearer view of material needs.
- Built a custom SQL Server change data capture (CDC) service to replicate data into PostgreSQL mirrors. Replaced managed Estuary sync pipelines to reduce infrastructure costs while preserving data parity.`,
        skills: [
          "TypeScript",
          "Hono",
          "React",
          "Drizzle ORM",
          "PostgreSQL",
          "SQL Server",
          "Change Data Capture",
          "Docker",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "oddsview",
    companyName: "OddsView (YC W24)",
    positions: [
      {
        id: "oddsview-dev-2025",
        title: "Software Developer",
        employmentPeriod: {
          start: "06.2025",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Worked on live sports data systems and cloud infrastructure for a sports analytics platform. Remote role with a New York-based team.

- Built an async Python scraper with sub-2-second latency across 8+ sports and 50+ leagues. Added parallel fetching, lifecycle automation, and Prometheus monitoring for live arbitrage detection.
- Split a monolithic AWS CDK stack into modular deployment units, reducing deployment time by 70% and making service-level changes easier.
- Replaced Kafka ingestion with gRPC streaming and Protocol Buffers, using connection pooling and batching to cut ingestion latency by 40%.
- Built a FastAPI service to consolidate live-game metadata in Redis. Reduced expected-value and arbitrage compute costs by 60% with controlled market scans and shared metadata.`,
        skills: [
          "Python",
          "Web Scraping",
          "gRPC",
          "Protocol Buffers",
          "FastAPI",
          "Redis",
          "Prometheus",
          "Docker",
          "AWS CDK",
          "AWS ECS",
          "AWS ECR",
          "Shell Scripting",
          "Infrastructure as Code",
          "Deployment Optimization",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "youseai",
    companyName: "YouseAI",
    positions: [
      {
        id: "youseai-intern-2024",
        title: "Software Developer Intern",
        employmentPeriod: {
          start: "10.2024",
          end: "01.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `Improved onboarding and product workflows for an AI SaaS application.

- Improved onboarding engagement by 40% through passwordless login and changes to the first-time user flow.
- Reduced avatar creation time by 60% using preset models stored in Azure Storage.
- Added product analytics with PostHog and fixed 15+ frontend bugs across key user workflows.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Prisma",
          "Azure Storage",
          "PostHog",
          "Frontend Architecture",
          "UI Optimization",
        ],
        isExpanded: true,
      },
    ],
  },
];
