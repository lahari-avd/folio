import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Your Name` : "Project not found" };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-foreground transition-colors"
      >
        &larr; Back to work
      </Link>

      <div className="mt-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
        <span className="text-sm text-zinc-500">{project.year}</span>
      </div>

      <p className="mt-2 text-sm text-zinc-500">{project.role}</p>

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

      <div className="mt-8 flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
        {project.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-10 flex gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:hover:border-white/[.24]"
            >
              Live site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/[.08] px-4 py-2 transition-colors hover:border-black/[.16] dark:border-white/[.12] dark:hover:border-white/[.24]"
            >
              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
}
