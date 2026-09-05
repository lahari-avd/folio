export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  description: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "A short one-line description of what this project is and the problem it solves.",
    year: "2026",
    role: "Designer & Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: [
      "Replace this with a real overview of the project: what it does, who it's for, and why you built it.",
      "Add a second paragraph covering your approach, key decisions, or interesting challenges you solved.",
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-one",
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "Another short one-line description for the second project card.",
    year: "2025",
    role: "Developer",
    stack: ["React", "Node.js"],
    description: [
      "Replace this with a real overview of the project.",
      "Add more details about outcomes, metrics, or lessons learned.",
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
