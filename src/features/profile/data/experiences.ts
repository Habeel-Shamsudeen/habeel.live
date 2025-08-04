import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "simplamo",
    companyName: "Simplamo Enterprise JSC",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Senior Frontend Developer",
        employmentPeriod: {
          start: "10.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
- Develop [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
- Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
- Develop interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
- Develop and maintain core features to enhance functionality and user experience.
- Ensure UI/UX consistency and adherence to standards.
- Implement robust frontend solutions for web and mobile platforms.
- Analyze technical capabilities and provide optimal solutions.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Dify",
          "Zalo Mini App",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "UI Design Lead",
        employmentPeriod: {
          start: "10.2022",
        },
        employmentType: "Full-time",
        icon: "design",
        description: `- Ensure UI/UX consistency and high-quality standards.
- Design intuitive, user-focused interfaces aligned with business goals.
- Define and establish a cohesive UI style for Simplamo.`,
        skills: ["Creativity", "UI/UX Design", "Figma"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        employmentType: "Part-time",
        description: `- Built an order management website with real-time delivery tracking.
- Developed an e-commerce site for bird's nest products.
- Created a map to display monitoring station data.
- Designed a customizable WordPress landing page.`,
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "WordPress",
          "Docker",
          "NGINX",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Graphic & UI/UX Designer",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Part-time",
        description: "Designed logos, posters, ads, and UI.",
        icon: "design",
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Sketch",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
  },
];
