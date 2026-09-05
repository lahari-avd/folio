import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <h1 className="text-2xl font-semibold tracking-tight">
        Hi, I&apos;m Your Name.
      </h1>
      <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
        I build things for the web. Here&apos;s a selection of projects I&apos;ve worked on.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-xl border border-black/[.08] p-6 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:hover:border-white/[.24]"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-medium">{project.title}</h2>
              <span className="text-xs text-zinc-500">{project.year}</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/[.04] px-2.5 py-1 text-xs text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
