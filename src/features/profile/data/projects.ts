import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "loopautomata",
    title: "LoopAutomata",
    period: {
      start: "02.2026",
      end: "04.2026",
    },
    summary: "AI video production, from brief to review and publishing.",
    skills: [
      "Next.js",
      "Express",
      "Python",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "BullMQ",
      "R2 / S3",
    ],
    description: `I built a video operations platform where users can review scripts, generate scenes, edit storyboards, and review rendered videos before publishing.

- Built a queue-driven pipeline with BullMQ, Redis, and Python workers for scripts, assets, scenes, stitching, and thumbnails.
- Added live progress through server-sent events (SSE), retries, and stale-job timeouts so users can follow long-running generation jobs and recover from failures.
- Implemented R2/S3 asset storage and credit escrow/refunds alongside the Next.js application and Express backend.`,
    isExpanded: true,
  },
  {
    id: "gradeit",
    title: "GradeIT",
    period: {
      start: "01.2025",
      end: "03.2025",
    },
    summary: "Automated code evaluation and feedback for faculty and students.",
    link: "https://grade-it-ten.vercel.app/",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Judge0",
      "Groq",
    ],
    description: `I built a code grading platform to help faculty evaluate submissions and give students feedback with less manual work.

- Reduced manual grading time by over 70% through sandboxed code execution, multi-language evaluation, and AI-generated test cases.
- Integrated Judge0 and LLM APIs for code execution and test case generation.
- Built progress dashboards, Google OAuth login, and role-based access for faculty and students.`,
    isExpanded: true,
  },
  {
    id: "vserv",
    title: "VServ",
    summary: "Vehicle service scheduling and workshop management.",
    period: {
      start: "10.2024",
      end: "11.2024",
    },
    link: "https://vserv.habeel.live",
    skills: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    description: `I built a workshop management application with separate views for customers, mechanics, and administrators.

- Implemented multi-role authentication with NextAuth.
- Built admin dashboards for service statistics and work assignments.
- Added service scheduling and payment handling to support the workshop workflow.`,
    isExpanded: false,
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    summary: "Task management with drag-and-drop organization.",
    period: {
      start: "09.2024",
      end: "10.2024",
    },
    link: "https://habeelstodoapp.vercel.app/",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    description: `I built a responsive task management application for organizing and updating day-to-day work.

- Added drag-and-drop task ordering with React Beautiful DnD.
- Implemented JWT authentication, session handling, and task creation, editing, and deletion.
- Built layouts for desktop and mobile use.`,
    isExpanded: false,
  },
  {
    id: "exchange-orderbook",
    title: "Exchange Order Book",
    summary: "An exchange simulation with limit orders and order matching.",
    period: {
      start: "04.2025",
      end: "05.2025",
    },
    link: "https://github.com/Habeel-Shamsudeen/Exchange-OrderBook",
    skills: ["Node.js", "Express"],
    description: `I built an exchange order book simulation to explore order matching and trading APIs.

- Implemented buy and sell limit orders with automatic matching.
- Exposed APIs for order book depth and user balances.
- Used in-memory data structures to run the simulation without a database.`,
    isExpanded: false,
  },
];
