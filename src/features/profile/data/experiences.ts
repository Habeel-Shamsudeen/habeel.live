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
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed Python-based web scrapers to collect and analyze real-time betting data.
- Optimized infrastructure and deployment workflows using AWS CDK for scalable and maintainable environments.
- Collaborated with backend and DevOps teams to ensure efficient and cost-effective cloud deployments.`,
        skills: [
          "Python",
          "TypeScript",
          "Web Scraping",
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
