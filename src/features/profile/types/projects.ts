export type Project = {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  summary?: string;
  link?: string;
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};
