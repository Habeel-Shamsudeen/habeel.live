import { ArrowUpRightIcon, MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/data/user";
import { decodeEmail } from "@/utils/string";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function Contact() {
  const email = decodeEmail(USER.email);

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Let&apos;s work together</PanelTitle>
      </PanelHeader>
      <PanelContent className="space-y-4">
        <Prose>
          <p>
            For an engineering role, contract work, or a product you want to
            build, send me a note about your team and what you need. You can
            find my work above and my experience in the resume.
          </p>
        </Prose>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${email}`}>
              <MailIcon aria-hidden />
              Email me
            </a>
          </Button>
          <a
            className="inline-flex min-h-10 items-center gap-1 text-sm underline-offset-4 hover:underline"
            href={USER.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
            <ArrowUpRightIcon className="size-4" aria-hidden />
          </a>
        </div>
      </PanelContent>
    </Panel>
  );
}
