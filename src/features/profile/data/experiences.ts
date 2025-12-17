import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "oddsview",
    companyName: "Oddsview (YC W24)",
    positions: [
      {
        id: "oddsview-dev-2025",
        title: "Software Engineer",
        employmentPeriod: {
          start: "07.2025",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built a high-throughput async Python scraper with sub-2s latency, adding parallel fetching, lifecycle automation, and Prometheus metrics for real-time arbitrage detection.
- Refactored AWS CDK from a monolithic stack into modular deployable units, reducing deployment time by 70%, improving infra maintainability, and enabling faster service-level iterations.
- Replaced Kafka ingestion with gRPC streaming using Protocol Buffers, connection pooling, and intelligent batching, cutting ingestion latency by 60% and simplifying the distributed system architecture.
- Developed a FastAPI Service aggregating livegames metadata with Redis-backed data storage, reducing EV/arbitrage compute cost by 80% via controlled 1/sec market scans and backend-side metadata consolidation.
`,
        skills: [
          "Python",
          "TypeScript",
          "Web Scraping",
          "gRPC",
          "FastAPI",
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
    isCurrentEmployer: true,
  },
  {
    id: "youseai",
    companyName: "YouseAI",
    positions: [
      {
        id: "youseai-intern-2024",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "10.2024",
          end: "01.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Increased user engagement by 40% by building a passwordless OTP login and streamlining the onboarding flow for an AI SaaS platform.
- Reduced avatar creation time by 60% with Azure Storage–based preset model logic.
- Integrated application-wide analytics using PostHog and resolved 15+ critical frontend bugs to improve performance and reliability.
- Architected the frontend for a LinkedIn automation tool using React, improving load times by 40% and engagement metrics by 25%.`,
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
