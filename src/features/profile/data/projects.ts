import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "gradeit",
    title: "GradeIT",
    period: {
      start: "02.2025",
    },
    link: "https://gradeit.habeel.live",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Judge0",
      "Groq",
    ],
    description: `An automated code grading platform designed to simplify evaluation for faculty and improve feedback quality.
- 🚀 Reduced manual grading time by over 70% using a secure, sandboxed execution environment.
- 🧠 Integrated Judge0 with a custom execution server for multi-language support (Python, Java, C++) achieving 90% grading accuracy.
- 🤖 Used LLM APIs for automatic test case generation, reducing faculty effort by 50% while increasing code quality and edge case coverage.
- 📊 Built interactive dashboards for real-time student progress tracking, reducing faculty oversight needs by 50%.`,
    // logo: "https://your-logo-link.com",
    isExpanded: true,
  },
  {
    id: "vserv",
    title: "VServ",
    period: {
      start: "10.2024",
      end: "11.2024",
    },
    link: "https://vserv.habeel.live", 
    skills: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    description: `A role-based vehicle service management system for workshops.
- 🔐 Developed secure multi-role authentication using NextAuth across Admin, Customer, and Mechanic views.
- 📈 Designed admin dashboards for tracking service statistics and work assignments, reducing manual coordination by 60%.
- 🛠️ Enhanced workshop efficiency by 40% with streamlined service scheduling, payment handling, and improved UX.`,
    // logo: "https://your-logo-link.com", // 🔁 Replace with logo if available
    isExpanded: true,
  },
  {
    id: "taskflow",
    title: "TaskFlow",
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
    description: `A minimalist task management application with a focus on productivity and UI responsiveness.
- 🧩 Built custom drag-and-drop functionality using React Beautiful DnD for seamless task reordering.
- 🔐 Implemented JWT-based authentication and session handling with full CRUD operations.
- 📱 Designed a responsive, mobile-friendly UI for real-time updates and 25% boost in task completion.`,
    // logo: "https://your-logo-link.com", // 🔁 Replace with logo if available
    isExpanded: true,
  },
  {
    id: "exchange-orderbook",
    title: "Exchange Order Book",
    period: {
      start: "04.2025",
      end: "05.2025",
    },
    link: "https://github.com/Habeel-Shamsudeen/Exchange-OrderBook",
    skills: ["Node.js", "Express"],
    description: `A simple simulation of an exchange order book system.
- 💱 Supports placing of limit orders (buy/sell) and automatic order matching.
- 📘 Exposes API for viewing order book depth and tracking user balances.
- ⚙️ Uses in-memory data structures for fast, database-free simulation.`,
    isExpanded: true,
  },
];
