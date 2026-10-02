import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";

const content = `# ${USER.firstName} ${USER.lastName}

> ${USER.bio}

- [About](${SITE_INFO.url}/about.md): Background, skills, education, and contact information.
- [Experience](${SITE_INFO.url}/experience.md): Engineering roles and contributions.
- [Projects](${SITE_INFO.url}/projects.md): Selected products and technical work.
- [Resume](${SITE_INFO.url}${USER.resumeUrl}): Download my resume.
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
