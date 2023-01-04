/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "~/lib/static-data";

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="my-8 p-4">
      <p className="font-serif text-lg">Featured projects</p>
      <div className="featured-projects my-8 grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project} className="group relative">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt={project}
            />
            <h2 className="mt-2">
              <Link className="project text-2xl font-bold" href="/">
                {project}
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}
