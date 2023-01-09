/* eslint-disable @next/next/no-img-element */
import { projects } from "~/lib/static-data";

export default function FeaturedProjectsSection() {
  return (
    <section
      id="FeaturedProjectsSection"
      className="FeaturedProjectsSection my-8 p-4"
    >
      <p className="font-serif text-lg">Featured projects</p>
      <div className="featured-projects my-8 grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project._uid} className="group relative">
            <img
              className="w-full"
              src={project.image.filename}
              alt={project.image.alt}
            />
            <h2 className="mt-2 project text-2xl font-bold">{project.title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
