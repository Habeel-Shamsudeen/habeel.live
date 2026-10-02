import { USER } from "@/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>
      <PanelContent className="space-y-1">
        <h3 className="font-medium">{USER.education.degree}</h3>
        <p className="font-mono text-sm">{USER.education.institution}</p>
        <p className="font-mono text-sm text-muted-foreground">
          {USER.education.location}
        </p>
      </PanelContent>
    </Panel>
  );
}
