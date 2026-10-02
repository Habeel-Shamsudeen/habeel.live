import { DownloadIcon, MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { USER } from "@/data/user";
import { decodeEmail } from "@/utils/string";

import { Panel, PanelContent } from "./panel";

export function ProfileIntro() {
  return (
    <Panel aria-label="Contact and resume">
      <PanelContent>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="lg">
            <a href={`mailto:${decodeEmail(USER.email)}`}>
              <MailIcon aria-hidden />
              Get in touch
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={USER.resumeUrl} download>
              <DownloadIcon aria-hidden />
              Download resume
            </a>
          </Button>
        </div>
      </PanelContent>
    </Panel>
  );
}
