import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "react-wheel-picker",
    title: "React Wheel Picker",
    period: {
      start: "05.2025",
    },
    link: "https://react-wheel-picker.chanhdai.com",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
    ],
    description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.
- 📱 Natural touch scrolling with smooth inertia effect
- 🖱️ Mouse drag and scroll support for desktop
- 🔄 Infinite loop scrolling
- 🎨 Unstyled components for complete style customization
- ⚡️ Easy installation via shadcn CLI

This project is proudly supported by:

[![Vercel OSS Program](https://vercel.com/oss/program-badge.svg)](https://vercel.com/oss)
`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "chanhdaidotcom",
    title: "chanhdai.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/ncdai/chanhdai.com",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal portfolio, component registry, and blog.
- Clean & modern design
- Light & Dark theme support
- vCard integration
- SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable PWA

Blog Features:
- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews`,
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
    isExpanded: true,
  },
  {
    id: "zadark",
    title: "ZaDark",
    period: {
      start: "01.2022",
    },
    link: "https://zadark.com",
    skills: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
- Earned 10M+ VND in net sales from a paid Safari Extension.
- 80,000+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
- 15,000+ active users via Chrome Web Store
- Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
    isExpanded: true,
  },
  {
    id: "taskbox",
    title: "TaskBox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/taskbox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  },
  {
    id: "daichat-app",
    title: "DaiChat App",
    period: {
      start: "07.2020",
      end: "07.2020",
    },
    link: "https://www.youtube.com/watch?v=H5U3J_W1low",
    skills: ["University Project", "Java", "Java Swing", "Java Networking"],
    description: `- Course: Java Application Programming — FIT@HCMUS
- Requirement: Developed a real-time chat application using Java technologies
- Project Score: 10/10
- Source Code:
  - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server
  - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client`,
  },  
];
