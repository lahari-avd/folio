import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-editorial text-5xl leading-tight tracking-tight text-text-primary sm:text-6xl">
          Lahari Avadhanam
        </h1>
        <p className="mt-4 text-md text-emphasis">
          Product Designer / Visual Storyteller
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-lg border border-border-default p-6 transition-colors hover:border-text-muted"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="font-medium text-text-primary">{project.title}</h2>
                <span className="text-xs text-text-muted">{project.year}</span>
              </div>
              <p className="mt-2 text-sm text-text-secondary">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
